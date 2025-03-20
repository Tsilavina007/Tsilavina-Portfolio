
import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
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

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [filterVisible, setFilterVisible] = useState(false);

  const allProjects = profileData.popularProjects.concat(profileData.projects);

  // Get unique languages from projects
  const uniqueLanguages = useMemo(() => {
    const langs = new Set(allProjects.map(proj => proj.language));
    return ['all', ...Array.from(langs)];
  }, [allProjects]);

  // Sort and filter projects
  const filteredProjects = useMemo(() => {
    let filtered = [...allProjects];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply language filter
    if (language !== 'all') {
      filtered = filtered.filter(project => project.language === language);
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => {
          // Extract the time period from lastUpdated
          const timeA = a.lastUpdated.match(/(\d+) (day|week|month|year)s? ago/);
          const timeB = b.lastUpdated.match(/(\d+) (day|week|month|year)s? ago/);

          if (!timeA || !timeB) return 0;

          const valueA = parseInt(timeA[1]);
          const valueB = parseInt(timeB[1]);
          const unitA = timeA[2];
          const unitB = timeB[2];

          // Calculate approximate days
          const getDays = (value: number, unit: string) => {
            switch(unit) {
              case 'day': return value;
              case 'week': return value * 7;
              case 'month': return value * 30;
              case 'year': return value * 365;
              default: return value;
            }
          };

          const daysA = getDays(valueA, unitA);
          const daysB = getDays(valueB, unitB);

          return daysA - daysB;
        });
      case 'formations':
        return filtered.sort((a, b) => b.formations - a.formations);
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [allProjects, searchQuery, language, sortBy]);

  return (
    <div className="w-full pt-4">
      <div className="flex flex-col space-y-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-auto flex-grow relative">
            <Input
              type="text"
              placeholder="Find a project..."
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
              <label className="block text-sm text-github-text mb-1">Language</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="bg-github-medium border-github-light text-github-text">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="bg-github-medium border-github-light">
                  <SelectGroup>
                    {uniqueLanguages.map((lang) => (
                      <SelectItem key={lang} value={lang} className="text-github-text">
                        {lang}
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
                    <SelectItem value="formations" className="text-github-text">Most formations</SelectItem>
                    <SelectItem value="name" className="text-github-text">Name</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {(language !== 'all' || sortBy !== 'newest' || searchQuery) && (
          <div className="flex flex-wrap gap-2 mt-2">
            {language !== 'all' && (
              <Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
                Language: {language}
              </Badge>
            )}
            {sortBy !== 'newest' && (
              <Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
                Sort: {sortBy === 'formations' ? 'Most formations' : 'Name'}
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

      <div className="space-y-4 gap-2 ">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={project.id} className={`slide-up ${index > 0 ? `delay-${Math.min(index, 3) * 100}` : ''}`}>
              <ProjectCard project={project} />
            </div>
          ))
        ) : (
          <div className="text-center p-8 border border-github-light bg-github-dark rounded-md">
            <p className="text-github-text">No projects found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
