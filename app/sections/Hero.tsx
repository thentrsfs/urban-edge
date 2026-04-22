import HeroScene from "../components/HeroScene"
import { Group } from "three"

type HeroProps = {
  hoodieRef: React.RefObject<Group | null>;
  heroRef: React.RefObject<HTMLDivElement | null>;
  onModelReady: () => void
};

const Hero = ({heroRef, hoodieRef, onModelReady} : HeroProps) => {
  return (
    <section ref={heroRef} className="min-h-dvh relative lg:px-30 px-6 py-10 lg:py-10 flex flex-col z-10">
        <div className="absolute hero-text lg:top-1/2 lg:left-30 lg:-translate-y-1/2 top-35 flex flex-col lg:gap-4 gap-3 z-11 "><p className="text-sm tracking-widest text-muted">NEW DROP 2026</p>
        <h1 className="lg:text-8xl text-[40px] font-bold font-heading tracking-wide">New Collection 2026</h1>
        <p className="lg:text-2xl text-muted">Minimal. Timeless. UrbanEdge.</p>
        <button className="border border-white px-7 py-3 w-fit text-sm tracking-widest lg:mt-6 mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer">SHOP NOW</button>
        </div>
        <HeroScene hoodieRef={hoodieRef} onModelReady={onModelReady}/>
        <div className="absolute lg:top-1/2 lg:left-30 bottom-20 lg:-translate-y-1/2 z-10 product-info">
          <h4 className="font-bold mb-2 text-4xl lg:text-7xl
font-heading
tracking-wide
text-white">Essential Hoodie</h4>
<p className="lg:text-lg
text-secondary/90
font-medium
tracking-wide">Crafted for everyday movement.</p>
<p className="lg:text-sm text-xs
text-muted/90
tracking-wider
uppercase">Premium cotton. Minimal design.</p>
        </div>
    </section>
  )
}

export default Hero