import { usePlansQuery } from '@/entities/plan/api/plans';
import { useMonthNavigation } from '@/shared/lib/hooks/useMonthNavigation';
import { PageHeader } from '@/widgets/PageHeader/ui/PageHeader';
import { PlanTable } from '@/widgets/PlanTable/ui/PlanTable';

const PlanPage = () => {
  const { data, isLoading, error } = usePlansQuery();
  const { visibleMonths, handlePrevMonth, handleNextMonth } = useMonthNavigation(6);

  if (isLoading) return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <div className='p-8'>
      <PageHeader onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
      <main className='mt-6'>
        {data && <PlanTable planData={data['data']} visibleMonths={visibleMonths} />}
      </main>
    </div>
  );
};

export { PlanPage };
