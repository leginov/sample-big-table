export interface Voting {
  fundList: Fund[];
}

export interface Fund {
  id: string;
  guid: string;
  fundName: string;
  manager: string;
  fundExposureM: number;
  fundExposurePerc: number;
  status: string;
  lastUpdatedDate?: string;
}
