
import React from 'react';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/utils/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <Card
      className="border border-github-light bg-github-medium hover:border-gray-500 transition-all-200 slide-up overflow-hidden shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-github-blue hover:underline text-lg mb-1">
              {project.name}
            </h3>

            <div className="inline-flex items-center text-xs py-0.5 px-2 border border-github-light rounded-full text-github-text">
              {project.isPublic ? 'Public' : 'Private'}
            </div>
          </div>
        </div>
      </CardHeader>
	  <CardContent className="px-4 pt-1 pb-4">
		<div className="flex justify-between items-start h-52 w-fit">
			{project.image && (
			<img src={project.image} alt={project.name} className="h-full object-cover rounded-md mb-4" />
			)}
		</div>
	  </CardContent>

      <CardContent className="px-4 pt-1 pb-4">
        {project.description && (
          <p className="text-github-text text-sm my-2 line-clamp-2">{project.description}</p>
        )}

        <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-github-text">
          {project.language && (
            <div className="flex items-center bg-github-dark px-2 py-1 rounded-full">
              <span
                className="w-3 h-3 rounded-full mr-1.5"
                style={{ backgroundColor: project.languageColor }}
              ></span>
              <span>{project.language}</span>
            </div>
          )}

          {project.stars > 0 && (
            <div className="flex items-center bg-github-dark px-2 py-1 rounded-full">
              <Star size={14} className="mr-1" />
              <span>{project.stars}</span>
            </div>
          )}

          {project.forks > 0 && (
            <div className="flex items-center bg-github-dark px-2 py-1 rounded-full">
              <GitFork size={14} className="mr-1" />
              <span>{project.forks}</span>
            </div>
          )}
          <span className="text-github-text ml-auto">{project.lastUpdated}</span>
        </div>
      </CardContent>

      {(project.demoLink || project.repoLink) && (
        <CardFooter className="px-4 pt-0 pb-4 gap-3 border-t border-github-light bg-github-dark/30">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-github-blue text-xs hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} className="mr-1" /> Live Demo
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-github-blue text-xs hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={12} className="mr-1" /> Repository
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
