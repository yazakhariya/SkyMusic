import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://painassasin.online/',

    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => {
                return {
                    url: 'user/signup/',
                    method: 'POST',
                    body,
                }
            }
        }),
        loginUser: builder.mutation({
            query: (body) => {
                return {
                    url: 'user/login/',
                    method: 'POST',
                    body,
                }
            }
        }),
        getToken: builder.mutation({
            query: (body) => {
                return {
                    url: 'user/token/',
                    method: 'POST',
                    body,
                }
            },
        }),
        getRefreshToken: builder.mutation({
            query: (token) => {
                return {
                    url: 'user/token/refresh/',
                    method: 'POST',
                    body: {
                        refresh: token,
                    }
                }
            },
        }),
        getAllTracks: builder.query({
            query: () => 'catalog/track/all',
        }),
        addToFavorite: builder.mutation({
            query: (id) => {
                return {
                    url: `catalog/track/${id}/favorite/`,
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            },
        }),
        deleteFavorite: builder.mutation({
            query: (id) => {
                return {
                    url: `catalog/track/${id}/favorite/`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            },
        }),
        getCollection1: builder.query({
            query: () => 'catalog/selection/1/',
        }),
        getCollection2: builder.query({
            query: () => 'catalog/selection/2/',
        }),
        getCollection3: builder.query({
            query: () => 'catalog/selection/3/',
        }),
    }),
});

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation, 
    useGetAllTracksQuery, 
    useAddToFavoriteMutation, 
    useGetTokenMutation, 
    useGetRefreshTokenMutation, 
    useDeleteFavoriteMutation,
    useGetCollection1Query,
    useGetCollection2Query,
    useGetCollection3Query,
} = authApi;