"use client"

import React, { useState, useEffect, useRef } from "react"

interface TypingCodeProps {
  code: string
  speed?: number
  className?: string
  lineDelay?: number
  startDelay?: number
  cursor?: string
  ariaLabel?: string
  outputLines?: string[]
  outputDelayPerLine?: number
  consoleTitle?: string
  showLineNumbers?: boolean
  heightClass?: string // fixed height (applied to scroll area)
  loop?: boolean
  restartDelay?: number
  disableManualScroll?: boolean
}

// Accessible typing code component respecting reduced motion
export const TypingCode: React.FC<TypingCodeProps> = ({
  code,
  speed = 18,
  className = "",
  lineDelay = 120,
  startDelay = 400,
  cursor = "▋",
  ariaLabel = "Animated code sample",
  outputLines = [],
  outputDelayPerLine = 300,
  consoleTitle = "console",
  showLineNumbers = false,
  heightClass = "h-80"
}) => {
  const [index, setIndex] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [outputIndex, setOutputIndex] = useState(0)
  const codeRef = useRef<HTMLDivElement | null>(null)
  const {
    loop = false,
    restartDelay = 1600,
    disableManualScroll = true
  } = { loop: false, restartDelay: 1600, disableManualScroll: true }
  const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (shouldReduceMotion) {
      setIndex(code.length)
      setIsDone(true)
      return
    }
    let timeout: NodeJS.Timeout
    let cancelled = false

    const typeNext = () => {
      if (cancelled) return
      if (index < code.length) {
        const nextChar = code[index]
        const delay = nextChar === '\n' ? speed + lineDelay : speed
        timeout = setTimeout(() => {
          setIndex((i) => i + 1)
        }, delay)
      } else {
        setIsDone(true)
      }
    }

    // initial delay only at start
    if (index === 0) {
      timeout = setTimeout(typeNext, startDelay)
    } else {
      typeNext()
    }

    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [index, code, speed, lineDelay, startDelay, shouldReduceMotion])

  // Auto scroll to bottom of pre if overflowing
  useEffect(() => {
  const el = codeRef.current
  if (el) el.scrollTop = el.scrollHeight
  }, [index])

  // Auto scroll on output growth
  useEffect(() => {
    const el = codeRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [outputIndex])

  // Looping logic
  useEffect(() => {
    if (!loop) return
    if (!isDone) return
    if (outputLines.length && outputIndex < outputLines.length) return
    const t = setTimeout(() => {
      setIndex(0)
      setOutputIndex(0)
      setIsDone(false)
    }, restartDelay)
    return () => clearTimeout(t)
  }, [isDone, outputIndex, outputLines, loop, restartDelay])

  // Disable manual scroll interactions if requested
  useEffect(() => {
    if (!disableManualScroll) return
    const el = codeRef.current
    if (!el) return
    const prevent = (e: Event) => { e.preventDefault() }
    el.addEventListener('wheel', prevent, { passive: false })
    el.addEventListener('touchmove', prevent, { passive: false })
    return () => {
      el.removeEventListener('wheel', prevent)
      el.removeEventListener('touchmove', prevent)
    }
  }, [disableManualScroll])

  // Start output reveal after code completes
  useEffect(() => {
    if (!isDone || outputLines.length === 0) return
    if (outputIndex >= outputLines.length) return
    const t = setTimeout(() => setOutputIndex(i => i + 1), outputDelayPerLine)
    return () => clearTimeout(t)
  }, [isDone, outputIndex, outputLines, outputDelayPerLine])

  const displayed = code.slice(0, index)

  // Basic syntax highlighting (very lightweight)
  const escapeHtml = (s: string) => s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const highlight = (src: string) => {
    let out = escapeHtml(src)
    // Strings
    out = out.replace(/("[^"]*"|'[^']*')/g, '<span class="text-emerald-400">$1</span>')
    // Keywords
    out = out.replace(/\b(class|static|public|private|const|let|return|new|import|from|extends|interface|int|void|Map)\b/g, '<span class="text-blue-400">$1</span>')
    // Function names (simple heuristic)
    out = out.replace(/(\w+)(?=\s*\()/g, '<span class="text-indigo-300">$1</span>')
    // Comments
    out = out.replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>')
    return out
  }

  const withLineNumbers = (html: string) => {
    if (!showLineNumbers) return html
    const lines = html.split(/\n/)
    return lines.map((l, i) => `<span class='select-none pr-4 text-gray-500'>${i + 1}</span>${l}`).join('\n')
  }

  const highlighted = withLineNumbers(highlight(displayed))

  return (
    <div className={className} aria-label={ariaLabel} aria-live="polite">
  <div ref={codeRef} className={`relative overflow-auto code-scroll-hide font-mono text-xs md:text-sm leading-relaxed ${heightClass} pr-4`}>        
        <div className="pb-2">
          <pre className="whitespace-pre-wrap"><code dangerouslySetInnerHTML={{ __html: highlighted + (!isDone ? `<span class='animate-pulse text-blue-400'>${cursor}</span>` : '') }} /></pre>
        </div>
        {outputLines.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-700/60">
            <div className="text-gray-500 text-[10px] mb-1">{consoleTitle}</div>
            {outputLines.slice(0, outputIndex).map((l, i) => {
              const bold = /welcome to tdh/i.test(l)
              return (
                <div key={i} className={`animate-fade-in ${bold ? 'font-bold text-white' : ''}`}>
                  <span className="text-gray-600">$</span> {bold ? l.toUpperCase() : l}
                </div>
              )
            })}
            {!isDone && outputLines.length > 0 && (
              <div className="text-gray-600">$</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TypingCode
