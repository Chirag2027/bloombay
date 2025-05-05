import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/Products/FilterSidebar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {

  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  // state variable that tells whether filter drawer is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // function to toggle filter drawer
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // function to close the sidebar when clicked outside
  const handleClickOutside = (e) => {
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false)
    }
  }

  useEffect(() => {
    // event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    // clean event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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
        },
      
        {
          _id: "5",
          name: "Trouser 5",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500/500?random=5"
            },
          ],
        }, 
      
        {
          _id: "6",
          name: "Trouser 6",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500/500?random=1"
            },
          ],
        }, 
      
        {
          _id: "7",
          name: "Trouser 7",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500/500?random=2"
            },
          ],
        },
      
        {
          _id: "8",
          name: "Trouser 8",
          price: 1500,
          images: [
            {
              url: "https://picsum.photos/500/500?random=0"
            },
          ],
        }
      ];

      setProducts(fetchedProducts);

    }, 1000);
  }, []);

  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Mobile filter button */}
      <button 
        onClick={toggleSidebar}
        className='lg:hidden border p-2 flex justify-center items-center'>
        <FaFilter className='mr-2 '/>
        Filter
      </button>

      {/* Filter Sidebar */}
      <div 
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>

      <div className="flex-grow p-4">
        <h2 className='text-2xl uppercase mb-4'>All Collections</h2>

        {/* Sort options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />

      </div>

    </div>
  )
}

export default CollectionPage
