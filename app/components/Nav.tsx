import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="absolute top-0 w-full flex justify-between items-center lg:px-30 p-6 lg:py-8">
        <h1 className="lg:text-5xl text-3xl font-bold font-heading">UrbanEdge</h1>
        <button className="lg:hidden text-lg font-medium">Menu</button>
        <ul className="lg:flex gap-10 text-xl font-medium items-center hidden">
            <li><a href="">Shop</a></li>
            <li><a href="">New Drop</a></li>
            <li><a href="">Lookbook</a></li>
            <li><a href=""><FiShoppingCart className="text-2xl" /></a></li>
        </ul>
    </nav>
  )
}

export default Nav