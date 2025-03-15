
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { profileData } from '@/utils/data';
import {
  Calendar,
  Star,
  GitFork,
  Github,
  ExternalLink,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const allProjects = profileData.popularProjects.concat(profileData.projects);
  const project = allProjects.find(p => p.id.toString() === id);

  const handleClose = () => {
    // Navigate back to previous page
    navigate(-1);
  };

  if (!project) {
    return null;
  }

  const content = (
    <div className="space-y-6 ">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-github-blue">{project.name}</h2>
          <p className="text-github-text mt-1">
            <span className="inline-flex items-center text-xs py-0.5 px-2 border border-github-light rounded-full mr-2">
              {project.isPublic ? 'Public' : 'Private'}
            </span>
            <span className="text-sm">{project.lastUpdated}</span>
          </p>
        </div>
      </div>

      {project.description && (
        <div className="mt-4">
          <p className="text-github-text">{project.description}</p>
        </div>
      )}

      {/* Technologies */}
      <div className="pt-2">
        <h3 className="text-github-blue font-medium mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.language && (
            <Badge variant="outline" className="bg-github-medium text-github-text border-github-light">
              <span
                className="w-3 h-3 rounded-full mr-1.5"
                style={{ backgroundColor: project.languageColor }}
              ></span>
              {project.language}
            </Badge>
          )}
          {/* Add some mock technologies */}
          {['React', 'TypeScript', 'Tailwind CSS'].map(tech => (
            <Badge key={tech} variant="outline" className="bg-github-medium text-github-text border-github-light">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-github-light pt-4">
        <h3 className="text-github-blue font-medium mb-2">Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Star size={16} className="text-github-text" />
            <span className="text-github-text">{project.formations} formations</span>
          </div>
          <div className="flex items-center space-x-2">
            <GitFork size={16} className="text-github-text" />
            <span className="text-github-text">{project.forks} forks</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-github-text" />
            <span className="text-github-text">Updated {project.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Links */}
      {(project.demoLink || project.repoLink) && (
        <div className="border-t border-github-light pt-4">
          <h3 className="text-github-blue font-medium mb-2">Links</h3>
          <div className="flex flex-wrap gap-4">
            {project.demoLink && (
              <Button
                variant="outline"
                className="space-x-1 bg-github-medium hover:bg-github-dark"
                onClick={() => window.open(project.demoLink, '_blank')}
              >
                <ExternalLink size={14} />
                <span>View Live Demo</span>
              </Button>
            )}
            {project.repoLink && (
              <Button
                variant="outline"
                className="space-x-1 bg-github-medium hover:bg-github-dark"
                onClick={() => window.open(project.repoLink, '_blank')}
              >
                <Github size={14} />
                <span>View Repository</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={true} onOpenChange={() => handleClose()}>
        <DialogContent className="max-w-3xl bg-github-dark border-github-light text-github-text">
          <DialogHeader>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-4 text-github-text hover:text-white hover:bg-github-medium"
              onClick={handleClose}
            >
              <ArrowLeft size={16} />
            </Button>
            <DialogTitle className="text-center text-github-blue">
              Project Details
            </DialogTitle>
            <DialogDescription className="text-center text-github-text">
              View detailed information about this project
            </DialogDescription>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer onOpenChange={() => handleClose()}>
      <DrawerContent className="bg-github-dark border-github-light text-github-text max-h-[90vh]">
        <DrawerHeader className="border-b border-github-light">
          <DrawerTitle className="text-github-blue">Project Details</DrawerTitle>
          <DrawerDescription className="text-github-text">
            View detailed information about this project
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-6 overflow-y-auto">
          {content}
        </div>
        <DrawerFooter className="border-t border-github-light pt-2">
          <Button onClick={handleClose} className="w-full bg-github-medium hover:bg-github-dark text-github-text">
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDetail;
