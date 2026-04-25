'use client';

import { createContext, useContext, useState } from 'react';

interface UIContextType {
	isNavOpen: boolean;
	setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UIContext = createContext<UIContextType>({
	isNavOpen: false,
	setIsNavOpen: () => {},
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<UIContext.Provider value={{ isNavOpen, setIsNavOpen }}>
			{children}
		</UIContext.Provider>
	);
};

export const useUI = () => useContext(UIContext);
