import React from "react";
import { HiShoppingBag, HiCreditCard, HiRefresh } from "react-icons/hi"

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            On all orders above $100.00
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiCreditCard className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">SECURE PAYMENT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            All major credit cards accepted
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiRefresh className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">EASY RETURNS</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            30-day money back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
