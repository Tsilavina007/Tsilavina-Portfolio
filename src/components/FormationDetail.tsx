import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formation, profileData } from '@/utils/data';
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


const FormationDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const allFormations = profileData.formations;

	const formation = allFormations.find(f => f.id.toString() === id) as Formation;
	const handleClose = () => {
		// Navigate back to previous page
		navigate(-1);
	};

	if (!formation) {
		return null;
	}

	const content = (
		<div className="space-y-6 ">
			<div className="flex items-start justify-between">
				<div>
					<h2 className="text-xl font-semibold text-github-blue">{formation.type}</h2>
					<p className="text-github-text mt-1">
						<span className="inline-flex items-center text-xs py-0.5 px-2 border border-github-light rounded-full mr-2">
							{formation.institution}
						</span>
						<span className="text-sm">{formation.period}</span>
					</p>
				</div>
			</div>

			{formation.description && (
				<div className="mt-4">
					<p className="text-github-text">{formation.description}</p>
				</div>
			)}

			{/* Institution Logo */}
			{formation.institutionLogo && (
				<div className="mt-4">
					<img src={formation.institutionLogo} alt={formation.institution} className="w-32 h-32 object-contain" />
				</div>
			)}

			{/* Links */}
			{formation.institutionLink && (
				<div className="border-t border-github-light pt-4">
					<h3 className="text-github-blue font-medium mb-2">Institution Link</h3>
					<Button
						variant="outline"
						className="space-x-1 bg-github-medium hover:bg-github-dark"
						onClick={() => window.open(formation.institutionLink, '_blank')}
					>
						<ExternalLink size={14} />
						<span>Visit Institution</span>
					</Button>
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
							Formation Details
						</DialogTitle>
						<DialogDescription className="text-center text-github-text">
							View detailed information about this formation
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
					<DrawerTitle className="text-github-blue">Formation Details</DrawerTitle>
					<DrawerDescription className="text-github-text">
						View detailed information about this formation
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

export default FormationDetail;
