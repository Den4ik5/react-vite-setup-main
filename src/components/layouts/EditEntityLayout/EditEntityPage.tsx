import { useGetUserQuery } from '../../../api/entity';

export type EditEntityPageProps = {
  rows: any[];
};

export const EditEntityPage = (props: EditEntityPageProps) => {
  const id = '';
  const { data: user, error, isLoading } = useGetUserQuery(id);

  return <div>234343434543534</div>;
};
