import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import Button from '../components/ui/Button';

const NotFound = () => {
  const navigate = useNavigate();
  
  // Auto-redirect after 10 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 10000);
    
    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-300">404</h1>
          <h2 className="text-2xl font-serif font-bold mb-6 text-gray-700">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button
                variant="primary"
                className="flex items-center justify-center w-full sm:w-auto"
              >
                <Home size={18} className="mr-2" />
                Go Home
              </Button>
            </Link>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft size={18} className="mr-1" />
              Go Back
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            You will be automatically redirected to the homepage in a few seconds...
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;