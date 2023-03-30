import React from 'react';

const game = () => {
  return (
    <div className='w-full'>

      <div className='w-full h-[25vh] relative bg-[#5651e5]'>
        <div className='max-w-[1240px] mx-auto p-2 py-20'>
          <h2 className='text-white'>Game-Playing Agent</h2>
          <h3 className='text-white'>Apr 2022 - May 2022</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 gap-8 py-8'>
        <div className='w-full md:w-2/3 mx-4 float-left'>
          <video className='w-full p-2' src='/assets/projects/game.mp4' controls></video>
          <p className='text-[#5651e5] p-2'>
            This video shows the gameplay between the Cachex Game-Playing Agent playing as 
            blue, and the Monte Carlo Tree Search opponent playing as red.
          </p>
        </div>
        <p className='p-2'>
          Cachex Game-Playing Agent is a Python program that excels in playing the Cachex 
          game, a variant of the Hex game that allows players to capture opponent pieces.
          <br /> <br />
          Cachex Game-Playing Agent's significant strengths lie in its strategic approach 
          to move exploration, which enables it to consider as many possible moves as 
          possible and make optimal decisions within the time limit. This is achieved 
          through its utilization of the Minimax algorithm with Alpha-Beta pruning that 
          enables the agent to search the game tree while discarding unnecessary branches.
          <br /> <br />
          Additionally, Cachex Game-Playing Agent's efficiency is further improved through 
          its ability to quickly identify instant winning and losing positions and 
          strategically explore move orders. It prioritizes those moves that are most likely 
          to lead to victory, thereby making alpha-beta pruning more effective. As a result, 
          Cachex Game-Playing Agent achieves an average win rate of 85% against a variety of 
          strategies.
        </p>
      </div>
    </div>
  );
};

export default game;
