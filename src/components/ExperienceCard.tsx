
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/utils/data';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/experience/${experience.id}`);
  };

  return (
    <div
      className="border border-github-light rounded-md p-4 mb-4 bg-github-dark hover:border-gray-500 transition-all-200 slide-up cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-white text-lg">{experience.company}</h3>
          <p className="text-github-blue font-medium">{experience.role}</p>
          <p className="text-github-text text-sm">{experience.period}</p>
        </div>
        <div>
          <span className="flex items-center text-github-text">
            <Briefcase size={16} className="mr-1" />
          </span>
        </div>
      </div>

      {experience.description && (
        <p className="text-github-text text-sm my-3">{experience.description}</p>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {experience.skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-github-medium text-github-text border-github-light">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
