import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

// Dummy product to work with
const selectedProduct = {
  name: "Trouser",
  price: "1500",
  originalPrice: "2000",
  description:
    "Crafted from premium denim, this stylish trouser offers a perfect blend of comfort and durability. Designed for all-day wear, it features a modern fit, deep pockets, and a classic finish — making it a versatile choice for both casual and semi-formal looks.",
  brand: "Levi's",
  material: "Denim",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Blue", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=9",
      altText: "Trouser 1",
    },
    {
      url: "https://picsum.photos/500/500?random=7",
      altText: "Trouser 2",
    },
  ],
};

const similarProducts = [
  {
    _id: "1",
    name: "Trouser 1",
    price: 1500,
    images: [
      {
        url: "https://picsum.photos/500/500?random=9"
      },
    ],
  }, 

  {
    _id: "2",
    name: "Trouser 2",
    price: 1500,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7"
      },
    ],
  }, 

  {
    _id: "3",
    name: "Trouser 3",
    price: 1500,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6"
      },
    ],
  },

  {
    _id: "4",
    name: "Trouser 4",
    price: 1500,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3"
      },
    ],
  }
]

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null);
  // state variables for add to cart button 
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // when page gets loaded or selected product changes then 1st image of product will be shown as main image
  
  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  // to change the quantity
  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 p-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-2xl mb-4 bg-gray-50">
              <img
                src={mainImage}
                alt="Main Product Image"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right side section */}
          <div className="md:w-1/2 md:ml-10 p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              {selectedProduct.name}
            </h1>

            <div className="flex items-center mb-4">
              {selectedProduct.originalPrice && (
                <p className="text-gray-400 text-lg line-through mr-3">
                  ${selectedProduct.originalPrice}
                </p>
              )}
              <p className="text-2xl font-semibold text-gray-900">
                ${selectedProduct.price}
              </p>

              {selectedProduct.originalPrice && (
                <span className="ml-3 px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-md">
                  {Math.round(
                    (1 -
                      selectedProduct.price / selectedProduct.originalPrice) *
                      100
                  )}
                  % OFF
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* Colors section */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">
                Color:{" "}
                <span className="font-normal text-gray-500 ml-2">
                  {selectedColor}
                </span>
              </p>

              {/* colors button */}
              <div className="flex flex-wrap gap-3 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full transition-all duration-300 ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-black scale-110"
                        : "hover:scale-105"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Section */}
            <div className="mb-4 ">
              <p className="text-gray-700 font-medium mb-2">
                Size:{" "}
                <span className="font-normal text-gray-500 ml-2">
                  {selectedSize}
                </span>
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Section */}
            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-2">Quantity:</p>

              {/* quantity button */}
              <div className="inline-flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  disabled={quantity <= 1}
                  className="px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-100 rounded-l-lg disabled:opacity-50 transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2 text-gray-800 font-medium border-x border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-4 py-2 text-lg font-medium text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add To Cart button*/}
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Product Details: </h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;