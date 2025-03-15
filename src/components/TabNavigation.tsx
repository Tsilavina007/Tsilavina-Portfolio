
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Briefcase, Package, Star } from 'lucide-react';
import { profileData } from '@/utils/data';

interface TabItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  count?: number;
}

const TabNavigation = () => {
  const location = useLocation();

  const tabs: TabItem[] = [
    {
      name: 'Overview',
      path: '/',
      icon: <Book size={16} className="mr-2" />,
    },
	{
		name: 'Formations',
		path: '/formations',
		icon: <Star size={16} className="mr-2" />,
		count: profileData.formationsCount,
	},
    {
      name: 'Experiences',
      path: '/experiences',
      icon: <Briefcase size={16} className="mr-2" />,
      count: profileData.experiencesCount,
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: <Package size={16} className="mr-2" />,
      count: profileData.projectsCount,
    },
  ];

  return (
    <nav className="border-b border-github-light mx-auto px-4 max-w-7xl overflow-x-auto">
      <ul className="flex px-2 md:px-6">
        {tabs.map((tab) => {
          const isActive =
            (tab.path === '/' && location.pathname === '/') ||
            (tab.path !== '/' && location.pathname.startsWith(tab.path));

          return (
            <li key={tab.name} className="mr-1 md:mr-2">
              <Link
                to={tab.path}
                className={`flex items-center px-3 py-2 text-sm border-b-2 font-medium transition-all-200
                  ${isActive
                    ? 'border-github-highlight text-white'
                    : 'border-transparent text-github-text hover:border-github-light hover:text-white'
                  }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
                {tab.count !== undefined && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-github-light text-github-text">
                    {tab.count}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabNavigation;
