import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product, index) => (
            <Link 
            key={index}
            to={`/product/${product._id}`}
            className='block transition-transform duration-300 hover:scale-105'>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl border border-gray-100">
                    <div className="w-full h-96 mb-4 overflow-hidden rounded-lg">
                        <img src={product.images[0].url} 
                        alt={product.images[0].altText || product.name} 
                        className='w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity duration-300'
                        />
                    </div>
                    <h3 className='text-sm font-semibold mb-2 truncate'>{product.name}</h3>
                    <p className="text-gray-500 font-medium text-sm tracking-tighter">
                        ${product.price}
                    </p>
                </div>


            </Link>
        ))}
    </div>
  )
}

export default ProductGrid
