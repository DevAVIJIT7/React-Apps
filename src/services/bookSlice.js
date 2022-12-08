import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookSlice = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1' }),
  tagTypes: ['Book'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (searchTerm) => `/volumes?q=${searchTerm}`,
      providesTags: ['Book'],
    }),
  }),
})

export const {
  useGetBooksQuery,
} = bookSlice
