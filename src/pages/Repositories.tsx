
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import RepositoryCard from '@/components/RepositoryCard';
import { profileData } from '@/utils/data';

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const allRepositories = profileData.popularProjects.concat(profileData.projects);
  
  const filteredRepositories = searchQuery 
    ? allRepositories.filter(repo => 
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : allRepositories;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-auto flex-grow relative">
          <input
            type="text"
            placeholder="Find a repository..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-github-medium border border-github-light rounded-md py-2 px-3 pr-10 text-sm text-github-text placeholder-gray-500 w-full focus:ring-1 focus:ring-github-blue focus:border-github-blue transition-all-200"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={16} />
          </div>
        </div>
        
        <div className="flex space-x-2 w-full md:w-auto">
          <select className="bg-github-medium border border-github-light rounded-md py-1.5 px-3 text-sm text-github-text cursor-pointer">
            <option value="language">Language</option>
            <option value="all">All</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
          </select>
          
          <select className="bg-github-medium border border-github-light rounded-md py-1.5 px-3 text-sm text-github-text cursor-pointer">
            <option value="sort">Sort</option>
            <option value="newest">Newest</option>
            <option value="stars">Most stars</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredRepositories.map((repository, index) => (
          <div key={repository.id} className={`slide-up ${index > 0 ? `delay-${Math.min(index, 3) * 100}` : ''}`}>
            <RepositoryCard repository={repository} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
