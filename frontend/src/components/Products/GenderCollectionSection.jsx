import React from 'react'
import mensCollectionImage from "../../assets/mens-collection.webp"
import womensCollectionImage from "../../assets/womens-collection.webp"
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
  return (
    <section className="py-20 px-4 lg:px-0 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Shop By Category</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Women's collection */}
          <div className="flex-1 group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="relative h-96 md:h-[600px] overflow-hidden">
              <img
                src={womensCollectionImage}
                alt="Women's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                <p className="mb-4 opacity-90">Discover the latest trends in women's fashion</p>
                <Link
                  to="/collections/all?gender=Women"
                  className="inline-block bg-white text-gray-900 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Shop Women
                </Link>
              </div>
            </div>
          </div>
          
          {/* Men's collection */}
          <div className="flex-1 group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="relative h-96 md:h-[600px] overflow-hidden">
              <img
                src={mensCollectionImage}
                alt="Men's Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                <p className="mb-4 opacity-90">Explore our curated selection for men</p>
                <Link
                  to="/collections/all?gender=Men"
                  className="inline-block bg-white text-gray-900 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Shop Men
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenderCollectionSection