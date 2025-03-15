
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import ContributionGraph from '@/components/ContributionGraph';
import { profileData } from '@/utils/data';

const Overview = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base md:text-lg font-semibold text-white">Popular projects</h2>
          <a href="/projects" className="text-github-blue text-sm hover:underline">
            View all projects
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileData.popularProjects.slice(0, 2).map((project, index) => (
            <div key={project.id} className={`slide-up ${index > 0 ? `delay-${index * 100}` : ''}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base md:text-lg font-semibold text-white">Popular experiences</h2>
          <a href="/experiences" className="text-github-blue text-sm hover:underline">
            View all experiences
          </a>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {profileData.popularExperiences.slice(0, 2).map((experience, index) => (
            <div key={experience.id} className={`slide-up ${index > 0 ? `delay-${index * 100}` : ''}`}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
      
      <ContributionGraph />
    </div>
  );
};

export default Overview;
