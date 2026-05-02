import Image from "next/image"

const badgeClasses = "flex items-center p-4 transition-all duration-200 border-2 text-foreground shadow-white h-22 border-foreground outline-hidden hover:shadow-none bg-background font-head uppercase"

export default function Reassurance() {
  return (
    <div className="w-full border-b-2 bg-muted-foreground">
      <ul className="flex items-center py-4 justify-evenly">
        <li className={badgeClasses}>
          <div className="grid grid-cols-2 mr-2">
            <Image src="/icons/mastercard.svg" width={50} height={50} className="h-10" alt="Mastercard" />
            <Image src="/icons/visa.svg" width={50} height={50} className="h-10" alt="Visa" />
            <Image src="/icons/paypal.svg" width={50} height={50} className="h-10" alt="PayPal" />
            <Image src="/icons/applepay.svg" width={50} height={50} className="h-10" alt="Apple Pay" />
          </div>
          <span>Paiement sécurisé</span>
        </li>
        <li className={badgeClasses}>
          <Image src="/icons/shipping.svg" width={50} height={50} className="h-20 mr-2" alt="Globe" />
          <span>Livraison mondiale</span>
        </li>
        <li className={badgeClasses}>
          <Image src="/icons/support.svg" width={50} height={50} className="h-20 mr-2" alt="Support" />
          <span>Support client réactif</span>
        </li>
      </ul>
    </div>
  )
}
