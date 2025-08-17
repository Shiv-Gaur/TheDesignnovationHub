"use client"

import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onReady = () => {
      const id = setTimeout(() => setHidden(true), 200)
      return () => clearTimeout(id)
    }

    if (document.readyState === "complete") {
      const cleanup = onReady()
      return cleanup
    } else {
      window.addEventListener("load", onReady)
      return () => window.removeEventListener("load", onReady)
    }
  }, [])

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black transition-opacity duration-300 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ willChange: "opacity" }}
    >
      <div className="flex items-center gap-3">
        <img src="/tdh-logo.png" alt="TDH" className="h-8 w-8 dark:invert" width={32} height={32} />
        <div className="loader-dot" aria-label="Loading" />
      </div>
    </div>
  )
}
