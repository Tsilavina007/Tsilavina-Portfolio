
import React from 'react';
import { Star, GitFork } from 'lucide-react';
import { Repository } from '@/utils/data';

interface RepositoryCardProps {
  repository: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository }) => {
  return (
    <div className="border border-github-light rounded-md p-4 mb-4 bg-github-dark hover:border-gray-500 transition-all-200 slide-up">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-github-blue hover:underline cursor-pointer">
            {repository.name}
          </h3>
          {repository.description && (
            <p className="text-github-text text-sm my-2">{repository.description}</p>
          )}
        </div>
        <div>
          <span className="text-xs py-0.5 px-2 border border-github-light rounded-full text-github-text">
            {repository.isPublic ? 'Public' : 'Private'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-github-text">
        <div className="flex items-center">
          {repository.language && (
            <>
              <span
                className="language-dot"
                style={{ backgroundColor: repository.languageColor }}
              ></span>
              <span className="mr-3">{repository.language}</span>
            </>
          )}

          {repository.formations > 0 && (
            <a href="#" className="flex items-center mr-3 hover:text-github-blue transition-all-200">
              <Star size={14} className="mr-1" />
              <span>{repository.formations}</span>
            </a>
          )}

          {repository.forks > 0 && (
            <a href="#" className="flex items-center hover:text-github-blue transition-all-200">
              <GitFork size={14} className="mr-1" />
              <span>{repository.forks}</span>
            </a>
          )}
        </div>

        <span className="text-github-text">{repository.lastUpdated}</span>
      </div>
    </div>
  );
};

export default RepositoryCard;
