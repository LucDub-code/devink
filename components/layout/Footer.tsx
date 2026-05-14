import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="h-20 bg-foreground">
      <div className="w-full h-full flex justify-around">
        <div className="h-full flex items-center text-center py-4 -translate-x-28">
          <p>© 2026 Devink</p>
        </div>
        <nav aria-label="footer">
          <ul className="h-full flex justify-center items-center gap-4">
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
          width={80}
          height={80}
          priority
          className="translate-x-32"
        />
      </div>
    </footer>
  )
}