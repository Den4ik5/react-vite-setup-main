import {useGetUserQuery} from '../../../api/userApi.ts';

// @Deprecated
export const useGetUser = (id: string) => {
    const user = useGetUserQuery(id);
    // console.log(user);
    return user.data;
};
