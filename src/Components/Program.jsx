import React from 'react'
import ai from './../assets/ai.png';
import web from './../assets/web.png';
import robot from './../assets/robot.png';
import game from './../assets/game.png';
import iot from './../assets/iot.png';
import animation from './../assets/animation.png';


function Program() {
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

          <div className="pb-6 bg-blue-50 shadow flex-col justify-start items-center gap-2 flex ">
            <img class="w-full" src={ai} />
            <h3 className="text-center text-slate-900 text-xl font-normal mx-5">
              Artificial Intelligence
            </h3>
            <p className="text-slate-900 text-base font-normal leading-normal mx-5 ">
              Dive into the world of AI and discover how machines can learn and make decisions like humans. In this program, kids and teens will explore the fascinating field of artificial intelligence, learn how it powers voice assistants and self-driving cars, and even create their AI-powered projects. Get ready to unlock the secrets of AI and see the future in a new light!
            </p>
          </div>

          <div className="pb-6 bg-pink-200 shadow flex-col justify-start items-center gap-2 flex">
            <img class="w-full" src={web} />
            <h3 className="text-center text-slate-900 text-xl font-normal mx-5">
              Web & Mobile App Development
            </h3>
            <p className="text-slate-900 text-base font-normal leading-normal mx-5">
              Calling all aspiring web and mobile app developers! In this
              program, young minds will embark on a creative journey into the
              world of coding. From building interactive websites to crafting
              engaging mobile apps, participants will learn the skills needed to
              bring their digital ideas to life. With guidance from expert
              mentors, they'll develop real-world coding skills and unleash
              their inner tech innovator.
            </p>
          </div>

          <div className="pb-6 bg-white shadow flex-col justify-start items-center gap-2flex">
            <img class="w-full" src={robot} />
            <h3 className="text-center text-slate-900 text-xl font-normal mx-5">
              Robotics
            </h3>
            <p className=" text-slate-900 text-base font-normal leading-normal mx-5">
              Prepare to be amazed by the world of robotics! In this program,
              kids and teens will step into the shoes of inventors and engineers
              as they design, build, and program their robots. From navigating
              obstacle courses to solving challenges, participants will gain
              hands-on experience in the exciting realm of robotics. Get ready
              to code, construct, and compete with your very own creations!
            </p>
          </div>

          <div className="pb-6 bg-sky-200 shadow flex-col justify-start items-center gap-2 flex">
            <img class="w-full" src={game} />
            <h3 className="text-center text-slate-900 text-xl font-normal mx-5">
              Game Development
            </h3>
            <p className="text-slate-900 text-base font-normal leading-normal mx-5">
              Enter the world of gaming and become a game developer
              extraordinaire! In this program, young gamers will transform into
              game designers as they learn the art and science of game
              development. From creating characters and levels to coding
              interactive gameplay, participants will craft their own video
              games from scratch. Unleash your imagination and let the games
              begin!
            </p>
          </div>

          <div className="pb-6  bg-amber-100 shadow flex-col justify-start items-center gap-2 flex">
            <img class="w-full" src={iot} />
            <h3 className="text-center text-slate-900 text-xl font-normal mx-5">
              IoT
            </h3>
            <p className="text-slate-900 text-base font-normal leading-normal mx-5">
              Join the IoT revolution and explore the interconnected world of
              smart devices! In this program, participants will learn how to
              connect everyday objects to the internet and control them
              remotely. From designing smart home projects to building
              environmental monitoring systems, students will dive into the
              exciting realm of IoT technology
            </p>
          </div>

          <div className="pb-6 bg-blue-50 shadow flex-col justify-start items-center gap-2 flex">
            <img class="w-full" src={animation} />
            <h3 className="text-center text-slate-900 text-xl font-normal mx-5">
              Animation
            </h3>
            <p className="text-slate-900 text-base font-normal leading-normal mx-5">
              Enter the world of animation and unleash your creativity! In this
              program, young artists and storytellers will learn the art of
              bringing characters and stories to life through animation. From
              classic 2D animation to cutting-edge 3D animation techniques,
              participants will create their own animated stories and
              characters.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Program
