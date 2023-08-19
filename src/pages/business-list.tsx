import { useListBusinesses } from '@/hooks/business-list';
import { Link } from 'react-router-dom';

const BusinessList = () => {
  const { businessList, isError, isLoading } = useListBusinesses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Ooops, there is something wrong</div>;
  }

  return (
    <div>
      <ul>
        {businessList?.map((business) => {
          return <li key={business._id}>{business.name}</li>;
        })}
      </ul>
      <Link to='/'>Back home</Link>
    </div>
  );
};

export default BusinessList;
