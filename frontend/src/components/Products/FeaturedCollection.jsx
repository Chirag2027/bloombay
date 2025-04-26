import React from 'react'
import { Link } from 'react-router-dom'
import featured from '../../assets/featured.webp'

const FeaturedCollection = () => {
  return (
    <section className='py-16 px-14 lg:px-0'>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
            {/* Left content */}
            <div className="lg:w-1/2 p-8 text-center lg:text-left">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Comfort and Style
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Apparel made for your everyday life
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Discover high quality apparel for men, women, and kids. We offer a wide range of styles and colors to suit your needs. From casual to formal, we have something for everyone. Shop now and find the perfect outfit for any occasion. 
                </p>
                <Link 
                to="/collections/all"
                className='bg-black text-white py-3 px-6 text-lg rounded-md hover:bg-gray-800 transition-colors duration-300'
                >
                    Shop Now
                </Link>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2">
                <img src={featured} 
                className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl' 
                alt="featured-collection" />
            </div>
        </div>
    </section>
  )
}

export default FeaturedCollection
