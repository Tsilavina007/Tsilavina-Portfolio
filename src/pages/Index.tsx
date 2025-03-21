
import Navbar from '@/components/Navbar';
import ProfileSidebar from '@/components/ProfileSidebar';
import TabNavigation from '@/components/TabNavigation';
import Overview from '@/pages/Overview';
import Experiences from '@/pages/Experiences';
import Projects from '@/pages/Projects';
import Formations from '@/pages/Formations';
import ProjectDetail from '@/components/ProjectDetail';
import ExperienceDetail from '@/components/ExperienceDetail';
import { useLocation, useParams } from 'react-router-dom';
import FormationDetail from '@/components/FormationDetail';
import { useMediaQuery } from '@/hooks/use-media-query';
import ContactDetail from '@/components/ContactDetail';
import { useEffect, useState } from 'react';
const Index = () => {
	const location = useLocation();
	const params = useParams();
	// const isDesktop = useMediaQuery("(min-width: 768px)");
	const [isDesktop, setIsMobile] = useState(window.innerWidth > 768);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth > 768);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const renderContent = () => {
	  const path = location.pathname;

	  if (path.startsWith('/project/')) {
		return <ProjectDetail isDesktop={isDesktop}/>;
	  } else if (path.startsWith('/experience/')) {
		return <ExperienceDetail isDesktop={isDesktop}/>;
	  } else if (path.startsWith('/formation/')) {
		return <FormationDetail isDesktop={isDesktop}/>;
	  } else if (path.startsWith('/contact/me')) {
		return <ContactDetail isDesktop={isDesktop}/>;
	  } else if (path.startsWith('/experiences')) {
		return <Experiences />;
	  } else if (path.startsWith('/projects')) {
		return <Projects />;
	  } else if (path.startsWith('/formations')) {
		return <Formations />;
	  } else {
		return <Overview />;
	  }
	};

	return (
	  <div className="min-h-screen bg-github-dark flex flex-col w-full">
		<Navbar />
		<div className="container mx-auto px-4 max-w-10xl flex flex-col md:flex-row sticky top-16 z-10">

		  {/* Afficher ProfileSidebar uniquement sur Overview en mobile ou toujours en Desktop */}
		  {(isDesktop || location.pathname === "/") && <ProfileSidebar />}

		  <main className="flex-1 px-0 md:px-6 mt-0 md:mt-0 mb-10">
			{renderContent()}
		  </main>
		</div>
	  </div>
	);
  };

export default Index;
