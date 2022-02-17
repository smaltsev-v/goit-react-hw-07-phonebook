import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://620e12b8585fbc3359d5bda4.mockapi.io' }),
  tagTypes: 'contacts',
  endpoints: builder => ({
    fetchContact: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    createContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const { useFetchContactQuery, useCreateContactMutation, useDeleteContactMutation } =
  contactApi;