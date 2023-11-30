import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GetUserResponse} from './types';
import {User} from "../interfaces";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUser: builder.query<GetUserResponse, string>({
            query: (id: string) => `/users/${id}`,
            providesTags: (result, error, id) => [{type: 'Users', id}],
        }),
        getAllUsers: builder.query<GetUserResponse[], null>({
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
        deleteUser: builder.mutation<{
            success: boolean;
            id: number
        }, number>({
            query(id) {
                return {
                    url: `/users/${id}`,
                    method: 'DELETE',
                }
            },
            // Invalidates all queries that subscribe to this Users `id` only.
            invalidatesTags: (result, error, id) => [{type: 'Users', id}],
        }),
        addUser: builder.mutation<{
            success: boolean,
            user: User
        }, User>(
            {
                query(user: User) {
                    return {
                        url: `/users/`,
                        method: 'POST',
                        body: user
                    }
                },
                invalidatesTags: [{type: 'Users', id: 'List'}]
            }
        ),
        updateUser: builder.mutation<{
            success: boolean,
            user: User
        }, User>(
            {
                query(user: User) {
                    return {
                        url: `/users/${user.id}`,
                        method: 'PUT',
                        body: JSON.stringify(user),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                },
                invalidatesTags: (result, error, user) => [{type: 'Users', id: user.id}]
            }
        ),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetUserQuery,
    useGetAllUsersQuery,
    useDeleteUserMutation,
    useAddUserMutation,
    useUpdateUserMutation
} = userApi;
