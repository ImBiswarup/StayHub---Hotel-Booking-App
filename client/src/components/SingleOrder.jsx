import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import hotelImage from '../Image/Hotel.jpg';

const SingleOrder = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [adults, setAdults] = useState('');
  const [child, setChild] = useState('');
  const [room, setRoom] = useState(1);

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleReviewsClick = () => {
    setShowDetails(false);
  };

  const handleAdultChange = (e) => {
    setAdults(e.target.value);
  };

  const handleChildChange = (e) => {
    setChild(e.target.value);
  };

  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='h-screen overflow-y-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div className="mx-2">
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto my-auto flex">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-white text-3xl title-font font-medium mb-4">Hotel name</h1>
                <div className="flex mb-4">
                  <a onClick={handleDetailsClick} className={`flex-grow text-lg px-1 ${showDetails ? 'text-indigo-400 border-b-2 border-indigo-500' : ''}`}>Details</a>
                </div>
                <div className={`leading-relaxed mb-4 ${showDetails ? "" : "hidden"}`}>
                  <p>Details: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ex saepe deleniti corporis vel nam modi dolores illum minus eaque labore dolore laboriosam quibusdam soluta recusandae, animi voluptates fugiat repudiandae quas cum incidunt. Libero accusamus ipsum inventore, facilis temporibus sint velit doloribus quae nam? Eum alias dicta qui aspernatur possimus.</p>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Rooms</span>
                    <select value={room} onChange={handleRoomChange} className="ml-auto border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-400">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Adults</span>
                    <select value={adults} onChange={handleAdultChange} className="ml-auto border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-400">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Child</span>
                    <select value={child} onChange={handleChildChange} className="ml-auto border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-400">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="flex mt-6" id="date">
                    <span className="text-gray-500">From</span>
                    <input type="date" className="ml-auto border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-400" />
                  </div>
                  <div className="flex mt-4">
                    <span className="text-gray-500">To</span>
                    <input type="date" className="ml-auto border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-400" />
                  </div>
                  <div className="flex mt-6">
                    <span className="title-font font-medium text-2xl text-white">$58.00</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Book Hotel</button>
                    <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 hover:text-indigo-500" onClick={(e) => { alert('Added to wishlist') }} viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:h-auto h-64 flex-col my-auto">
                <Slider {...carouselSettings}>
                  <div>
                    <img alt="carousel" className="w-full h-full object-cover object-center rounded cursor-pointer" src={hotelImage} />
                  </div>
                  <div>
                    <img alt="carousel" className="w-full h-full object-cover object-center rounded cursor-pointer" src={hotelImage} />
                  </div>
                  <div>
                    <img alt="carousel" className="w-full h-full object-cover object-center rounded cursor-pointer" src={hotelImage} />
                  </div>
                  <div>
                    <img alt="carousel" className="w-full h-full object-cover object-center rounded cursor-pointer" src={hotelImage} />
                  </div>
                  <div>
                    <img alt="carousel" className="w-full h-full object-cover object-center rounded cursor-pointer" src={hotelImage} />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-white mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              [1, 2, 3, 4, 5].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2 text-white">John Doe</h3>
                    <div className="flex items-center text-yellow-300">
                      {
                        [1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="mr-1" />
                        ))
                      }
                    </div>
                    <p className="text-white mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut quam purus. Nulla facilisi."</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
