import { useEffect, useState } from 'react';
import { FundDataTable, VoteRecordDataTable } from '../../components/DataTable';
import { Voting } from '../../models/Voting';

export const DataTableContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Voting>();

  useEffect(function getData() {
    fetch(
      'https://raw.githubusercontent.com/EvgeniyaSirotkina/demojsondata/main/db.json'
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <FundDataTable data={data.fundList} />
      <VoteRecordDataTable data={data.voteRecords} />
    </>
  );
};
