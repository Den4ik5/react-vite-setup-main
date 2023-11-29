import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GetUserResponse} from './types';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUser: builder.query<GetUserResponse[], string>({
            query: (id: string) => `/users/${id}`,
            providesTags: (result, error, id) => [{type: 'Posts', id}],
        }),
        getAllUsers: builder.query({
            query: () => `/users/`,
            providesTags: (result) => {
                console.log(result);
                // is result available?
                return result
                    ? // successful query
                    [
                        ...result.map(({id}) => ({type: 'Users', id} as const)),
                        {type: 'Users', id: 'LIST'},
                    ]
                    : // an error occurred, but we still want to refetch this query when `{ type: 'Users', id: 'LIST' }` is invalidated
                    [{type: 'Users', id: 'LIST'}]
            }
        }),
        deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `/users/${id}`,
                    method: 'DELETE',
                }
            },
            // Invalidates all queries that subscribe to this Post `id` only.
            invalidatesTags: (result, error, id) => [{type: 'Users', id}],
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetUserQuery,
    useGetAllUsersQuery,
    useDeleteUserMutation,
} = userApi;
