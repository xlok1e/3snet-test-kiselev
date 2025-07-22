import type { IPlanApiResponse } from '@/entities/plan/model/types';

interface PlanTableProps {
  planData: IPlanApiResponse['data'];
  visibleMonths: { key: string; displayName: string; index: number }[];
}

interface MonthData {
  plan?: {
    income?: number;
    activePartners?: number;
  };
  fact?: {
    income?: number;
    activePartners?: number;
  };
}

const PlanTable = ({ planData, visibleMonths }: PlanTableProps) => {
  const formatNumber = (num: number): string => {
    return num === 0 ? '0' : num.toLocaleString();
  };

  const renderCell = (monthData: MonthData | null, isLastTwoColumns: boolean = false) => {
    if (!monthData) {
      return <div className='pl-4 text-gray-400 text-sm font-medium'>No data</div>;
    }

    const planIncome = monthData.plan?.income || 0;
    const factIncome = monthData.fact?.income || 0;
    const planPartners = monthData.plan?.activePartners || 0;
    const factPartners = monthData.fact?.activePartners || 0;

    const numberColor = isLastTwoColumns ? 'text-black' : 'text-gray-400';

    return (
      <div className='h-24 grid grid-cols-2 grid-rows-2 text-xs'>
        <div className='flex items-center justify-start pl-4'>
          <span className={`${numberColor} font-medium`}>$ {formatNumber(planIncome)}</span>
        </div>
        <div className='flex items-center justify-start pl-4'>
          <span className={`${numberColor} font-medium`}>$ {formatNumber(factIncome)}</span>
        </div>
        <div className='flex items-center justify-start pl-4'>
          <span className={`${numberColor} font-medium`}>{formatNumber(planPartners)}</span>
        </div>
        <div className='flex items-center justify-start pl-4'>
          <span className={`${numberColor} font-medium`}>{formatNumber(factPartners)}</span>
        </div>
      </div>
    );
  };

  return (
    <div className='border border-gray-200 overflow-hidden'>
      <div className='overflow-x-auto'>
        <table className='min-w-full table-fixed'>
          <colgroup>
            <col className='w-41' />
            <col className='w-41' />
            {visibleMonths.map(month => (
              <col key={month.key} className='w-42' />
            ))}
          </colgroup>
          <thead>
            <tr className='bg-gray-50 border-b border-gray-200'>
              <th className='px-4 py-3 text-left text-sm font-medium text-gray-700 border-r border-gray-200'></th>
              <th className='px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200'></th>
              {visibleMonths.map((month, index) => {
                const isLastTwoColumns = index >= visibleMonths.length - 2;
                const monthNameColor = isLastTwoColumns ? 'text-blue-800' : 'text-gray-400';

                return (
                  <th
                    key={month.key}
                    className='px-4 py-2 text-sm font-medium border-r border-gray-200'
                  >
                    <div className={`text-left ${monthNameColor}`}>{month.displayName}</div>
                    <div className='grid grid-cols-2 text-xs pt-2 text-left gap-7'>
                      <div className='py-1 text-gray-400'>Plan:</div>
                      <div className='py-1 text-gray-400'>Fact:</div>
                    </div>
                  </th>
                );
              })}
              <th className='border-l border-gray-200'></th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr className='font-medium hover:bg-gray-50'>
              <th className='px-4 py-8 text-left text-sm font-medium text-blue-800 border-r border-gray-200'>
                Manager
              </th>
              <td className='border-r border-gray-200'>
                <div className='h-24 grid grid-cols-1 grid-rows-2 text-xs'>
                  <div className='flex items-center justify-start pl-2 border-b border-gray-200'>
                    <span className='text-blue-800 font-medium'>Total income:</span>
                  </div>
                  <div className='flex items-center justify-start pl-2'>
                    <span className='text-blue-800 font-medium'>Total active partners:</span>
                  </div>
                </div>
              </td>
              {visibleMonths.map((month, index) => {
                const isLastTwoColumns = index >= visibleMonths.length - 2;

                return (
                  <td key={month.key} className='border-r border-gray-200'>
                    {renderCell(planData.total[month.index], isLastTwoColumns)}
                  </td>
                );
              })}
              <td className='text-center'>
                <span className='text-lg text-gray-400'>⋯</span>
              </td>
            </tr>
            {planData.table.map(manager => (
              <tr key={manager.id} className='hover:bg-gray-50'>
                <td className='px-4 py-2 border-r border-gray-200'>
                  <div className='text-sm pl-4 text-blue-950 font-semibold'>
                    {manager.adminName}
                  </div>
                </td>
                <td className='border-r border-gray-200'>
                  <div className='h-24 grid grid-cols-1 grid-rows-2 text-xs'>
                    <div className='flex items-center justify-start pl-2 border-b border-gray-200'>
                      <span className='text-gray-400 font-medium'>Income:</span>
                    </div>
                    <div className='flex items-center justify-start pl-2'>
                      <span className='text-gray-400 font-medium'>Active partners:</span>
                    </div>
                  </div>
                </td>
                {visibleMonths.map((month, index) => {
                  const isLastTwoColumns = index >= visibleMonths.length - 2;
                  return (
                    <td key={month.key} className='border-r border-gray-200'>
                      {renderCell(manager.months[month.index], isLastTwoColumns)}
                    </td>
                  );
                })}
                <td className='text-center'>
                  <span className='text-lg text-gray-400'>⋯</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { PlanTable };
