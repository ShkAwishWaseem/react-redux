import React , {useEffect} from 'react'
import {useCreatePostMutation} from '../redux/api'


const Posts = () => {
//   const {isLoading,data} = useGetPostsQuery()
  const [createPost] = useCreatePostMutation()
  const userData = {
     "userId" : 9000,
     "id" : 1212,
     "title"  : "Aawish waseem",
     "body" :"Lorem ipsum dolor  laborum quasi, eligendi, molestias laboriosam libero magnam veritatis modi?"
  }
//   console.log(isLoading)

     
     const createNewPost = async () => {
     await createPost(userData);
     };
     
   

   const clickHandler = () => {
     createNewPost();
   }
  return (
    <>
    {/* {isLoading ? <div>Loading.......</div> : 
     data.map((item) => 
     <div>
     <h1><strong>{item?.title}</strong></h1>    
     <p>{item?.body}</p>
     </div>
)
     } */}
     <button onClick={clickHandler}>Click here</button>
     
    </>
  )
}

export default Posts
