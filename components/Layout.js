import Link from 'next/link'

export default function Layout({ children, layoutMessage }) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-foreground text-background p-4">
        <nav className="flex gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
        {layoutMessage && (
          <div className="mt-2 text-sm bg-background/10 p-2 rounded">
            {layoutMessage}
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background p-4 mt-8">
        <p className="text-center">© 2024 My Website</p>
      </footer>
    </div>
  )
} 