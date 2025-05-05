import Link from 'next/link'
import { Button } from './ui/shadcn-components'

export function Header() {
  return (
    <header className="header">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            Song Voting System
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="nav-item">
              Dashboard
            </Link>
            <Link href="/votes" className="nav-item">
              Votes
            </Link>
            <Button variant="default" className="ml-4">
              Sign In
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
} 