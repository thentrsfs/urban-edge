
const Nav = () => {
  return (
    <nav className="absolute top-0 w-full flex justify-between items-center lg:px-30 lg:py-8">
        <h1 className="text-5xl font-bold font-heading">UrbanEdge</h1>
        <ul className="flex gap-6 text-xl font-medium">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
        </ul>
    </nav>
  )
}

export default Nav