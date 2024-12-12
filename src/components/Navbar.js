import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import logo from '../assets/manishLogo1.jpg'
import { NavLink } from 'react-router-dom'
import { RiContactsLine } from "react-icons/ri";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";


function Navbar() {

    const [nav, setNav] = useState(false);


    const clickHandler = () => {
        setNav(!nav);
    }

    return (

        <div className={`navbar-container`}>
            <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

                <div className='z-10'>
                    <img src={logo} alt="name-logo" className='w-[62px] h-[54px] rounded-md' />
                </div>

                {/* Menu */}
                <ul className='menu hidden md:flex text-xl'>

                    <NavLink to='/'>
                        <li className='group relative'>
                            <div><AiOutlineHome className='inline mt-[-4px] mr-1' /> <span>Home</span></div>
                            <span className="absolute mx-auto -bottom-1 left-0 w-0 h-[4px] bg-orange-400 transition-all duration-[600ms] delay-100 group-hover:w-[100%] rounded-md"></span>
                        </li>
                    </NavLink>

                    <NavLink to='/about'>
                        <li className='group relative'>
                            <div><AiOutlineUser className='inline mt-[-4px] mr-1' /><span>About</span></div>

                            {/* Underline box */}
                            <span className="absolute mx-auto -bottom-1 left-0 w-0 h-[4px] bg-orange-400 transition-all duration-[600ms] delay-100 group-hover:w-[100%] rounded-md"></span>

                        </li>
                    </NavLink>

                    <NavLink to='/projects'>
                        <li className='group relative'>
                            <div><AiOutlineFundProjectionScreen className='inline mt-[-4px] mr-1' /><span>Projects</span></div>

                            {/* Underline box */}
                            <span className="absolute mx-auto -bottom-1 left-0 w-0 h-[4px] bg-orange-400 transition-all duration-[600ms] delay-100 group-hover:w-[100%] rounded-md"></span>

                        </li>
                    </NavLink>

                    <NavLink to='/resume'>
                        <li className='group relative'>
                            <div><CgFileDocument className='inline mt-[-4px] mr-1' /><span>Resume</span></div>

                            {/* Underline box */}
                            <span className="absolute mx-auto -bottom-1 left-0 w-0 h-[4px] bg-orange-400 transition-all duration-[600ms] delay-100 group-hover:w-[100%] rounded-md"></span>

                        </li>
                    </NavLink>

                    <NavLink to='/contact'>
                        <li className='group relative'>
                            <div><RiContactsLine className='inline mt-[-4px] mr-2' /><span>Contact</span></div>

                            {/* Underline box */}
                            <span className="absolute mx-auto -bottom-1 left-0 w-0 h-[4px] bg-orange-400 transition-all duration-[600ms] delay-100 group-hover:w-[100%] rounded-md"></span>
                        </li>
                    </NavLink>
                </ul>


                {/* Hamburger */}
                <div className='md:hidden z-10 cursor-pointer' onClick={clickHandler}>
                    {
                        nav ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />
                    }
                </div>

                {/* Mobile Menu */}
                {/* className={nav ? 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] md:hidden transition-all duration-500' : 'hidden transition-all duration-500'} */}

                <ul className={`menu absolute top-0 text-4xl left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192fee] md:hidden transition-height ease-in-out duration-300 delay-75 ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

                    <NavLink to='/'><li className="py-6 text-4xl " onClick={() => setNav(false)}><AiOutlineHome className='inline mt-[-4px] mr-3' />Home</li></NavLink>

                    <NavLink to='/about'><li className="py-6 text-4xl" onClick={() => setNav(false)}><AiOutlineUser className='inline mt-[-4px] mr-3' />About</li></NavLink>

                    <NavLink to='/projects'><li className="py-6 text-4xl" onClick={() => setNav(false)}><AiOutlineFundProjectionScreen className='inline mt-[-4px] mr-3' />Projects</li></NavLink>

                    <NavLink to='/resume'><li className="py-6 text-4xl" onClick={() => setNav(false)}><CgFileDocument className='inline mt-[-4px] mr-3' />Resume</li></NavLink>

                    <NavLink to='/contact'><li className="py-6 text-4xl" onClick={() => setNav(false)}><RiContactsLine className='inline mt-[-4px] mr-4' />Contact</li></NavLink>
                </ul>

                {/* Social Icons */}
                <div className='hidden lg:flex flex-col fixed top-[31%] left-0'>

                    <ul>

                        <li className='w-[150px] h-[60px] text-[1.25rem] px-3 cursor-pointer flex justify-between items-center ml-[-95px] hover:ml-[-8px] duration-700 bg-blue-600 rounded-r-lg' >
                            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/manish-coder-pb15/" target='_blank' rel="noreferrer">
                                LinkedIn<FaLinkedin size={32} />
                            </a>
                        </li>

                        <li className='w-[150px] h-[60px] text-[1.25rem] px-3 cursor-pointer flex justify-between items-center ml-[-95px] hover:ml-[-8px] duration-700 bg-[#333333] rounded-r-lg' >
                            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Manishkumar76" target='_blank' rel="noreferrer">
                                Github<FaGithub size={32} />
                            </a>
                        </li>

                        <li className='w-[150px] h-[60px] text-[1.25rem] px-3 cursor-pointer flex justify-between items-center ml-[-95px] hover:ml-[-8px] duration-700 bg-[#72c1b0] rounded-r-lg' >
                            <a className='flex justify-between items-center w-full text-gray-300' href="mailto:mkshkaya794@gmail.com" target='_blank' rel="noreferrer">
                                Email<HiOutlineMail size={32} />
                            </a>
                        </li>

                        <li className='w-[150px] h-[60px] text-[1.25rem] px-3 cursor-pointer flex justify-between items-center ml-[-95px] hover:ml-[-8px] duration-700 bg-[#565f69] rounded-r-lg' >
                            <a className='flex justify-between items-center w-full text-gray-300' href="/resume" target='_blank' rel="noreferrer">
                                Resume<BsFillPersonLinesFill size={32} />
                            </a>
                        </li>


                    </ul>

                </div>

            </div>
        </div>


    )
}

export default Navbar