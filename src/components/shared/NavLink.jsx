"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({href, children}) => {
    const pathname = usePathname();

    const isActive = href === pathname;

    return (
        <Link href={href} className={`p-3 flex gap-1 items-center rounded-xl ${isActive ? 'border border-blue-900 bg-blue-900 text-white font-semibold' : ''}`}>{children}</Link>
    );
};

export default NavLink;