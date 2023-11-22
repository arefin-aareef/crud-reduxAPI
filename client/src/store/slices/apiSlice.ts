import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi: any = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['Products'],
	endpoints: builder => ({
		getAllProducts: builder.query({
			query: () => '/api/v1/products',
			providesTags: ['Products'],
		}),

		getSingleProduct: builder.query({
			query: id => `/api/v1/products/${id}`,
			providesTags: id => [{ type: 'Products', id }],
		}),

		updateSingleProduct: builder.mutation({
			query: ({ id, body }) => ({
				url: `/api/v1/products/${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: id => [{ type: 'Products', id }],
		}),

		createSingleProduct: builder.mutation({
			query: body => ({
				url: '/api/v1/products',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Products'],
		}),

		deleteSingleProduct: builder.mutation({
			query: id => ({
				url: `/api/v1/products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Products'],
		}),
	}),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery, useUpdateSingleProductMutation, useCreateSingleProductMutation, useDeleteSingleProductMutation } = productsApi;
