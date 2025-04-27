import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import register from '../assets/register.webp'

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("User Registered: ", {email, password, name});
  }
    
  return (
    <div className='flex min-h-screen'>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl border border-gray-100 shadow-lg backdrop-blur-sm"
        >
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="BloomBay" className="h-14 animate-pulse" />
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">Create Account</h2>
          <p className="text-center mb-6 text-gray-500">
            Join our community and start exploring
          </p>
          
          <div className="mb-4">
            <label className='block text-sm font-medium mb-1 text-gray-700'>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-black transition-all'
              placeholder='Enter your name'
            />
          </div>
          
          <div className="mb-4">
            <label className='block text-sm font-medium mb-1 text-gray-700'>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-black transition-all'
              placeholder='Enter your email'
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-black transition-all'
              placeholder='Create a password'
            />
          </div>
          
          <button
            type='submit'
            className='w-full bg-black text-white p-3 rounded-lg font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
          >
            Create Account
          </button>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className='text-blue-600 font-medium hover:text-blue-800 underline-offset-2 hover:underline'
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
      
      {/* Image */}
      <div className="hidden md:block w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        <div className="h-full">
          <img 
            src={register} 
            alt="Register Account" 
            className='h-full w-full object-cover transition-transform duration-5000 hover:scale-105'
          />
        </div>
      </div>
    </div>
  )
}

export default Register