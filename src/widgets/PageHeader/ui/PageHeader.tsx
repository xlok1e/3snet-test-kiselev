import { MonthSwitcher } from '@/features/MonthNavigation/ui/MonthSwitcher';
import { Plus } from 'lucide-react';

interface PageHeaderProps {
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const PageHeader = ({ onPrevMonth, onNextMonth }: PageHeaderProps) => {
  return (
    <div className='flex gap-8 items-end justify-end'>
      <MonthSwitcher onPrev={onPrevMonth} onNext={onNextMonth} />
      <button className='flex h-11 bg-blue-950 rounded-[6px] text-white gap-2 items-center px-3 font-semibold hover:bg-blue-900 transition-colors duration-200'>
        <Plus size={20} /> Add Plan
      </button>
    </div>
  );
};

export { PageHeader };
