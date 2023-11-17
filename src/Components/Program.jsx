import React from 'react'
import { Link } from 'react-router-dom';
import { programs } from '../constants';


function Program() {
  const handleIndex = (index) => {
    sessionStorage.setItem("index", index);
  }
  return (
    <div className='mt-10' id='program'>
      <div className="flex-col justify-center items-center flex gap-10">
        <div className="flex-col justify-center items-center flex md:mx-20 mx-10 ">
          <div className=' md:text-6xl  sm:text-5xl text-4xl'>
            <span className="text-slate-900 font-bold">Program</span>
            <span className="text-sky-500 font-bold"> Highlights</span>
          </div>
          <div className="text-slate-900 md:text-xl sm:text-lg text-sm font-normal mt-5">
            The Coding for Kids and Teens is the first of a series of training
            programs towards Coding Mastery for Kids and Teens 2023. We aim to help kids and teens become masters in any of the technology
            and innovation fields they choose. That includes web and mobile apps, games, Ai, AR, VR, animation, cyber security, Robotics, IoT, machine learning, electric vehicles, industry 4.0. etc.
          </div>
        </div>


        <div className="md:mt-5 mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10">

         {programs.map((program, index) => {	
          return (
            <Link 
            to={`/:${program.title}`}
            key={`program-${program.index}`}
            onClick={() => handleIndex(index)}
          className="relative flex-col justify-end items-center gap-2 flex hover:shadow-card">
           <img class="w-full" src={program.image} />
           <h3 className="text-center text-white text-xl font-bold mx-5 absolute bg-black/50 py-4 px-5  w-full">
             {program.title}
           </h3>
         </Link>

          )
         })}
         
        </div>

      </div>
    </div>
  )
}

export default Program
