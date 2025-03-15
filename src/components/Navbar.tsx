
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Plus, Bell, ChevronDown, Github } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { profileData } from '@/utils/data';
import TabNavigation from './TabNavigation';

const Navbar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (

    <header className="bg-github-dark  py-4 px-4 lg:px-6 sticky top-0 z-50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md text-github-text hover:bg-github-light transition-all-200 md:hidden">
            <Menu size={20} />
          </button>

          <Link to="/" className="flex items-center space-x-2">
            <Github size={32} className="text-white" />
            <span className="text-xl font-semibold text-white hidden md:inline-block">{profileData.username}</span>
          </Link>

          <div className={`relative hidden md:block transition-all duration-300 ${isSearchFocused ? 'w-80' : 'w-64'}`}>
            <input
              type="text"
              placeholder="Type / to search"
              className="w-full bg-github-medium border border-github-light rounded-md py-1.5 px-3 pr-10 text-sm text-github-text placeholder-gray-500 focus:ring-1 focus:ring-github-blue focus:border-github-blue transition-all-200"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={16} />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-github-text hover:text-white transition-all-200">
            <Plus size={20} className="mr-1" />
            <ChevronDown size={16} />
          </button>

          <button className="text-github-text hover:text-white transition-all-200">
            <Bell size={20} />
          </button>

          <Link to="/" className="flex items-center text-github-text hover:text-white transition-all-200">
            <Avatar className="h-8 w-8 rounded-full overflow-hidden border border-github-light">
              <img src={profileData.avatar} alt={profileData.name} className="object-cover" />
            </Avatar>
            <ChevronDown size={16} className="ml-1 hidden md:block" />
          </Link>
        </div>
      </div>
	  <TabNavigation />
    </header>
  );
};

export default Navbar;
