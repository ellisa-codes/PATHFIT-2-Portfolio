import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium">PATHFIT 1 Journey</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A student portfolio showcasing my journey through the PATHFIT 1 course.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/food-activity" className="text-sm text-muted-foreground hover:text-foreground">
                Food & Activity
              </Link>
              <Link href="/advocacy" className="text-sm text-muted-foreground hover:text-foreground">
                Advocacy
              </Link>
              <Link href="/pe-day" className="text-sm text-muted-foreground hover:text-foreground">
                PE Day 2024
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium">Contact</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Feel free to reach out with any questions or feedback about my PATHFIT journey.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PATHFIT 1 Journey Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
