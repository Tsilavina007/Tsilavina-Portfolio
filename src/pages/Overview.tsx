
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import ContributionGraph from '@/components/ContributionGraph';
import { profileData } from '@/utils/data';
import { Link } from 'react-router-dom';
import FormationCard from '@/components/FormationCard';

const Overview = () => {
  return (
    <div className="w-full">

	<div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base md:text-lg font-semibold text-white">Formations</h2>
		  <Link to="/formations" className="text-github-blue text-sm hover:underline">
			View all formations
		  </Link>
        </div>

        <div className="flex flex-col gap-4">
          {profileData.formations.slice(0, 2).map((project, index) => (
            <div key={project.id} className={`slide-up ${index > 0 ? `delay-${index * 100}` : ''}`}>
              <FormationCard formation={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base md:text-lg font-semibold text-white">Popular projects</h2>
		  <Link to="/projects" className="text-github-blue text-sm hover:underline">
			View all projects
		  </Link>
        </div>

        <div className="flex flex-col gap-4">
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
		  <Link to="/experiences" className="text-github-blue text-sm hover:underline">
			View all experiences
			</Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {profileData.popularExperiences.slice(0, 2).map((experience, index) => (
            <div key={experience.id} className={`slide-up ${index > 0 ? `delay-${index * 100}` : ''}`}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base md:text-lg font-semibold text-white">Contributions</h2>
		  <Link to="/" className="text-github-blue text-sm hover:underline">
			View all Contribitions
			</Link>
        </div>

        <ContributionGraph />
      </div>

    </div>
  );
};

export default Overview;
