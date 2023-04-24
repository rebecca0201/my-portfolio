import React from 'react';

const trade = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[25vh] relative bg-[#5651e5]'>
        <div className='max-w-[1240px] mx-auto p-2 py-20'>
          <h2 className='text-white'>Trading Bot</h2>
          <h3 className='text-white'>Aug 2022 - Sep 2022</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 gap-8 py-8'>
        <div className='w-full md:w-2/3 mx-4 md:float-left'>
          <div className='aspect-video'>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/FZc_TCQOfcU'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
          <p className='text-[#5651e5] p-2'>
            This video showcases how the bot improves the portfolio performance from 106 to 120 within 15 seconds.
          </p>
        </div>
        <p className='p-2'>
          CAPM Trading Bot is a Python program that
          optimizes <a className='underline cursor-pointer' href='/assets/projects/Trading Setting.pdf' download>
            portfolio performance
          </a> on the FlexEMarkets platform using the Capital Asset Pricing Model.
          <br /> <br />
          CAPM Trading Bot operates in multiple markets simultaneously, continually analyzing the order 
          book to identify profitable buying and selling opportunities. Its reactive and proactive trading 
          capabilities allow traders to take advantage of these opportunities effectively. The bot also 
          dynamically adjusts pending orders in response to changes in market conditions, ensuring that 
          the portfolio remains optimized at all times.
          <br /> <br />
          CAPM Trading Bot utilizes the FMClient library to interact with the FlexEMarkets platform, but 
          dealing with the asynchronous nature of interactions was a significant challenge. This was 
          addressed by implementing a robust system that keeps track of orders sent but not yet 
          acknowledged, enabling the bot to wait for server responses.
        </p>
      </div>
    </div>
  );
};

export default trade;
