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
import { useIsMobile } from '@/hooks/use-mobile';

interface isDisktopProps {
	isDesktop: Boolean;
}
const ContactDetail: React.FC<isDisktopProps> = (isDesktop) => {
	const navigate = useNavigate();

	const handleClose = () => {
		// Navigate back to previous page
		navigate(-1);
	};


	const isMobile = useIsMobile();

	const content = (
		<div className="space-y-6 ">
			Contact
		</div>
	);


	if (isMobile) {
		return (
			<Drawer open={true} onOpenChange={() => handleClose()}>
				<DrawerContent className="bg-github-dark border-github-light text-github-text max-h-[90vh]">
					<DrawerHeader className="border-b border-github-light">
						<DrawerTitle className="text-github-blue">Contact Me</DrawerTitle>
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
							Contact Me
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

};

export default ContactDetail;
