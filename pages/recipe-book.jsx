import Image from 'next/image';
import React from 'react';
import recipeImg from '../public/assets/projects/recipe.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const recipe = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={recipeImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Recipe Book</h2>
          <h3>Aug 2022 - Oct 2022</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Recipe Book is a Next.js web application that simplifies recipe management for home cooks. 
            With robust authentication and authorization functionality using Firebase Authentication, 
            Recipe Book ensures user privacy and security. Users can sign up for an account using their 
            Google account or email address and access a personalized dashboard to manage their recipes 
            and profile information.
          </p>
          <p>
            Recipe Book's key feature is its recipe management functionality. Users can easily add new 
            recipes to their collection, complete with photos, ingredients, and step-by-step instructions. 
            Recipes are stored in Cloud Firestore, and recipe images are stored in Cloud Storage. Users 
            can edit or delete recipes at any time and organize them with custom tags, making it easy to 
            find the recipe they need.
          </p>
          <p>
            Our team followed Agile development methodology and held weekly internal meetings to ensure 
            effective communication and collaboration among team members. We also had weekly stand-up 
            meetings with our supervisor to report progress and discuss any issues or roadblocks. 
            Additionally, we had monthly meetings with the client to provide updates on the project's 
            status and receive feedback. Through this process, we were able to efficiently develop Recipe 
            Book, meeting expectations and timelines.
          </p>
          <a
            href='https://github.com/haozoo/recipe-book'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://re-cipe.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
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

export default recipe;
