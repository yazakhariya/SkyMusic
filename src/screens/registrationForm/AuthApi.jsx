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
            query: (body) => {
                return {
                    url: 'user/token/refresh/',
                    method: 'POST',
                    body,
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
    }),
});

export const { 
    useRegisterUserMutation, 
    useLoginUserMutation, 
    useGetAllTracksQuery, 
    useAddToFavoriteMutation, 
    useGetTokenMutation, 
    useGetRefreshTokenMutation, 
} = authApi;