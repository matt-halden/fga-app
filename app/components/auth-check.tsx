import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export async function AuthCheck({ 
  children,
  fallback
}: { 
  children: React.ReactNode,
  fallback?: React.ReactNode 
}) {
  const session = await getSession();
  
  if (!session?.user) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return redirect('/api/auth/login');
  }
  
  return <>{children}</>;
}

export async function UnauthCheck({ 
  children,
  fallback
}: { 
  children: React.ReactNode,
  fallback?: React.ReactNode 
}) {
  const session = await getSession();
  
  if (session?.user) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return redirect('/dashboard');
  }
  
  return <>{children}</>;
} 