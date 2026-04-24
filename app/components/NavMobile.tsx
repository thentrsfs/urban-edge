import { X } from 'lucide-react';
const NavMobile = ({
	isNavOpen,
	setIsNavOpen,
}: {
	isNavOpen: boolean;
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<nav
			className={`fixed inset-0 bg-bg text-white flex flex-col justify-center items-center transition-all duration-300 ${isNavOpen ? 'opacity-100 z-99' : 'opacity-0'}`}>
			<ul className='flex flex-col gap-15 tracking-widest items-center uppercase text-white/80'>
				<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
					<a href='#'>Shop</a>{' '}
					<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
				</li>
				<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
					<a href='#latest-drops'>Latest Drops</a>{' '}
					<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
				</li>
				<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
					<a href='#lookbook'>Lookbook</a>{' '}
					<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
				</li>
				<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
					<a href=''>Cart</a>{' '}
					<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
				</li>
			</ul>
			<X
				onClick={() => setIsNavOpen(false)}
				className='absolute top-8 right-8'
			/>
		</nav>
	);
};

export default NavMobile;
