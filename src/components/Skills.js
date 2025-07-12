import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import next from "../assets/nextJs.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import tailwindcss from "../assets/tailwind.png";
import git from "../assets/github.png";
import {
  SiMysql,
  SiCplusplus,
  SiBootstrap,
  SiDart,
  SiFlutter
} from "react-icons/si";

function Skills() {
  return (
    <div className="max-w-[1000px] mx-auto mt-5  lg:pl-16">
      {/* Container */}
      <div className="mx-auto p-4 flex flex-col justify-center w-full h-full">
        <p className="inline text-4xl font-bold border-b-4 border-orange-600 ">
          Skill Set
        </p>
        <p className="py-4 text-[18px]">
          These are the technologies I have worked with
        </p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center py-8 px-4">
        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <SiCplusplus className="mt-2 mx-auto text-blue-200" size={80} />
          <p className="my-4">C / C++</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg">
          <img src={html} alt="html" className="w-20 mt-2 mx-auto" />
          <p className="my-4">HTML</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <img src={css} alt="css" className="w-20 mt-2 mx-auto" />
          <p className="my-4">CSS</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg">
          <img src={js} alt="js" className="w-20 mt-2 mx-auto" />
          <p className="my-4">Javascript</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <img src={tailwindcss} alt="tailwind" className="w-20 mt-2 mx-auto" />
          <p className="my-4">Tailwind CSS</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <SiBootstrap className="mt-2 mx-auto text-purple-500" size={80} />
          <p className="my-4">Bootstrap</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg">
          <img src={react} alt="react" className="w-20 mt-2 mx-auto" />
          <p className="my-4">ReactJS</p>
        </div>
        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg">
          <img src={next} alt="react" className="w-20 mt-2 mx-auto" />
          <p className="my-4">NextJS</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <SiDart className="mt-2 mx-auto text-purple-400" size={80} />
          <p className="my-4">Dart</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <SiFlutter className="mt-2 mx-auto text-red-500" size={80} />
          <p className="my-4">Flutter</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <img src={node} alt="node" className="w-20 mt-2 mx-auto" />
          <p className="my-4">Node JS</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-[#6fc2b0] hover:shadow-lg">
          <img src={mongo} alt="mongo" className="w-20 mt-2 mx-auto" />
          <p className="my-4">MongoDB</p>
        </div>

        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <SiMysql className="mt-2 mx-auto text-blue-300" size={80} />
          <p className="my-4">MySql</p>
        </div>
      
        <div className="shadow-md shadow-[#d5e0eb] hover:scale-110 duration-500 hover:shadow-orange-400 hover:shadow-lg">
          <img src={git} alt="git" className="w-20 mt-2 mx-auto" />
          <p className="my-4">Git & Github</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
