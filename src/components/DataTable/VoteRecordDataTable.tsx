import DataTable, { Column } from '.';

const columns: Column[] = [
  {
      id: 'id',
      label: 'ID',
  },
  {
      id: 'guid',
      label: 'Guid',
  }, 
  {
      id: 'holdings',
      label: 'Holdings',
  }, 
  {
      id: 'fund',
      label: 'Fund',
  }, 
  {
      id: 'assetManager',
      label: 'Asset Manager',
  }, 
  {
      id: 'fundExposurePerc',
      label: 'Fund Exposure (m)',
  }, 
  {
      id: 'clientInvestd',
      label: 'Client Invested',
  }, 
  {
      id: 'totalAssets',
      label: 'Total Assets',
  }, 
  {
      id: 'meetingType',
      label: 'Meeting Type',
  }, 
  {
      id: 'meetingDate',
      label: 'Date',
  }, 
  {
      id: 'proposalText',
      label: 'Proposal Text',
  }, 
  {
      id: 'topTenHoldings',
      label: 'Top 10 Holdings',
  }, 
  {
      id: 'assetAndCompanyDifferently',
      label: 'Asset And Company Vote Differently',
  }, 
  {
      id: 'managerVotedDifferentlyForTheSameProposal',
      label: 'Manager Voted Differently For The Same Proposal',
  }, 
  {
      id: 'managerMarkedSignificant',
      label: 'Manager Marked Significant',
  }, 
  {
      id: 'significance',
      label: 'Significance',
  }, 
  {
      id: 'rationale',
      label: 'Rationale',
  },
];

interface Props {
  data: any[];
}

export const VoteRecordDataTable: React.VFC<Props> = ({ data }) => (
  <DataTable data={data} columns={columns} />
);
