'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUI } from '@/app/store/ui';

const Nav = () => {
	const pathname = usePathname();
	const openMenu = useUI((state) => state.openMenu);

	const handleScrollToSection = ({
		e,
		id,
	}: {
		e: React.MouseEvent<HTMLAnchorElement>;
		id: string;
	}) => {
		e.preventDefault();
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className='absolute top-0 w-full flex justify-between items-center lg:px-30 p-6 lg:py-8 z-12 text-white'>
			<Link href='/'>
				<h1 className='lg:text-5xl text-3xl font-bold font-heading'>
					UrbanEdge
				</h1>
			</Link>
			<button
				onClick={() => openMenu(pathname)}
				className='lg:hidden text-lg font-medium'>
				Menu
			</button>
			<ul className='lg:flex lg:gap-15 tracking-widest text-sm items-center hidden uppercase text-white/80'>
				{pathname === '/' ? (
					<div className='flex lg:gap-15'>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/shop'>Shop</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#latest-drops'
								onClick={(e) =>
									handleScrollToSection({ e, id: 'latest-drops' })
								}>
								Latest Drops
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link
								href='#lookbook'
								onClick={(e) => handleScrollToSection({ e, id: 'lookbook' })}>
								Lookbook
							</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</div>
				) : pathname === '/shop' ? (
					<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
						<Link href='/'>Home</Link>{' '}
						<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
					</li>
				) : (
					<div className='flex gap-15'>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/'>Home</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
						<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
							<Link href='/shop'>Shop</Link>{' '}
							<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full' />
						</li>
					</div>
				)}
				{pathname !== '/cart' && (
					<li className='cursor-pointer relative group hover:text-white transition-all duration-300'>
						<Link href='/cart'>Cart</Link>{' '}
						<span className='absolute left-0 bottom-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0' />
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;
