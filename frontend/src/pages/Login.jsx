import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import login from '../assets/login.webp'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <div className='flex min-h-screen'>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-gray-50">
        <form 
          className="w-full max-w-md bg-white p-8 rounded-xl border border-gray-100 shadow-lg"
        >
          <div className="flex justify-center mb-8">
            <img src={Logo} alt="BloomBay" className="h-12" />
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-3">Hey There! 👋🏻</h2>
          <p className="text-center mb-8 text-gray-500">
            Enter your username and password to Log in.
          </p>
          
          <div className="mb-5">
            <label className='block text-sm font-medium mb-2 text-gray-700'>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-black transition-all'
              placeholder='Enter your email'
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-black transition-all'
              placeholder='Enter your password'
            />
          </div>
          
          <button
            type='submit'
            className='w-full bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition-all shadow-md'
          >
            Sign In
          </button>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className='text-blue-600 font-medium hover:text-blue-800'                      
            >
              Register
            </Link>
          </p>
        </form>
      </div>
      
      {/* Image */}
      <div className="hidden md:block w-1/2">
        <div className="h-full">
          <img 
            src={login} 
            alt="Login to Account" 
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Login