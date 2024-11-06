// import React, {useState} from 'react'
// import { useDispatch , useSelector } from 'react-redux'
// import { setData } from '../features/user';

// const Home = () => {
//      const [inputData, setInputData] = useState("");
//      const dispatch = useDispatch()
//      const [todo, setTodo] = useState('');
//      const user = useSelector((state) => state.user.data)


//      function submitHandler(e) {
//           e.preventDefault();
//           console.log(inputData);
//           dispatch(setData(todo))
//           setInputData("");
     
//      }
//   return (
//     <form onSubmit={submitHandler}>
//       {/* <p>User data from store is: {user}</p> */}
//      <input type="text" placeholder='Enter TODO' onChange={(e) => setInputData(e.target.value)}/>
//      {
//         user && user.map((item, index) => {
//                <li key={index}>
//                {item} 
//                {/* <button onClick={() => dispatch(removeTodo(index))}>Remove</button> */}
//              </li>
//           })
//      }
//       <button type="submit" >Add</button>

//     </form>
//   )
// }

// export default Home



// import React, {useState} from 'react'
// import { setTodo } from '../features/user'
// import { useDispatch , useSelector} from 'react-redux'


// const Home = () => {
//   const [todos,setTodos] = useState({
//     title : "",
//     paragraph: ""
//   });

//   const dispatch = useDispatch();
//   const TODOS = useSelector((state) => state.todos.list)

//        function submitHandler(e) {
//           e.preventDefault();
//           setTodos("");
//           console.log(todos);
//           dispatch(setTodo(todos))
//           setTodos({
//             title: "",
//             paragraph: ""
//           });
//      }
//      const handleChange = (e) => {
//       const { name, value } = e.target;

//       setTodos((prevTodo) => ({
//         ...prevTodo,
//         [name]: value
//       }));
//     };
//   return (
//     <>
//     <form onSubmit={submitHandler}>
       
//       <input
//        type="text" 
//       name="title"
//       placeholder="Enter TODO title"
//       value={todos.title}
//       onChange={handleChange}
//       />
//       <br/>


//       <input 
//         type="text"
//         name="paragraph"
//         placeholder="Enter TODO paragraph"
//         value={todos.paragraph}
//         onChange={handleChange}/>
     
//        <button type="submit" >Add</button>
//      </form>
//      <ul>
//       {TODOS.map((todo, index) => (
//         <li key={index}>
//         <strong>{todo.title}</strong>: {todo.paragraph}
//       </li>
//       ))}
//     </ul>
//     </>
//   )
// }

// export default Home



import React , {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../features/slicer'

const Home = () => {
  const [coffee, setCoffee] = useState([])
  const dispatch = useDispatch()
  const ITEMS = useSelector((state) => state.cart.items);


  async function Fetch() {
   
    let res = await fetch("https://fake-coffee-api.vercel.app/api")
    let data = await res.json()
    setCoffee(data)
  console.log(coffee)
  }
  useEffect(() => {
    Fetch() 
  },[])


  return (
    <>
    {coffee.map((item) => 

    <div class="rounded overflow-hidden shadow-lg flex flex-wrap ">
  <img class="w-[50%] m-auto" src={item.image_url} alt="Sunset in the mountains" />
  <div class="px-6 py-4 text-center">
    <div class="font-bold text-xl mb-2">{item.name}</div>
    <p class="text-gray-700 text-base">
{item.description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 m-auto">
    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 " onClick={ () =>   dispatch(addToCart(item)) }>Add to Cart</button>
  </div>
</div>
)}
 {ITEMS.map((item) =>       
    <div class="rounded overflow-hidden shadow-lg flex flex-wrap ">
    <img class="w-[50%] m-auto" src={item.image_url} alt="Sunset in the mountains" />
    <div class="px-6 py-4 text-center">
      <div class="font-bold text-xl mb-2">{item.name}</div>
      <p class="text-gray-700 text-base">
  {item.description}
      </p>
    </div>

  </div>
     )}
    </>
  )
}

export default Home
