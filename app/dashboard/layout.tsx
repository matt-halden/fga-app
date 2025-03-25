import Link from 'next/link';
import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/dashboard/avatar';
import SideNav from '@/app/ui/dashboard/sidenav';
import { getSession } from '@auth0/nextjs-auth0';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  // Get session but don't require it for the layout
  const session = await getSession();
  const user = session?.user;
  
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
          {user ? (
            <Avatar>
              <AvatarImage src={user.picture || "https://github.com/shadcn.png"} alt={user.name || "@user"} />
              <AvatarFallback>{user.name?.substring(0, 2).toUpperCase() || "UN"}</AvatarFallback>
            </Avatar>
          ) : (
            <a 
              href="/api/auth/login" 
              className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Sign In
            </a>
          )}
        </header>

        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}