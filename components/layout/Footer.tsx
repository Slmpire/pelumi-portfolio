export default function Footer() {
  return (
    <footer className="border-t border-(--color-brand-ink)/10 py-8 mt-32">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="font-display font-bold text-(--color-brand-ink)">PO.</span>
        <p className="text-sm text-(--color-brand-ink)/40">
          © {new Date().getFullYear()} Pelumi Ogunleye. Built with Next.js.
        </p>
      </div>
    </footer>
  )
}