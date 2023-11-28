import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetUserResponse } from './types';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getUser: builder.query<GetUserResponse, string>({
      query: (id: string) => `/users/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = userApi;
