import React from 'react';
import backgroundImage from '../assets/about.png';
function AboutSection() {
  return (
    <div className="mt-20 w-full flex justify-end"
      style={{
        backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>

      <div className="md:w-[55%] w-full bg-[#000F33D6] px-12 py-12 flex flex-col gap-4">
        <div className='flex flex-col '>
          <h1 className='text-[64px] font-bold font-poppins leading-normal text-white'>About <span className='text-sky-500'>Us</span></h1>
          <h2 className='text-xl font-normal leading-normal text-white'>
            At Mpact Lane Consult and Oyerepa FM and TV, we are dedicated to making
            a positive impact on the lives of individuals and communities through
            education and media. We believe in the transformative power of knowledge
            and information, and we strive to empower the youth and promote innovation
            for a brighter future.
          </h2>
        </div>

        <div >
          <h1 className="text-[40px] font-bold leading-normal text-[#12A4D9]">Our  Mission</h1>
          <h2 className='text-xl font-normal leading-normal text-white'>
            Our mission is to inspire, educate, and empower the next generation of leaders,
            thinkers, and creators. We aim to provide high-quality educational programs
            and media content that not only inform but also ignite curiosity and foster a
            passion for learning and personal growth.
          </h2>
        </div>


        <div>
          <h1 className='text-[40px] font-bold leading-normal text-[#12A4D9]'>What Sets Us Apart</h1>
          <h2 className='font-normal leading-normal text-white'>

            <p className='text-xl'><b>Education Excellence:</b> Our commitment to excellence in education is unwavering. We offer cutting-edge educational programs that equip young minds with the skills and knowledge needed to thrive in the modern world.
            </p>

            <p className='mt-5 text-xl'><b>Media Impact:</b> Through Oyerepa FM and TV, we reach millions with informative, entertaining, and enlightening content. We believe in the power of media to shape opinions, drive change, and connect communities.
            </p>

            <p className='mt-5 text-xl'>
              <b>Innovation and Technology: </b>We embrace innovation and technology in both education and media, ensuring that we stay at the forefront of industry trends to deliver the best experiences to our audience.
            </p>

          </h2>
        </div>
      </div>
    </div>
  )
}

export default AboutSection;