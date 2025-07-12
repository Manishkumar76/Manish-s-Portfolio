import React from "react";
import Skills from "../components/Skills";
import Tools from "../components/Tools";
import Particle from "../components/Particle";


function About() {
    return (

        <div name='about' className='w-full mt-10 bg-[#0a192f] text-gray-300'>

            <Particle />

            {/* Introduction */}
            <div className='pt-24 flex flex-col items-center w-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 pl-6 md:pl-48'>
                    <div className='sm:text-right pb-8 mb-8 '>
                        <p className=' text-[33px] sm:text-4xl font-bold inline border-b-4 border-orange-600'>
                            Know Who I'M
                        </p>
                    </div>

                </div>
                <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Hi. I'm Manish Kumar, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className="text-[18px]">
                        <p>
                            I am currently pursuing my Bachelors in Computer Science & Engg. from GZSCCET , MRSPTU Bti.
                            I am currently exploring different Web & App technologies and working on my skills by building projects  and also working on my Data Structures and Algorithms.
                            Currently I am looking for an internship in the field of Web Development & App Development.
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <Skills />

            {/* Tools */}
            <Tools />

        </div>

    )
}

export default About;