'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, KeyRound, Users, BarChart, Settings, Eye, Layers } from 'lucide-react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Architecture', href: '/dashboard/architecture', icon: Layers },
  { name: 'Demo', href: '/dashboard/demo', icon: Eye },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-mono rounded-md transition-colors ${
              pathname === link.href ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <LinkIcon className="mr-3 h-5 w-5" />
            {link.name}
          </Link>
        );
      })}
    </>
  );
}