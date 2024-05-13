import React from 'react';
import MyImage from '../Image/My_Image.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='h-screen overflow-y-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div key={item} className='w-full h-48 mt-2 mb-2 flex'>
                            <Link to={`/${item}`} className="w-[25%] p-5 flex items-center justify-center cursor-pointer transform transition duration-300 hover:scale-105">
                                <div className="rounded w-full aspect-w-4 aspect-h-3">
                                    <img src={MyImage} className="absolute inset-0 w-full h-full object-cover rounded" alt="Hotel Image" />
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
                                <div className="flex flex-col gap-y-4 text-black">
                                    <div className="flex gap-x-4">
                                        <select name="adults" id="adults" className="border rounded-md px-4 py-2 w-32 focus:outline-none focus:ring focus:border-blue-400">
                                            <option value="1">1 Adult</option>
                                            <option value="2">2 Adults</option>
                                            <option value="3">3 Adults</option>
                                            <option value="4">4 Adults</option>
                                        </select>
                                        <select name="childs" id="childs" className="border rounded-md px-4 py-2 w-32 focus:outline-none focus:ring focus:border-blue-400">
                                            <option value="0">No Child</option>
                                            <option value="1">1 Child</option>
                                            <option value="2">2 Children</option>
                                            <option value="3">3 Children</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-x-4 text-black">
                                        <label htmlFor="arrival" className="flex items-center">
                                            <span className="mr-2 text-white">From</span>
                                            <input type="date" name="arrival" id="arrival" className="border rounded-md px-4 py-2 w-36 focus:outline-none focus:ring focus:border-blue-400" />
                                        </label>
                                        <label htmlFor="departure" className="flex items-center">
                                            <span className="mr-2 text-white">To</span>
                                            <input type="date" name="departure" id="departure" className="border rounded-md px-4 py-2 w-36 focus:outline-none focus:ring focus:border-blue-400" />
                                        </label>
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