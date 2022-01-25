export interface Voting {
  fundList: Fund[];
  voteRecords: VoteRecord[];
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

export interface VoteRecord {
  id: string;
  guid: string;
  holdings: string;
  fund: string;
  assetManager: string;
  fundExposurePerc: number;
  clientInvestd: number;
  totalAssets: number;
  meetingType: string;
  meetingDate: string;
  proposalText: string;
  topTenHoldings: boolean;
  assetAndCompanyDifferently: boolean;
  managerVotedDifferentlyForTheSameProposal: boolean;
  managerMarkedSignificant: boolean;
  significance: number;
  rationale: string;
}
