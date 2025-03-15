
import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard';
import { profileData } from '@/utils/data';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Experiences = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [type, setType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [filterVisible, setFilterVisible] = useState(false);
  
  const allExperiences = profileData.experiences;
  
  // Get unique job types from experiences
  const uniqueTypes = useMemo(() => {
    const types = new Set(allExperiences.map(exp => exp.role.split(' ')[0]));
    return ['all', ...Array.from(types)];
  }, [allExperiences]);
  
  // Sort and filter experiences
  const filteredExperiences = useMemo(() => {
    let filtered = [...allExperiences];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(exp => 
        exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply type filter
    if (type !== 'all') {
      filtered = filtered.filter(exp => 
        exp.role.toLowerCase().includes(type.toLowerCase())
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => {
          const yearA = parseInt(a.period.split(' - ')[0].split(' ')[1]);
          const yearB = parseInt(b.period.split(' - ')[0].split(' ')[1]);
          return yearB - yearA;
        });
      case 'oldest':
        return filtered.sort((a, b) => {
          const yearA = parseInt(a.period.split(' - ')[0].split(' ')[1]);
          const yearB = parseInt(b.period.split(' - ')[0].split(' ')[1]);
          return yearA - yearB;
        });
      case 'company':
        return filtered.sort((a, b) => a.company.localeCompare(b.company));
      default:
        return filtered;
    }
  }, [allExperiences, searchQuery, type, sortBy]);

  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-auto flex-grow relative">
            <Input
              type="text"
              placeholder="Find an experience..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-github-medium border border-github-light text-github-text placeholder-gray-500 pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={16} />
            </div>
          </div>
          
          <div className="flex space-x-2 w-full md:w-auto">
            <Button 
              variant="outline" 
              className="border-github-light bg-github-medium text-github-text hover:bg-github-dark"
              onClick={() => setFilterVisible(!filterVisible)}
            >
              <Filter size={16} className="mr-2" />
              Filters
            </Button>
          </div>
        </div>
        
        {filterVisible && (
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 p-4 bg-github-dark border border-github-light rounded-md">
            <div className="w-full md:w-1/2">
              <label className="block text-sm text-github-text mb-1">Job Type</label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="bg-github-medium border-github-light text-github-text">
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent className="bg-github-medium border-github-light">
                  <SelectGroup>
                    {uniqueTypes.map((jobType) => (
                      <SelectItem key={jobType} value={jobType} className="text-github-text capitalize">
                        {jobType}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-1/2">
              <label className="block text-sm text-github-text mb-1">Sort by</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-github-medium border-github-light text-github-text">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-github-medium border-github-light">
                  <SelectGroup>
                    <SelectItem value="newest" className="text-github-text">Newest first</SelectItem>
                    <SelectItem value="oldest" className="text-github-text">Oldest first</SelectItem>
                    <SelectItem value="company" className="text-github-text">Company name</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        
        {(type !== 'all' || sortBy !== 'newest' || searchQuery) && (
          <div className="flex flex-wrap gap-2 mt-2">
            {type !== 'all' && (
              <Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
                Type: {type}
              </Badge>
            )}
            {sortBy !== 'newest' && (
              <Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
                Sort: {sortBy === 'oldest' ? 'Oldest first' : 'Company name'}
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
                Search: {searchQuery}
              </Badge>
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        {filteredExperiences.length > 0 ? (
          filteredExperiences.map((experience, index) => (
            <div key={experience.id} className={`slide-up ${index > 0 ? `delay-${Math.min(index, 3) * 100}` : ''}`}>
              <ExperienceCard experience={experience} />
            </div>
          ))
        ) : (
          <div className="text-center p-8 border border-github-light bg-github-dark rounded-md">
            <p className="text-github-text">No experiences found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experiences;
