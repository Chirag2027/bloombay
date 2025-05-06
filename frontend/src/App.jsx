import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductDetails from './components/Products/ProductDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    // User Layout
    <Route path='/' element={<UserLayout />}>
      <Route index element={<Home />}/>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='profile' element={<Profile />} />
      <Route path='collections/:collection' element={<CollectionPage />} />
      <Route path='product/:id' element={<ProductDetails />} />

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
