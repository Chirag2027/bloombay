import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false); // to check the scrolling
  const [startX, setStartX] = useState(0);
  // initial scroll position of the container
  const [scrollLeft, setScrollLeft] = useState(0);
  // to determine whether conatiner can be scrolled to right
  const [canScrollRight, setCanScrollRight] = useState(true);
  // to determine whether conatiner can be scrolled to left
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const newArrivals = [
    {
      _id: "1",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Jacket",
        },
      ],
    },

    {
      _id: "2",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Jacket",
        },
      ],
    },

    {
      _id: "3",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Jacket",
        },
      ],
    },

    {
      _id: "4",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Jacket",
        },
      ],
    },

    {
      _id: "5",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Jacket",
        },
      ],
    },

    {
      _id: "6",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Jacket",
        },
      ],
    },

    {
      _id: "7",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Jacket",
        },
      ],
    },

    {
      _id: "8",
      name: "Jacket",
      price: 1200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Jacket",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = (e) => {
    setIsDragging(false);
  };

  // function which get called when right and left icon buttons are clicked
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  // Update the scroll buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    // to enable or disable the left button for scrolling
    if (container) {
      const leftScrollVal = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScrollVal + container.clientWidth;

      setCanScrollLeft(leftScrollVal > 0 ? true : false);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft, // kitna pixel scroll ho gya hai container ka
      clientWidth: container.clientWidth, // portion of container visible to user
      containerScrollWidth: container.scrollWidth, // total width of the scrollable content inside container
      offsetLeft: scrollRef.current.offsetLeft,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest trends in fashion, freshly added to your wardrobe
        </p>

        {/* Scroll button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full shadow-md border border-gray-200 transition-all duration-200 
      ${
        canScrollLeft
          ? "bg-white text-black hover:bg-gray-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          : "bg-gray-200 text-gray-400 cursor-not-allowed"
      }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full shadow-md border border-gray-200 transition-all duration-200 
      ${
        canScrollRight
          ? "bg-white text-black hover:bg-gray-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-black/20"
          : "bg-gray-200 text-gray-400 cursor-not-allowed"
      }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } `}
        // to drag the content within the container
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[450px] object-cover rounded-lg"
              draggable="false"
            />

            {/* adding product price */}
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
