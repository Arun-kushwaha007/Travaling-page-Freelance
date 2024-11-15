import React from 'react'
import Image1 from "../Assets/Image1.png"

const Explore = () => {
  return (
    <div>
      <div className="main mt-16">
        <div className="top flex justify-between ">
        <h1 className="text-xl font-semibold relative left-8"> Explore the destination</h1>
        <button className='relative right-8 border-black border border-solid p-1 rounded-md'>View All</button>
        </div>
        <div className="cards flex justify-evenly my-3 align-middle items-center ">
          <div className="card flex flex-col justify-center  rounded-md shadow-md max-w-[200px] object-fill
          hover:shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out border border-solid border-black"><img src={Image1}  alt="" /> 
          <div className="text mx-2 flex ">
            <div>
            <h1>Laga di braise</h1>
            <h3>Braies, Italy</h3>
            <h2>$50/per person</h2>

            </div>
            <button className='bg-slate-500 w-4/6 h-11 rounded-md relative top-4'>Book Now</button>
            </div>
            </div>
            <div className="card flex flex-col justify-center  rounded-md shadow-md max-w-[200px] object-fill
          hover:shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out border border-solid border-black"><img src={Image1}  alt="" /> 
          <div className="text mx-2 flex ">
            <div>
            <h1>Laga di braise</h1>
            <h3>Braies, Italy</h3>
            <h2>$50/per person</h2>

            </div>
            <button className='bg-slate-500 w-4/6 h-11 rounded-md relative top-4'>Book Now</button>
            </div>
            </div>
            <div className="card flex flex-col justify-center  rounded-md shadow-md max-w-[200px] object-fill
          hover:shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out border border-solid border-black"><img src={Image1}  alt="" /> 
          <div className="text mx-2 flex ">
            <div>
            <h1>Laga di braise</h1>
            <h3>Braies, Italy</h3>
            <h2>$50/per person</h2>

            </div>
            <button className='bg-slate-500 w-4/6 h-11 rounded-md relative top-4'>Book Now</button>
            </div>
            </div>
            <div className="card flex flex-col justify-center  rounded-md shadow-md max-w-[200px] object-fill
          hover:shadow-2xl hover:bg-gray-100 transition duration-300 ease-in-out border border-solid border-black"><img src={Image1}  alt="" /> 
          <div className="text mx-2 flex ">
            <div>
            <h1>Laga di braise</h1>
            <h3>Braies, Italy</h3>
            <h2>$50/per person</h2>

            </div>
            <button className='bg-slate-500 w-4/6 h-11 rounded-md relative top-4'>Book Now</button>
            </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Explore
