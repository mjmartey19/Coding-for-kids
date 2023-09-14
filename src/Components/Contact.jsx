import React from 'react';
import backgroundImage from "../assets/web.png";

function ContactSection() {
    return (
        <div className="my-20 md:justify-end w-full flex justify-center" id='contact'
            style={{
                backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

            <div className=' px-14 py-8'>
                <div className='border bg-white p-8 w-[465px] mx-2'>
                    <h1 className='text-[24px] font-poppins font-medium md:leading-normal text-[#000F33] text-center'>Make Your Enquires</h1>
                    <form className='px-8 pt-10'>
                        <div className='mb-4'>
                            <label htmlFor='name' lassName='lg'>Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                className='px-5 border rounded bg-[#FAFAFA] w-full py-2' />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='message' className='lg'>Message</label>
                            <textarea type='text' id='message' name='message' rows={6}  maxlength = '200'
                                className=' px-5 border rounded-none bg-[#FAFAFA] w-full' />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor='number' className='lg'>Phone no.</label>
                            <input type='number' id='number' name='phone'
                                className='border rounded bg-[#FAFAFA] w-full py-2'
                            />
                        </div>
                        <button type='submit' className=" text-white text-xl font-semibold bg-[#12A4D9] flex justify-center items-center gap-[7px] self-stretch py-3 w-full hover:bg-[#12A4D9]">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;