import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { FaCheckCircle } from 'react-icons/fa';

// Sample checkout data
const checkout = {
  _id: "123",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jeans",
      color: "Blue",
      size: "M",
      price: 10,
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: "2",
      name: "T-Shirt",
      color: "Red",
      size: "M",
      price: 8,
      quantity: 2,
      image: "https://picsum.photos/200?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Main St",
    city: "Delhi",
    country: "India",
  },
};

const OrderConfirmationPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  const handleContinueShopping = () => {
    // alert('Redirecting to homepage...');
    navigate('/collections/all');
  };

//   const handleTrackOrder = () => {
//     alert('Tracking order...');
//   };

  return (
    <div className="min-h-screen bg-[#fdf7f4] p-6">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <div className="max-w-4xl mx-auto bg-[#fffaf8] p-8 rounded-xl shadow-md">
        {/* Header */}
        <div className="flex items-center justify-center mb-6 text-[#ea2e0e]">
          <FaCheckCircle className="text-4xl mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold text-center">Order Confirmed!</h1>
        </div>

        <p className="text-center text-[#444] mb-8 text-sm md:text-base">
          Thank you for your purchase. 
        </p>

        {/* Order & Delivery Info */}
        <div className="flex justify-between items-start mb-10 flex-col sm:flex-row gap-6 sm:gap-0">
          <div>
            <h2 className="font-semibold text-lg text-[#333]">Order ID: <span className="text-[#ea2e0e]">{checkout._id}</span></h2>
            <p className="text-gray-600 text-sm">Order Date: {new Date(checkout.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-[#ea2e0e] text-sm font-medium">
              Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}
            </p>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="mb-10">
          {checkout.checkoutItems.map((item) => (
            <div key={item.productId} className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <h4 className="font-semibold text-md text-[#333]">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.color} | {item.size}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-md text-[#333]">${item.price}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Shipping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#333]">Payment</h4>
            <p className="text-gray-600">PayPal</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-[#333]">Delivery Address</h4>
            <p className="text-gray-600">{checkout.shippingAddress.address}</p>
            <p className="text-gray-600">
              {checkout.shippingAddress.city}, {checkout.shippingAddress.country}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleContinueShopping}
            className="bg-[#ea2e0e] hover:bg-[#c52a0d] text-white py-2 px-6 rounded-lg transition"
          >
            Continue Shopping
          </button>
          {/* <button
            onClick={handleTrackOrder}
            className="bg-[#fff1eb] border border-[#ea2e0e] text-[#ea2e0e] hover:bg-[#fde2da] py-2 px-6 rounded-lg transition"
          >
            Track Order
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
