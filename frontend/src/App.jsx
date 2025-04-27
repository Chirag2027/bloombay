import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    // User Layout
    <Route path='/' element={<UserLayout />}>
      <Route index element={<Home />}/>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />

    </Route>
  )
)

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
