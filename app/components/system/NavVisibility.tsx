'use client';

import { useEffect } from 'react';
import { useUI } from '@/app/store/ui';

export default function NavVisibility() {
	const setIsNavVisible = useUI((state) => state.setIsNavVisible);
	const setIsScrolled = useUI((state) => state.setIsScrolled);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			setIsScrolled(currentScrollY > 50);

			if (currentScrollY < 50) {
				setIsNavVisible(true);
			} else if (currentScrollY > lastScrollY) {
				setIsNavVisible(false);
			} else {
				setIsNavVisible(true);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [setIsNavVisible]);

	return null;
}
