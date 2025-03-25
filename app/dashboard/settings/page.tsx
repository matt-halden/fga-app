import { AuthCheck } from '@/app/components/auth-check';

export default function SettingsPage() {
  return (
    <AuthCheck
      fallback={
        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border border-amber-100 dark:border-amber-800">
          <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-2">Authentication Required</h2>
          <p className="text-amber-700 dark:text-amber-400 mb-4">
            You need to be logged in to access settings.
          </p>
          <a 
            href="/api/auth/login" 
            className="inline-block px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Sign In
          </a>
        </div>
      }
    >
      <div>
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <p>This is a protected page that only authenticated users can access.</p>
        <div className="mt-6 grid gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Profile Settings</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage your profile information and preferences.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-medium mb-2">Account Settings</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage your account and security settings.
            </p>
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}