export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span
          className="font-display font-bold text-lg"
          style={{ color: "var(--ink)" }}
        >
          PO.
        </span>
        <p
          className="text-xs"
          style={{ color: "var(--ink-faint)" }}
        >
          © {new Date().getFullYear()} Pelumi Ogunleye. Built with Next.js & ☕
        </p>
      </div>
    </footer>
  )
}