'use client';

import { createContext, useContext, useState } from 'react';

interface UIContextType {
	isNavOpen: boolean;
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
	splashScreen: boolean;
	setSplashScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UIContext = createContext<UIContextType>({
	isNavOpen: false,
	setIsNavOpen: () => {},
	splashScreen: true,
	setSplashScreen: () => {},
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [splashScreen, setSplashScreen] = useState(true);

	return (
		<UIContext.Provider
			value={{ isNavOpen, setIsNavOpen, splashScreen, setSplashScreen }}>
			{children}
		</UIContext.Provider>
	);
};

export const useUI = () => useContext(UIContext);
