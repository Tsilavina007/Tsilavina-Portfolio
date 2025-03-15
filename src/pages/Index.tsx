
import React from 'react';
import Navbar from '@/components/Navbar';
import ProfileSidebar from '@/components/ProfileSidebar';
import TabNavigation from '@/components/TabNavigation';
import Overview from '@/pages/Overview';
import Experiences from '@/pages/Experiences';
import Projects from '@/pages/Projects';
import Stars from '@/pages/Stars';
import ProjectDetail from '@/components/ProjectDetail';
import ExperienceDetail from '@/components/ExperienceDetail';
import { useLocation, useParams } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  const params = useParams();
  
  const renderContent = () => {
    const path = location.pathname;
    
    // Check if we're viewing a project or experience detail
    if (path.startsWith('/project/')) {
      return <ProjectDetail />;
    } else if (path.startsWith('/experience/')) {
      return <ExperienceDetail />;
    } else if (path.startsWith('/experiences')) {
      return <Experiences />;
    } else if (path.startsWith('/projects')) {
      return <Projects />;
    } else if (path.startsWith('/stars')) {
      return <Stars />;
    } else {
      return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-github-dark flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <TabNavigation />
        
        <div className="flex flex-col md:flex-row py-6">
          <ProfileSidebar />
          
          <main className="flex-1 px-0 md:px-6 mt-8 md:mt-0">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
