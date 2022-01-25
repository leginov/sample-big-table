import DataTable, { Column } from '.';

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 90 },
  { id: 'guid', label: 'GUID', minWidth: 90 },
  {
    id: 'fundName',
    label: 'Fund Name',
    minWidth: 150,
  },
  {
    id: 'manager',
    label: 'Manager',
    minWidth: 150,
  },
  {
    id: 'fundExposureM',
    label: 'Fund Exposure (m)',
    minWidth: 110,
  },
  {
    id: 'fundExposurePerc',
    label: 'Fund Exposure (%)',
    minWidth: 110,
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 150,
  },
  {
    id: 'lastUpdatedDate',
    label: 'Last Updated Date',
    minWidth: 150,
  },
];

interface Props {
  data: any[];
}

export const FundDataTable: React.VFC<Props> = ({ data }) => (
  <DataTable data={data} columns={columns} />
);
