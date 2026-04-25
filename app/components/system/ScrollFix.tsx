'use client';

import { useEffect } from 'react';

export default function ScrollFix() {
	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
	}, []);

	return null;
}
