
import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-github-dark px-4">
      <div className="text-center max-w-md">
        <div className="border-4 border-github-light rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl font-bold text-github-text">404</span>
        </div>
        
        <h1 className="text-2xl font-semibold text-white mb-4">This page was not found</h1>
        
        <p className="text-github-text mb-8">
          The page you are looking for does not exist or you don't have permission to view it.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            className="w-full sm:w-auto bg-github-medium border border-github-light text-github-text hover:bg-github-light hover:text-white"
          >
            <ExternalLink size={16} className="mr-2" />
            Contact Support
          </Button>
          
          <Link to="/" className="w-full sm:w-auto">
            <Button 
              className="w-full bg-github-highlight hover:bg-github-highlight/90 text-white"
            >
              <Home size={16} className="mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
