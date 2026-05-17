import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="h-20 bg-foreground">
      <div className="flex justify-around w-full h-full">
        <div className="flex items-center h-full py-4 text-center -translate-x-28">
          <p>© 2026 Devink</p>
        </div>
        <nav aria-label="footer">
          <ul className="flex items-center justify-center h-full gap-4">
            <li>
              <Link href="/legal" className="hover:underline">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                CGV
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </nav>
        <Image 
          src="/logos/logo-drop.svg"
          alt="logo drop"
          width={60}
          height={60}
          priority
          className="translate-x-32"
        />
      </div>
    </footer>
  )
}