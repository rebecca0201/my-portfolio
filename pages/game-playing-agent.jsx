import Image from 'next/image';
import React from 'react';
import gameImg from '../public/assets/projects/game.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gameImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Game-Playing Agent</h2>
          <h3>Apr 2022 - May 2022</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Cachex Game-Playing Agent is a Python program that excels in playing the Cachex 
            game, a variant of the Hex game that allows players to capture opponent pieces. 
          </p>
          <p>
            Cachex Game-Playing Agent's significant strengths lie in its strategic approach 
            to move exploration, which enables it to consider as many possible moves as 
            possible and make optimal decisions within the time limit. This is achieved 
            through its utilization of the Minimax algorithm with Alpha-Beta pruning that 
            enables the agent to search the game tree while discarding unnecessary branches.
          </p>
          <p>
            Additionally, Cachex Game-Playing Agent's efficiency is further improved through 
            its ability to quickly identify instant winning and losing positions and 
            strategically explore move orders. It prioritizes those moves that are most likely 
            to lead to victory, thereby making alpha-beta pruning more effective. As a result, 
            Cachex Game-Playing Agent achieves an average win rate of 85% against a variety of 
            strategies.
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
                <RiRadioButtonFill className='pr-1' /> Minimax Algorithm
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Alpha-Beta Pruning
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

export default netflix;
