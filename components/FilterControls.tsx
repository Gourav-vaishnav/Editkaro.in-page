
import React from 'react';
import { Category } from '../types';

interface FilterControlsProps {
  categories: Category[];
  activeFilter: Category | 'All';
  setActiveFilter: (filter: Category | 'All') => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ categories, activeFilter, setActiveFilter }) => {
  const allCategories: (Category | 'All')[] = ['All', ...categories];

  return (
    <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
            ${
              activeFilter === category
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
