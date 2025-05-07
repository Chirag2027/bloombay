import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {

    const cartProducts = [
        {
            productId: 1,
            name: "T-Shirt",
            size: "L",
            color: "Red",
            quantity: 1,
            price: 20,
            image: "https://picsum.photos/200?random=1",
        },

        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: 250,
            image: "https://picsum.photos/200?random=1",
        },

    ]

  return (
    <div>
        {
            cartProducts.map((product, index) => (
                <div key={index} className='flex items-start justify-between py-4 border-b'>
                    <div className='flex items-center'>
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className='w-20 h-24 object-cover mr-4 rounded'
                        />
                        
                        <div>
                            <h3>{product.name}</h3>
                            <p className='text-sm text-gray-500'>
                                Size: {product.size} | Color: {product.color}
                            </p>

                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                                <span className='mx-4f'>{product.quantity}</span>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                            </div>
                        </div>
                    </div>

                    {/* To display price */}
                    <div className="flex flex-col items-end justify-between h-full">
                        <p className="text-lg font-semibold">${product.price.toLocaleString()}</p>
                        <button 
                            className="mt-2 p-1 rounded hover:bg-red-100 transition-colors cursor-pointer"
                            aria-label="Remove item"
                        >
                            <RiDeleteBin3Line className="h-6 w-6 text-red-600" />
                        </button>
                    </div>  
                </div>
            ))
        }
    </div>
  )
}

export default CartContents
