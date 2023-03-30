import Image from 'next/image';
import React from 'react';
import tradeImg from '../public/assets/projects/trade.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const trade = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={tradeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Trading Bot</h2>
          <h3>Aug 2022 - Sep 2022</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            CAPM Trading Bot is a Python program that optimizes portfolio performance on the FlexEMarkets 
            platform using the Capital Asset Pricing Model. 
          </p>
          <p>
            CAPM Trading Bot operates in multiple markets simultaneously, continually analyzing the order 
            book to identify profitable buying and selling opportunities. Its reactive and proactive trading 
            capabilities allow traders to take advantage of these opportunities effectively. The bot also 
            dynamically adjusts pending orders in response to changes in market conditions, ensuring that 
            the portfolio remains optimized at all times.
          </p>
          <p>
            To interact with the FlexEMarkets platform, CAPM Trading Bot utilizes the FMClient library. 
            However, dealing with the asynchronous nature of interactions was a significant challenge that 
            was addressed by implementing a robust system that keeps track of orders sent but not yet 
            acknowledged, enabling the bot to wait for server responses.
          </p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> FMClient
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NumPy
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default trade;
