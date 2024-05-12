import React from 'react'
import Image from '../Image/My_Image.jpg';

const Home = () => {
    return (
        <div>
            <div className='h-screen overflow-y-scroll cursor-pointer' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                        <div key={item} className='w-full h-48 mt-2 mb-2 border flex'>
                            <div className="w-[25%] bg-red-500 p-5 flex items-center justify-center">
                                <h1>
                                    <img src={Image} className="w-80 h-40 rounded" alt="" />
                                </h1>
                            </div>

                            <div className="w-[75%] bg-green-500">
                                <h1>
                                    Hotel name
                                </h1>
                                <h2>
                                    Desc
                                </h2>
                                <h2>
                                    Amount : $
                                </h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Home