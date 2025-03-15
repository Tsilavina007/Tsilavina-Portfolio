
import React from 'react';
import { profileData } from '@/utils/data';
import { Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileSidebar = () => {
  return (
    <aside className="w-full md:w-[396px] px-4 py-6 h-fit md:py-8 sticky -top-10 z-10">
      <div className="relative mb-4 fade-in">
        <img
          src={profileData.avatar}
          alt={profileData.name}
          className="w-full rounded-50 mx-auto border-4 border-github-dark object-cover"
        />
        <div className="absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2 w-10 h-10 bg-github-dark rounded-full flex items-center justify-center border border-github-light cursor-pointer hover:bg-github-medium transition-all-200">
          <Heart size={16} className="text-github-text" />
        </div>
      </div>

      <div className="mt-4 slide-up delay-100">
        <h1 className="text-2xl font-semibold text-white mb-1">{profileData.name}</h1>
        <h2 className="text-xl font-normal text-github-text mb-4">{profileData.username}</h2>

        <p className="text-github-text mb-4">{profileData.bio}</p>

        <Button variant="outline" className="w-full bg-github-medium border border-github-light text-github-text hover:bg-github-light hover:border-gray-500 hover:text-white mb-4 py-1 h-auto transition-all-200">
          Edit profile
        </Button>

        <div className="flex items-center mb-6">
          <a href="#" className="flex items-center text-github-text hover:text-github-blue transition-all-200 mr-4">
            <Users size={16} className="mr-2" />
            <span className="font-semibold text-github-text hover:text-github-blue">{profileData.followers}</span>
            <span className="ml-1">followers</span>
          </a>
          <span className="text-github-text">·</span>
          <a href="#" className="flex items-center text-github-text hover:text-github-blue transition-all-200 ml-4">
            <span className="font-semibold text-github-text hover:text-github-blue">{profileData.following}</span>
            <span className="ml-1">following</span>
          </a>
        </div>

        <div className="border-t border-github-light pt-4">
          <h3 className="text-base font-semibold text-white mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2 text-sm text-github-text">
            {profileData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-github-medium rounded-full border border-github-light hover:bg-github-light transition-all-200 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
