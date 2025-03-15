
import React from 'react';
import { contributionData } from '@/utils/data';

const colorByLevel = {
  0: "bg-github-medium",
  1: "#0e4429",
  2: "#006d32", 
  3: "#26a641",
  4: "#39d353"
};

const yearOptions = ["2023", "2024", "2025"];

const ContributionGraph = () => {
  const daysOfWeek = ["Mon", "Wed", "Fri"];
  
  return (
    <div className="border border-github-light rounded-md p-4 mb-8 bg-github-dark">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold text-white">294 contributions in the last year</h3>
        <div className="flex items-center">
          <select 
            className="bg-github-medium border border-github-light rounded-md py-1 px-2 text-sm text-github-text mr-2 cursor-pointer"
          >
            <option value="contribution-settings">Contribution settings</option>
          </select>
          
          <select 
            className="bg-github-medium border border-github-light rounded-md py-1 px-2 text-sm text-github-text cursor-pointer"
          >
            {yearOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex mt-4">
        <div className="pr-2 text-xs text-github-text flex flex-col justify-between h-[100px]">
          {daysOfWeek.map(day => (
            <span key={day}>{day}</span>
          ))}
        </div>
        
        <div className="overflow-x-auto pb-2 flex-grow">
          <div className="flex space-x-1">
            {contributionData.map((month, monthIndex) => (
              <div key={monthIndex} className="flex flex-col">
                <div className="text-xs text-github-text h-6 text-center">{month.month}</div>
                <div className="grid grid-cols-7 gap-1">
                  {month.contributions.map((level, dayIndex) => (
                    <div 
                      key={`${monthIndex}-${dayIndex}`} 
                      className={`w-3 h-3 rounded-sm ${typeof level === 'number' ? '' : 'bg-github-medium'}`}
                      style={{ backgroundColor: typeof level === 'number' ? colorByLevel[level as keyof typeof colorByLevel] : '' }}
                      title={`${level} contributions on ${month.month} ${dayIndex + 1}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-end mt-2 text-xs text-github-text">
        <span className="mr-2">Less</span>
        {[0, 1, 2, 3, 4].map(level => (
          <div 
            key={level}
            className="w-3 h-3 rounded-sm mr-1"
            style={{ backgroundColor: colorByLevel[level as keyof typeof colorByLevel] }}
          />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;
