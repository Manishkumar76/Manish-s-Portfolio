import React from 'react'
import {
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
    SiCanva,
    SiMysql,
    SiFlutter
} from "react-icons/si";

// import {
//     DiMongodb,
// } from "react-icons/di";

import { SiXampp } from "react-icons/si";

function Tools() {
    return (
        <div className='max-w-[1000px] mx-auto mt-5  lg:pl-16'>

            {/* Container */}
            <div className='mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <p className='inline text-4xl font-bold border-b-4 border-pink-600 '>Tools I Used</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8 px-4'>

                <div className='shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-pink-400 hover:shadow-lg'>
                    <SiVisualstudiocode className='mt-2 mx-auto' size={50} />
                    <p className='my-4'>Visual Studio</p>
                </div>

                <div className='shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg'>
                    <SiVercel className='mt-2 mx-auto' size={50} />
                    <p className='my-4'>Vercel</p>
                </div>

                <div className='shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-pink-400 hover:shadow-lg'>
                    <SiPostman className='mt-2 mx-auto' size={50} />
                    <p className='my-4'>Postman</p>
                </div>

                <div className='shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg'>
                    <SiFlutter className='mt-2 mx-auto' size={50} />
                    <p className='my-4'>Flutter</p>
                </div>

                <div className='shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500  hover:shadow-pink-400 hover:shadow-lg'>
                    <SiMysql className='mt-2 mx-auto' size={50} />
                    <p className='my-4'>MySQL Workbench</p>
                </div>

                <div className='shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg'>
                    <SiCanva className='mt-2 mx-auto' size={50} />
                    <p className='my-4'>Canva</p>
                </div>

            </div>

        </div>
    )
}

export default Tools