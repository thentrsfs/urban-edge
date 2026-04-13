import HeroScene from "../components/HeroScene"

const Hero = () => {
  return (
    <section className="h-screen relative px-30 py-10">
        <div className="absolute top-1/2 left-30 -translate-y-1/2 flex flex-col gap-4 z-10 ">
        <p className="text-sm tracking-widest text-muted">
  NEW DROP 2026
</p>
        <h1 className="text-6xl font-bold">New Collection 2026</h1>
        <p className="text-2xl text-muted">Minimal. Timeless. UrbanEdge.</p>
        </div>
<HeroScene/>
    </section>
  )
}

export default Hero