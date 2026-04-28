'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface UIContextType {
	isNavOpen: boolean;
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
	splashScreen: boolean;
	setSplashScreen: React.Dispatch<React.SetStateAction<boolean>>;
	menuPath?: string;
	openMenu?: () => void;
}

const UIContext = createContext<UIContextType>({
	isNavOpen: false,
	setIsNavOpen: () => {},
	splashScreen: true,
	setSplashScreen: () => {},
	openMenu: () => {},
	menuPath: '',
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	const [isNavOpen, setIsNavOpen] = useState(false);
	const [splashScreen, setSplashScreen] = useState(true);
	const [menuPath, setMenuPath] = useState(pathname);

	const openMenu = () => {
		setMenuPath(pathname); // 👈 capture route HERE
		setIsNavOpen(true);
	};

	// Prevent scroll while splash screen is active
	useEffect(() => {
		if (!splashScreen && !isNavOpen) return;

		const preventScroll = (e: Event) => {
			e.preventDefault();
		};

		const preventKeys = (e: KeyboardEvent) => {
			const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'];
			if (keys.includes(e.code)) {
				e.preventDefault();
			}
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

	return (
		<UIContext.Provider
			value={{
				isNavOpen,
				setIsNavOpen,
				splashScreen,
				setSplashScreen,
				menuPath,
				openMenu,
			}}>
			{children}
		</UIContext.Provider>
	);
};

export const useUI = () => useContext(UIContext);
