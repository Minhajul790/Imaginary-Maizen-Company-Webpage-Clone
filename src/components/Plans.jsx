import React from 'react'
import img1 from "../assets/img/scaledImage/img1.jpg"
import img2 from "../assets/img/scaledImage/img2.jpg"
import img3 from "../assets/img/scaledImage/img3.jpg"


const Plans = () => {
  return (
    <div className='py-[100px] px-2 '>
    <div className=" text-center mx-auto md:grid grid-cols-3 max-w-[1240px] gap-6">
        <div className=' shadow my-4 h-[500px] bg-gray-100 hover:scale-105 duration-500'>
        <img className=' w-full h-80 object-cover' src={img1} alt='img1' />
        <div className=' mt-[20px]'>
        <h1 className=' text-balck text-center font-bold text-2xl hover:cursor-pointer hover:text-blue-700'>join our demo session</h1>
        <p className=' mt-[10px]'>learn your interested skill and enhance your profile</p>
        <button>Start Trial</button>
        </div>
        </div>
        <div className=' shadow my-4 h-[500px]  hover:scale-105 duration-500'>
        <img className=' w-full h-80 object-cover' src={img3} alt="img3" />
        <div className=' mt-[20px]'>
        <h1 className=' text-balck text-center font-bold text-2xl hover:cursor-pointer hover:text-blue-700'>join our community</h1>
        <p className=' mt-[10px]'>get a chance to be the part of large family of WsCubeTech</p>
        </div>
        </div>
        <div className=' shadow my-4 h-[500px] hover:scale-105 duration-500 '>
        <img className=' w-full h-80 object-cover mt-[1.2px]' src={img2} alt="img2" />
        <div className=' mt-[20px]'>
        <h1 className=' text-black text-center font-bold text-2xl hover:cursor-pointer hover:text-blue-700'>Get your best mentors</h1>
        <p className=' mt-[10px]'>anytime you need any help our mentors are there</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Plans
