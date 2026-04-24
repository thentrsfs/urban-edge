const Footer = () => {
	return (
		<footer className='absolute w-full bottom-0 py-6 flex max-sm:flex-col items-center justify-between border-t border-muted/50 text-sm lg:px-30 px-6 text-muted'>
			<div className=' text-xs tracking-wider'>© 2026 URBANEDGE</div>
			<div className='text-center'>
				Designed & Developed by{' '}
				<a
					href='https://www.filipstojkov.com'
					target='_blank'
					className='hover:text-white transition hover:underline underline-offset-4'>
					Filip Stojkov
				</a>
			</div>

			<div className='flex gap-6'>
				<a
					href='https://linkedin.com/in/filip-stojkov-315773a1'
					target='_blank'
					className='hover:text-white transition hover:underline underline-offset-4'>
					LinkedIn
				</a>
				<a
					href='https://www.filipstojkov.com'
					target='_blank'
					className='hover:text-white transition hover:underline underline-offset-4'>
					Portfolio
				</a>
			</div>
		</footer>
	);
};

export default Footer;
