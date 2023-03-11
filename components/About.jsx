import Link from 'next/link';
import React from 'react';
import { AiOutlineMail, AiFillFilePdf } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const About = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Rebecca</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Software Developer</h1>

          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='/assets/about/Resume-Rebecca.pdf' download>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillFilePdf />
              </div>
            </a>

            <a
              href='mailto:beijialai21@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>

            <a
              href='https://www.linkedin.com/in/beijia-lai/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
