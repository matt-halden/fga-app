import { AuthCheck } from '@/app/components/auth-check';

export default function DemoPage() {
  return (
    <AuthCheck
      fallback={
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-100 dark:border-purple-800">
          <h2 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-2">Authentication Required</h2>
          <p className="text-purple-700 dark:text-purple-400 mb-4">
            You need to be logged in to access the demo.
          </p>
          <a 
            href="/api/auth/login" 
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Sign In
          </a>
        </div>
      }
    >
      <div>
        <h1 className="text-2xl font-bold mb-4">Interactive Demo</h1>
        <p className="mb-6">This is a protected demo that only authenticated users can access.</p>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-medium mb-4">Demo Content</h3>
          <p>Here's your exclusive demo content that's only available to authenticated users.</p>
        </div>
      </div>
    </AuthCheck>
  );
}