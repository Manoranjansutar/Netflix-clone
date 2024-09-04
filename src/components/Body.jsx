import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    const dispatch = useDispatch()




  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
