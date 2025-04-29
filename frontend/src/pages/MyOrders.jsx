import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]); // state variable to hold the orders
  const [loading, setLoading] = useState(true);

  // useEffect to simulate fetching of orders
  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "1",
          createdAt: new Date(),
          shippingAddress: { city: "Mumbai", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/200?random=1",
            },
          ],
          totalPrice: 1200,
          isPaid: true,
        },

        {
          _id: "2",
          createdAt: new Date(),
          shippingAddress: { city: "Mumbai", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/200?random=4",
            },
          ],
          totalPrice: 1200,
          isPaid: true,
        },
      ];

      setOrders(mockOrders);
      setLoading(false); // stop is once data is fetched
    }, 1000);
    return () => clearTimeout();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        {/* table to display the orders */}
        <table className="min-w-full text-left text-gray-500 ">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:px-3">Image</th>
              <th className="py-2 px-4 sm:px-3">Order Id</th>
              <th className="py-2 px-4 sm:px-3">Created</th>
              <th className="py-2 px-4 sm:px-3">Shipping Address</th>
              <th className="py-2 px-4 sm:px-3">Items</th>
              <th className="py-2 px-4 sm:px-3">Price</th>
              <th className="py-2 px-4 sm:px-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-400">
                  Loading orders...
                </td>
              </tr>
            ) : orders.length > 0 ? (
              orders.map((order, index) => (
                <tr
                  key={order._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 cursor-pointer`}
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0]?.image}
                      alt={order.orderItems[0]?.name || "Product"}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-semibold text-gray-800">
                    {order.totalPrice.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } py-1 px-3 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-6 text-center text-gray-400">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
