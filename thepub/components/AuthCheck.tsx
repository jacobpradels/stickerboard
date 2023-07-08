'use client';

import { useSession } from 'next-auth/react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'unauthenticated') {
        return <div>Access Denied</div>;
    }

    return children;
}