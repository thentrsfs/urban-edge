'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollToTop() {
	const pathname = usePathname();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });

		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 50);
	}, [pathname]);

	return null;
}
