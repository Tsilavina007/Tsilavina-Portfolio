
import React from 'react';
import { Star, GitFork, ExternalLink, Github } from 'lucide-react';
import { Formation } from '@/utils/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface FormationCardProps {
  formation: Formation;
}

const FormationCard: React.FC<FormationCardProps> = ({ formation }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/formation/${formation.id}`);
  };

  return (
    <Card
      className="border border-github-light bg-github-medium hover:border-gray-500 transition-all-200 slide-up overflow-hidden shadow-md cursor-pointer"
      onClick={handleClick}
    >
	<CardHeader>
		<div className="flex items-center space-x-4">
			{formation.institutionLogo && (
				<img src={formation.institutionLogo} alt={formation.institution} className="w-12 h-12 rounded-full" />
			)}
			<div>
				<h2 className="text-lg font-semibold">{formation.institution}</h2>
				<p className="text-sm text-gray-500">{formation.period}</p>
			</div>
		</div>
	</CardHeader>
	<CardContent>
		<p className="text-gray-700">{formation.description}</p>
	</CardContent>
	<CardFooter>
		<div className="flex items-center space-x-2">
			{formation.institutionLink && (
				<a href={formation.institutionLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
					<ExternalLink className="w-4 h-4 inline-block mr-1" />
					Visit Institution
				</a>
			)}
			<Badge>{formation.diplome}</Badge>
		</div>
	</CardFooter>
    </Card>
  );
};

export default FormationCard;
