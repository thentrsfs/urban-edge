'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
		};

		window.history.scrollRestoration = 'manual';

		requestAnimationFrame(() => {
			requestAnimationFrame(scrollToTop);
		});

		window.addEventListener('load', scrollToTop);

		return () => {
			window.removeEventListener('load', scrollToTop);
		};
	}, []);

	return null;
}
