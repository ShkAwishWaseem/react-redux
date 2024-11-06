     import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


     // export const postsApi = createApi({
     //      reducerPath:"api",
     //      baseQuery : fetchBaseQuery({
     //           baseUrl:"https://jsonplaceholder.typicode.com"
     //      }),
     //      endpoints : (builder) => ({
     //                getPosts : builder.query({query : () => "posts" }),
     //                getComments : builder.query({query : () => "comments" }),
     //                createPost: builder.mutation({
     //                     query: (newPost) => ({
     //                     url: 'posts',
     //                     method: 'POST',
     //                     body: newPost,
     //                     }),
     //                }),
                    
     //      })
     // })
     export const postsApi = createApi({
          reducerPath:"api",
          baseQuery : fetchBaseQuery({
               baseUrl:"http://localhost:8000/"
          }),
          endpoints : (builder) => ({
                    // getPosts : builder.query({query : () => "posts" }),
                    // getComments : builder.query({query : () => "comments" }),
                    createPost: builder.mutation({
                         query: (newPost) => ({
                         url: 'redux',
                         method: 'POST',
                         body: newPost,
                         }),
                    }),
                    
          })
     })

     export const {useCreatePostMutation } = postsApi