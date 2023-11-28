import { useEffect, useState } from 'react';
import { getUser } from '../../../api/entity';

// @Deprecated
export const useGetUser = (id: string) => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const user = await getUser(id);
    setUser(user);
  }, [id]);

  return user;
};
