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
            This video showcases how the bot significantly improves portfolio performance through automated 
            trade executions, starting with an initial portfolio performance of 106.63 and ending with a 
            portfolio performance of 120.21.
          </p>
        </div>
        <p className='p-2'>
          CAPM Trading Bot is a Python program that optimizes portfolio performance on the FlexEMarkets 
          platform using the Capital Asset Pricing Model.
          <br /> <br />
          CAPM Trading Bot operates in multiple markets simultaneously, continually analyzing the order 
          book to identify profitable buying and selling opportunities. Its reactive and proactive trading 
          capabilities allow traders to take advantage of these opportunities effectively. The bot also 
          dynamically adjusts pending orders in response to changes in market conditions, ensuring that 
          the portfolio remains optimized at all times.
          <br /> <br />
          To interact with the FlexEMarkets platform, CAPM Trading Bot utilizes the FMClient library. 
          However, dealing with the asynchronous nature of interactions was a significant challenge that 
          was addressed by implementing a robust system that keeps track of orders sent but not yet 
          acknowledged, enabling the bot to wait for server responses.
        </p>
      </div>
    </div>
  );
};

export default trade;
