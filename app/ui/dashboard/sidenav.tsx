import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-4 flex justify-center">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={25}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          <NavLinks />
        </nav>

        {/* Logout button */}
        <div className="p-4">
          <Button className="w-full flex items-center justify-center font-mono bg-transparent border border-input">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}