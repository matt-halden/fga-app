import Link from 'next/link';
import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/dashboard/avatar';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <SideNav />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
                <a href="https://auth0.com/docs/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-mono">
                Docs
                </a>
                <a href="https://auth0.com/docs/api" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-mono">
                API
                </a>
                <a href="https://auth0.com/docs/libraries" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-mono">
                SDKs
                </a>
                <a href="/help" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-mono">
                Help
                </a>
            </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </header>

        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}