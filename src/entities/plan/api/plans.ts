import { useQuery } from '@tanstack/react-query';
import type { IPlanApiResponse } from '../model/types';
import { api } from '@/shared/api/axios';

/**
 * Fetches plans data from the API.
 *
 * @returns {Promise<IPlanApiResponse>} A promise that resolves with the plans data if the request is successful.
 * @throws {Error} If the API request fails or returns unsuccessful response.
 */
const fetchPlans = async (): Promise<IPlanApiResponse> => {
  const { data } = await api.get<IPlanApiResponse>('api.json');
  if (!data.success) {
    throw new Error('Failed to fetch plans');
  }

  return data;
};

export const usePlansQuery = () => {
  return useQuery<IPlanApiResponse, Error>({
    queryKey: ['plans'],
    queryFn: fetchPlans,
  });
};
