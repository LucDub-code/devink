import Hero from "@/components/layout/Hero";
import Marquee from "@/components/layout/Marquee";
import Categories from "@/components/layout/Categories";
import About from "@/components/layout/About";
import CallToAction from "@/components/layout/CallToAction";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Marquee />
      <Categories />
      <About />
      <CallToAction />
    </div>
  );
}
