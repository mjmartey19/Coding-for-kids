import React from 'react';
import logo from "../assets/logo-white.png";

function FooterSection() {
    return(
        <div className='bg-[#000F33] flex justify-center p-10 gap-20 w-full text-white'>
            <div>
                <div src={logo} width={120} alt='k' />
                <p className='mt-4'>
                    Dates: Sept 30 - Oct 4, 2023<br/>
                    Venue: KNUST, Atonsu & Santasi<br />
                    Time: 8am-4pm (Every Saturday)<br />

                    <p className=' flex flex-row my-4'>For Inquiries, Call: 0506885899</p>
                </p>
            </div>

            <div className='p-12 flex flex-col pb-0 flex-start gap-[8px]'>
                <h1 className='text-[#12A4D9] text-[36px] not-italic font-bold leading-normal'>Quick Links</h1>
                <h2 className='text-[#12A4D9] text-[18px] not-italic leading-normal font-semibold'>Home</h2>
                <ul>
                    <li>Programs</li>
                    <li>Aboout us</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div className='p-12 flex flex-col pb-0 flex-start gap-[13px]' >
                <h1 className='text-[#12A4D9] text-[36px] not-italic font-bold leading-normal'>Follow us</h1>
                <ul>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </div>
    )
}

export default FooterSection;