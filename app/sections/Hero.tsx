import HeroScene from "../components/HeroScene"

const Hero = () => {
  return (
    <section className=" h-dvh relative lg:px-30 px-6 py-10 lg:py-10 flex flex-col">
<HeroScene/>
        <div className="lg:absolute lg:top-1/2 lg:left-30 lg:-translate-y-1/2 flex flex-col gap-4 z-10 ">
        <p className="text-sm tracking-widest text-muted">
  NEW DROP 2026
</p>
        <h1 className="lg:text-8xl text-4xl font-bold font-heading tracking-wide">New Collection 2026</h1>
        <p className="lg:text-2xl text-muted">Minimal. Timeless. UrbanEdge.</p>
        <button className="border border-white px-7 py-3 w-fit text-sm tracking-widest lg:mt-6 mt-4 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer">SHOP NOW</button>
        </div>
    </section>
  )
}

export default Hero