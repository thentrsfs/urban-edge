import Image from "next/image"

const products = [
    {
        id: 1,
        name: "Hoodie 1",
        image: "/images/hoodie-2.jpg",
        price: 100
    },
    {
        id: 2,
        name: "T-Shirt",
        image: "/images/shirt.jpg",
        price: 100
    },
    {
        id: 3,
        name: "Hoodie 2",
        image: "/images/hoodie-1.jpg",
        price: 100
    }
]

const FeaturedProducts = () => {
  return (
    <section className="min-h-dvh lg:px-30 lg:py-10 px-6">
        <h1 className="lg:text-7xl font-bold font-heading tracking-wide">Featured Collection</h1>

        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 mt-10">
            {products.map((product) => (
                <div key={product.id} className="flex flex-col gap-2">
                    <div className="relative h-160 overflow-hidden group">
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-all duration-300 z-10" />
                 <Image src={product.image} width={500} height={500} alt="Product" className="w-full   h-full object-cover group-hover:scale-100 scale-105 transition-transform duration-300" />
                 </div>
                 <p className="text-sm tracking-widest text-muted">{product.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default FeaturedProducts