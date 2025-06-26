import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter , RouterProvider, createRoutesFromElements, Router, Route} from 'react-router-dom'
import {Layout} from './Layout'
import {Home , Contact , About} from './components/index/index/index.js'
import {User} from './components/User/User.jsx'
import  Github ,{load} from './components/Github/Github.jsx'

// const router = createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'/',
//       element: <Home/>,
//     },
//     {
//       path:'/contact',
//       element: <Contact/>,
//     },
//     {
//       path:'/about',
//       element: <About/>,
//     },
//     {
//       path:'/user/:userid',
//       element: <User/>,
//     },
//     {
//       path:'/github',
//       element: <Github/>,
//     },
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />

      <Route 
      loader={load}
      path="github" 
      element={<Github />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
