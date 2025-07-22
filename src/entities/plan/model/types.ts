export interface IMonthData {
  income: number;
  activePartners: number;
}

export interface IMonthPlanFact {
  plan: IMonthData;
  fact: IMonthData;
}

export type TTotalData = IMonthPlanFact[];

export interface IManagerMonth extends IMonthPlanFact {
  income: number;
  activePartners: number;
}

export interface IManager {
  id: number;
  adminId: number;
  adminName: string;
  year: number;
  months: (IManagerMonth | null)[];
}

export interface IPlanApiResponse {
  success: boolean;
  data: {
    total: TTotalData;
    table: IManager[];
  };
}
