import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function ProtectedPage({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const session = await getSession();
  
  if (!session?.user) {
    redirect('/api/auth/login');
  }
  
  return <>{children}</>;
} 