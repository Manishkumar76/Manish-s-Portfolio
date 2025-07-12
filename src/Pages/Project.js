import React from 'react'
import projectData from '../projectData'
import Particle from '../components/Particle'

function Project() {
  return (
    <div className='w-full mt-20 mb-10 text-gray-300 bg-[#0a192f]'>
      <Particle />

      <div className='max-w-[1200px] mx-auto p-4'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold border-b-4 border-orange-600 inline-block text-gray-300'>Projects</p>
          <p className='py-4'>Check out some of my recent works</p>
        </div>

        {/* Card Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {
            projectData.map((project, index) => (
              <div
                key={index}
                className="group p-4 bg-white/5 backdrop-blur-md rounded-xl border border-orange-400 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:animate-glow"
              >
                {/* Project Image */}
                <div className="h-[200px] overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Details */}
                <div className="pt-4 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-white border-b-2 border-orange-400 pb-1">{project.name}</h2>
                    <p className="text-sm text-gray-300 pt-2">{project.description}</p>
                  </div>

                  <div className="pt-4 flex gap-3 justify-center flex-wrap">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all">Demo</button>
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-600 hover:text-white transition-all">Code</button>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project;
