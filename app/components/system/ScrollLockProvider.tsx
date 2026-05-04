'use client';

import { useScrollLock } from '@/app/hooks/useScrollLock';

const ScrollLockProvider = ({ children }: { children: React.ReactNode }) => {
	useScrollLock();
	return <>{children}</>;
};

export default ScrollLockProvider;
