export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black">
      <div className="flex items-center gap-3">
        <img src="/tdh-logo.png" alt="TDH" className="h-8 w-8 dark:invert" />
        <div className="loader-dot" aria-label="Loading" />
      </div>
    </div>
  )
}
