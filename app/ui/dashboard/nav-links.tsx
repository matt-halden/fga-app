'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Settings, Play, Lock, Layers } from 'lucide-react';
import { useUser } from '@auth0/nextjs-auth0/client';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Architecture', href: '/dashboard/architecture', icon: Layers },
  { 
    name: 'Demo', 
    href: '/dashboard/demo', 
    icon: Play,
    protected: true 
  },
  { 
    name: 'Settings', 
    href: '/dashboard/settings', 
    icon: Settings,
    protected: true 
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { user, isLoading } = useUser();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isProtected = link.protected && !user;
        
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
            {isProtected && (
              <Lock className="ml-2 h-3 w-3 text-gray-400" />
            )}
          </Link>
        );
      })}
    </>
  );
}