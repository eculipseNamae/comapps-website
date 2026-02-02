import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-xl mx-4">
        <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Page not found</h2>
        <p className="text-slate-600 mb-6">We couldn't find the page you're looking for. It may have been moved or deleted.</p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="px-6 py-3 bg-[#4CC9BF] text-white rounded-lg font-semibold">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
