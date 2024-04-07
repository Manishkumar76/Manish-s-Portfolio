import React from 'react'
import projectData from '../projectData';
import Particle from '../components/Particle';

function Project() {
  console.log(projectData)
  return (
    <div className='w-full mt-20 mb-10 text-gray-300 bg-[#0a192f]'>

      <Particle />

      <div className='max-w-[1000px] lg:pl-20 mx-auto p-4 flex flex-col w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl pb-1 font-bold border-b-4 border-pink-600 text-gray-300'>Projects</p>
          <p className='py-2'>Check out some of my recent works</p>
        </div>

        {/* Card Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto'>

          {/* Card - 1 */}
          {
            projectData.map((project, index) => {
              return (

                //Glass hover animation
                <div className="group flex justify-center overflow-hidden  items-center relative cursor-pointer hover:scale-110 hover:shadow-[#6fc2b0] hover:shadow-lg duration-500 ">

                  {/* Card */}
                  <div className="max-w-[300px] sm:max-w-full flex flex-col overflow-hidden shadow-md border-2  rounded-md border-gray-600 shadow-pink-100 bg-slate-50" key={index}>

                    {/* Project Image */}
                    <img className="w-full h-[220px] shadow-md shadow-gray-400" src={project.image} alt="Sunset in the mountains" />

                    {/* Project Details */}
                    <div className="px-6 py-3">
                      <div className="font-bold text-xl text-blue-950 border-b-2 border-orange-400 ">{project.name}</div>
                      <p className="text-gray-800 pt-2 leading-[22px] text-[14px]">
                        {project.description}
                      </p>

                      {/* Project Links */}
                      <div className='pt-1 text-center'>

                        {/* Demo Button */}
                        <a href={project.demoLink}>
                          <button className='link-btn'>Demo</button>
                        </a>

                        {/* Code Button */}
                        <a href={project.githubLink}>
                          <button className='link-btn'>Code </button>
                        </a>

                      </div>

                    </div>
                  </div>

                  {/* shine box */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </div>

              )
            })
          }

        </div>

      </div>

    </div>
  )
}

export default Project;


//   {/* Card - 1 */}
//   <div style={{ backgroundImage: `url(${project1})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

//   {/* Hover Effect */}
//   <div className='opacity-0 group-hover:opacity-80'>

//     <span className='text-2xl font-bold text-white  tracking-wider'>
//       ReactJS Application
//     </span>

//     <div className='pt-8 text-center'>

//       <a href="/">
//         <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
//       </a>

//       <a href="/">
//         <button className='text-center rounded-lg px-4 py-3  m-2 bg-white text-gray-700 font-bold text-lg '>Code </button>
//       </a>

//     </div>

//   </div>

// </div>
