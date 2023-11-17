import React from 'react';
import logo from "../assets/logo-white.png";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

function FooterSection() {
    const date= new Date().getFullYear()
    return (
        <div className='bg-[#000F33] flex items-center justify-center w-full px-10'>
            <div className=' py-10 flex flex-col justify-center gap-10'>
                <div className='text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-20 gap-x-20 gap-y-10'>
                    <div>
                        <img src={logo} width={100} alt='' />
                        <p className="mt-4 md:text-lg text-sm font-['Poppins']">
                            <b>Dates:</b> Sept 30 - Oct 4, 2023<br />
                            <b>Venue:</b> KNUST, Atonsu & Santasi<br />
                            <b>Time:</b> 8am-4pm (Every Saturday)<br />

                            <p><b>For Inquiries, Call:</b> 0506885899</p>
                        </p>
                    </div>

                    <div>
                        <h1 className="text-[#12A4D9] md:text-3xl text-2xl font-bold leading-normal font-['Poppins']">Quick Links</h1>
                        <ul className='text-white text-lg font-semibold w-20'>
                            <li class="hover:text-[#12A4D9]"><a href="#home">Home</a></li>
                            <li class="hover:text-[#12A4D9]"><a href="#program">Programs</a></li>
                            <li class="hover:text-[#12A4D9]"><a href="#about">About us</a></li>
                            <li class="hover:text-[#12A4D9]"><a href="#contact">Contact</a></li>
                        </ul>

                    </div>

                    <div>
                        <h1 className='text-[#12A4D9] md:text-3xl text-2xl font-bold leading-normal'>Follow us</h1>
                        <ul className='text-white text-lg font-semibold w-20'>
                            <li class="hover:text-[#12A4D9]">
                                <a href="" className='flex gap-2 items-center'>
                                    <img src={linkedIn} alt="linkedIn" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li class="hover:text-[#12A4D9]">
                                <a href="" className='flex gap-2 items-center'>
                                    <img src={instagram} alt="instagram" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li class="hover:text-[#12A4D9]">
                                <a href="" className='flex gap-2 items-center'>
                                    <img src={facebook} alt="facebook" />
                                    <span>facebook</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='md:text-lg text-sm text-white font-semibold'><span>Copyright © {date} </span><span class="text-sky-500">Mpact Lane Consult</span><span>, All Rights Reserved</span></div>

            </div>
        </div>
    )
}

export default FooterSection;