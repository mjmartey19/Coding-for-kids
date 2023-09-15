import React from 'react'
import package_bg from './../assets/package-bg.png';
import check from './../assets/check.svg';

function Package() {
    return (
        <div>
            {/* Package section */}
            <div className='mt-20 w-full ' style={{
                backgroundImage: `url(${package_bg})`, backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className='md:w-[55%] w-full bg-[#000F33D6] md:p-12 p-5'>
                    <h2 className="text-sky-500 md:text-4xl sm:text-2xl text-xl font-bold font-['Poppins'] mb-10">Package for all participants
                    </h2>
                    <div className='flex gap-7 mb-4 justify-start items-start'>
                        <img src={check} className="w-30"/>
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">1 tutor to 5 students</p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">Course materials</p>
                    </div>
                    <div className='flex gap-7  mb-4'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">Certificate of participation </p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm text-lg font-semibold font-['Poppins']">Community of tech savvy kids</p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">Extra coaching/mentoring to participants after the programme</p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">All participants would develop their own projects</p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">Opportunity to join the Kids and Teens Technology and Innovation Club</p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">Branded T-shirt and other souvenirs </p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">Additional support for kids to learn better </p>
                    </div>
                    <div className='flex gap-7  mb-4 justify-start items-start'>
                        <img src={check} />
                        <p className="text-white md:text-xl text-sm font-semibold font-['Poppins']">Talent and skills assessment</p>
                    </div>

                </div>
            </div>

            {/* Join Section */}
            <div className='mt-20 md:px-20 px-10 py-20 bg-[#000F33] md:mx-20 mx-5'>
                <p className="text-white md:text-2xl text-sm font-normal font-['Poppins'] md:pr-15 pr-0">
                    Join us on this journey of education, inspiration, and impact. Together, we can shape a better tomorrow.
                </p>
                <a href="http://bit.ly/coding4kidsandteens" className="inline-block mt-8 md:px-16 px-5 py-3 rounded font-semibold bg-yellow-300 shadow-md text-[#000F33] cursor-pointer text-sm uppercase transition duration-200 ease-linear hover:bg-yellow-400">
                    Register
                </a>
            </div>
        </div>
    )
}

export default Package
