import { useState, useMemo } from 'react';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Custom hook for managing month navigation.
 *
 * @param monthsToShow - Number of months to display (defaults to 6).
 * @returns An object containing:
 *   - visibleMonths: Array of month objects to display
 *   - handleNextMonth: Function to navigate to the next month
 *   - handlePrevMonth: Function to navigate to the previous month
 */
export const useMonthNavigation = (monthsToShow: number = 6) => {
  const [startMonthIndex, setStartMonthIndex] = useState(new Date().getMonth());

  const handleNextMonth = () => {
    setStartMonthIndex(prevIndex => (prevIndex + 1) % 12);
  };

  const handlePrevMonth = () => {
    setStartMonthIndex(prevIndex => (prevIndex - 1 + 12) % 12);
  };

  const visibleMonths = useMemo(() => {
    const months = [];
    for (let i = 0; i < monthsToShow; i++) {
      const monthIndex = (startMonthIndex + i) % 12;
      months.push({
        key: MONTHS[monthIndex],
        displayName: MONTHS[monthIndex],
        index: monthIndex,
      });
    }

    return months;
  }, [startMonthIndex, monthsToShow]);

  return { visibleMonths, handleNextMonth, handlePrevMonth };
};
