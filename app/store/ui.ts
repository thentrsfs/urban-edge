'use client';

import {create} from 'zustand';

interface UIState {
    isNavOpen: boolean;
    setIsNavOpen: (open: boolean) => void;

    isNavVisible: boolean;
    setIsNavVisible: (visible: boolean) => void;

    isScrolled: boolean;
    setIsScrolled: (scrolled: boolean) => void;

    splashScreen: boolean;
    setSplashScreen: (show: boolean) => void;

    menuPath: string;
    setMenuPath: (path: string) => void;

    openMenu: (path: string) => void;
}

export const useUI = create<UIState>()(
    (set) => ({
        isNavOpen: false,
        setIsNavOpen: (open) => set({ isNavOpen: open }),

        isNavVisible: true,
        setIsNavVisible: (visible) => set({ isNavVisible: visible }),

        isScrolled: false,
        setIsScrolled: (scrolled) => set({ isScrolled: scrolled }),

        splashScreen: true,
        setSplashScreen: (show) => set({ splashScreen: show }),

        menuPath: '',
        setMenuPath: (path) => set({ menuPath: path }),

        openMenu: (path) => set({menuPath: path, isNavOpen: true})
    })
)
