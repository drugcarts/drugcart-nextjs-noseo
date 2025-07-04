'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function ProtectedLayout({ children }) {
    const router = useRouter();
    const { carts, items } = useSelector((state) => state.cartData);

    useEffect(() => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

        if (!token) {
            router.replace('/login');
        } else if (items.length === 0) {
            router.replace('/');
        }
    }, [router]);

    return <>{children}</>;
}
