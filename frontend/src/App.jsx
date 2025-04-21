import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    // User Layout
    <Route path='/' element={<UserLayout />}>

    </Route>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
