'use client';

import { useEffect } from 'react';

import { useUI } from '../store/ui';

export function useScrollLock() {
	const isNavOpen = useUI((s) => s.isNavOpen);
	const splashScreen = useUI((s) => s.splashScreen);

	useEffect(() => {
		const shouldLock = splashScreen || isNavOpen;
		if (!shouldLock) return;

		const preventScroll = (e: Event) => e.preventDefault();
		const preventKeys = (e: KeyboardEvent) => {
			const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'];
			if (keys.includes(e.code)) e.preventDefault();
		};

		window.addEventListener('wheel', preventScroll, { passive: false });
		window.addEventListener('touchmove', preventScroll, { passive: false });
		window.addEventListener('keydown', preventKeys);

		return () => {
			window.removeEventListener('wheel', preventScroll);
			window.removeEventListener('touchmove', preventScroll);
			window.removeEventListener('keydown', preventKeys);
		};
	}, [splashScreen, isNavOpen]);
}
