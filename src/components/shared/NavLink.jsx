"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors
        ${isActive
          ? 'bg-indigo-600 text-white font-semibold'
          : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
        }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;