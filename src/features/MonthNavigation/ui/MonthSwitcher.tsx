import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthSwitcherProps {
  onPrev: () => void;
  onNext: () => void;
}

export const MonthSwitcher = ({ onPrev, onNext }: MonthSwitcherProps) => {
  return (
    <div className='flex items-center gap-8'>
      <button
        onClick={onPrev}
        aria-label='Previous month'
        className='flex h-11 w-11 items-center justify-center rounded-[8px] bg-white border-1 border-gray-300 hover:bg-gray-200 transition-all duration-200 text-blue-900'
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={onNext}
        aria-label='Next month'
        className='flex h-11 w-11 items-center justify-center rounded-[8px] bg-white border-1 border-gray-300 hover:bg-gray-200 transition-all duration-200 text-blue-900'
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
