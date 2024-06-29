import React from 'react';
import hotelImage from '../Image/Hotel.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='h-screen overflow-y-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div key={item} className='w-full h-48 mt-4 mb-4 ml-4 flex'>
                            <Link to={`/${item}`} className="w-[25%] p-5 flex items-center justify-center cursor-pointer transform transition duration-300 hover:scale-105">
                                <div className="rounded w-full aspect-w-4 aspect-h-3">
                                    <img src={hotelImage} className="absolute inset-0 w-full h-full object-cover rounded" alt="Hotel Image" />
                                </div>
                            </Link>

                            <div className="w-full rounded-md shadow-md p-6 flex items-center justify-between">
                                <div className="flex flex-col gap-y-4">
                                    <Link to={`/${item}`} className="text-2xl font-bold cursor-pointer">Hotel Name</Link>
                                    <p className="">Description goes here Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <div className="flex items-center gap-x-4">
                                        <h2 className="font-semibold">Amount:</h2>
                                        <p className="text-green-500 font-semibold">$250</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Home