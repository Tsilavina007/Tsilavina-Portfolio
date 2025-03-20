
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { profileData } from '@/utils/data';
import {
  Calendar,
  Briefcase,
  MapPin,
  Building,
  Globe,
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
import { useIsMobile } from '@/hooks/use-mobile';
interface isDisktopProps {
	isDesktop: Boolean;
}

const ExperienceDetail: React.FC<isDisktopProps> = (isDesktop) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const allExperiences = profileData.experiences;
  const experience = allExperiences.find(e => e.id.toString() === id);

  const handleClose = () => {
    // Navigate back to previous page
    navigate(-1);
  };

  if (!experience) {
    return null;
  }

  const isMobile = useIsMobile();

  const content = (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">{experience.company}</h2>
          <p className="text-github-blue font-medium">{experience.role}</p>
          <div className="flex items-center text-github-text text-sm mt-1">
            <Calendar size={14} className="mr-1" />
            <span>{experience.period}</span>
          </div>
        </div>
      </div>

      {/* Location & Company Type */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center text-github-text">
          <MapPin size={16} className="mr-2" />
          <span>Remote</span>
        </div>
        <div className="flex items-center text-github-text">
          <Building size={16} className="mr-2" />
          <span>{experience.company}</span>
        </div>
      </div>

      {/* Description */}
      {experience.description && (
        <div className="border-t border-github-light pt-4">
          <h3 className="text-github-blue font-medium mb-2">Description</h3>
          <p className="text-github-text">{experience.description}</p>
        </div>
      )}

      {/* Skills */}
      <div className="border-t border-github-light pt-4">
        <h3 className="text-github-blue font-medium mb-2">Skills Used</h3>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-github-medium text-github-text border-github-light">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="border-t border-github-light pt-4">
        <h3 className="text-github-blue font-medium mb-2">Key Achievements</h3>
        <ul className="list-disc pl-5 text-github-text space-y-2">
          <li>Successfully delivered projects ahead of schedule</li>
          <li>Improved team productivity by implementing new workflows</li>
          <li>Collaborated with cross-functional teams to achieve business goals</li>
        </ul>
      </div>
    </div>
  );

  if (isMobile)
	{
		return (
		  <Drawer open={true} onOpenChange={() => handleClose()}>
			<DrawerContent className="bg-github-dark border-github-light text-github-text max-h-[90vh]">
			  <DrawerHeader className="border-b border-github-light">
				<DrawerTitle className="text-github-blue">Experience Details</DrawerTitle>
				<DrawerDescription className="text-github-text">
				  View detailed information about this experience
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
	}

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
              Experience Details
            </DialogTitle>
            <DialogDescription className="text-center text-github-text">
              View detailed information about this experience
            </DialogDescription>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }


};

export default ExperienceDetail;
