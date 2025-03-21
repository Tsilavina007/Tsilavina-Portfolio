import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Linkedin } from 'lucide-react';
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

interface isDesktopProps {
  isDesktop: Boolean;
}

const ContactDetail: React.FC<isDesktopProps> = ({ isDesktop }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    // Navigate back to previous page
    navigate(-1);
  };

  const isMobile = useIsMobile();
 // Lien par défaut pour ouvrir Gmail dans le navigateur (desktop)
 const emailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=andriamiart114@gmail.com";

 // Lien pour les utilisateurs mobiles (utilisation du client de messagerie par défaut)
 const mailtoLink = "mailto:andriamiart114@gmail.com";

  const content = (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-semibold text-github-blue">Contact Me</h2>

      <div className="space-y-4">
        <Button className="w-full bg-github-medium hover:bg-github-dark text-github-text flex items-center justify-center space-x-3">
          <a href={isMobile ? mailtoLink : emailLink} target={isMobile ? "_self" : "_blank"} className="flex items-center space-x-3">
            <Mail size={20} />
            <span>Send an Email</span>
          </a>
        </Button>

        <Button className="w-full bg-github-medium hover:bg-github-dark text-github-text flex items-center justify-center space-x-3">
          <a href="tel:+1234567890" className="flex items-center space-x-3">
            <Phone size={20} />
            <span>Call Me</span>
          </a>
        </Button>

        <Button className="w-full bg-github-medium hover:bg-github-dark text-github-text flex items-center justify-center space-x-3">
          <a href="https://www.linkedin.com/in/tonprofile" target="_blank" className="flex items-center space-x-3">
            <Linkedin size={20} />
            <span>Connect on LinkedIn</span>
          </a>
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={true} onOpenChange={() => handleClose()}>
        <DrawerContent className="bg-github-dark border-github-light text-github-text max-h-[90vh]">
          <DrawerHeader className="border-b border-github-light">
            <DrawerTitle className="text-github-blue">Contact Me</DrawerTitle>
            <DrawerDescription className="text-github-text">
              Get in touch with me via email, phone, or LinkedIn.
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
              Get in touch with me via email, phone, or LinkedIn.
            </DialogDescription>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return null;
};

export default ContactDetail;
