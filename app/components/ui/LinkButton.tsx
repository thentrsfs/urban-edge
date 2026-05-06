'use client';

import Link from 'next/link';

const LinkButton = ({
	children,
	href,
	className = '',
}: {
	children: React.ReactNode;
	href: string;
	className?: string;
}) => {
	return (
		<Link
			href={href}
			className={`border border-white px-7 py-3 w-fit text-sm tracking-widest uppercase backdrop-blur-lg lg:mt-6 mt-2 text-white hover:bg-white hover:text-bg font-medium transition cursor-pointer ${className}`}>
			{children}
		</Link>
	);
};

export default LinkButton;
