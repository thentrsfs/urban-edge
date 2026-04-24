const Nav = () => {
	return (
		<nav className='absolute top-0 w-full flex justify-between items-center lg:px-30 p-6 lg:py-8 z-11 text-white'>
			<h1 className='lg:text-5xl text-3xl font-bold font-heading'>UrbanEdge</h1>
			<button className='lg:hidden text-lg font-medium'>Menu</button>
			<ul className='lg:flex lg:gap-12 tracking-widest items-center hidden uppercase'>
				<li className='cursor-pointer relative group'>
					<a href='#'>Shop</a>{' '}
					<span className='absolute left-1/2 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
				</li>
				<li className='cursor-pointer relative group'>
					<a href='#latest-drops'>Latest Drops</a>{' '}
					<span className='absolute left-1/2 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
				</li>
				<li className='cursor-pointer relative group'>
					<a href='#lookbook'>Lookbook</a>{' '}
					<span className='absolute left-1/2 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
				</li>
				<li className='cursor-pointer relative group'>
					<a href=''>Cart</a>{' '}
					<span className='absolute left-1/2 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
