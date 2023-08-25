import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = 'https://fakestoreapi.com';

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    fetchProductById: builder.query<Product, number>({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productsApi;
console.log('productsApi:', productsApi);

export type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export default productsApi;
