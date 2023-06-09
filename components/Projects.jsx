import React from 'react';
import recipeImg from '../public/assets/projects/recipe.png';
import tradeImg from '../public/assets/projects/trade.png';
import gameImg from '../public/assets/projects/game.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Recipe Book'
            backgroundImg={recipeImg}
            projectUrl='/recipe-book'
          />
          <ProjectItem
            title='Trading Bot'
            backgroundImg={tradeImg}
            projectUrl='/trading-bot'
          />
          <ProjectItem
            title='Game-Playing Agent'
            backgroundImg={gameImg}
            projectUrl='/game-playing-agent'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
