import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import { Toaster } from 'sonner'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    // User Layout
    <Route path='/' element={<UserLayout />}>
      <Route index element={<Home />}/>

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
