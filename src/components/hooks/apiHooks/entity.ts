import {useGetUserQuery} from '../../../api';

// @Deprecated
export const useGetUser = (id: string) => {
    const user = useGetUserQuery(id);
    return user.data;
};
