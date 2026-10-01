import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { siteConfig } from '../config/siteConfig';

export const NotFound = () => {
  return (
    <main className="min-h-[75vh] flex items-center justify-center px-4 py-20 bg-surface-50 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center mx-auto text-2xl font-bold">
          404
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            The page you are looking for doesn't exist or has moved. Return to the homepage to explore services and selected work.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <Button to="/" variant="primary" leftIcon={Home}>
            Back to Home
          </Button>
          <Button to="/#work" variant="secondary">
            View Projects
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
