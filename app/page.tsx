import Hero from "@/components/layout/Hero"
import Marquees from "@/components/layout/Marquees"
import Categories from "@/components/layout/Categories"
import About from "@/components/layout/About"
import Reassurance from "@/components/layout/Reassurance"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative z-0">
        <Hero />
        <Marquees />
      </div>
      <Categories />
      <About />
      <Reassurance />
    </div>
  )
}
