'use client';

import {create} from 'zustand';

interface UIState {
    isNavOpen: boolean;
    setIsNavOpen: (open: boolean) => void;

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

        splashScreen: true,
        setSplashScreen: (show) => set({ splashScreen: show }),

        menuPath: '',
        setMenuPath: (path) => set({ menuPath: path }),

        openMenu: (path) => set({menuPath: path, isNavOpen: true})
    })
)
