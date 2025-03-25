'use client';

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">RAG with FGA Overview</h1>
      <p className="mb-4">
        This is a public overview of what is FGA, RAG and how I applied it. Anyone can view this content.
      </p>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
        <p className="text-sm text-blue-800 dark:text-blue-300">
          Some features in the dashboard require authentication. Sign in to access all features.
        </p>
      </div>
    </div>
  );
}