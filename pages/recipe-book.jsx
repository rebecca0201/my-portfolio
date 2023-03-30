import React from 'react';

const recipe = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[25vh] relative bg-[#5651e5]'>
        <div className='max-w-[1240px] mx-auto p-2 py-20'>
          <h2 className='text-white'>Recipe Book</h2>
          <h3 className='text-white'>Aug 2022 - Oct 2022</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 gap-8 py-8'>
        <div className='w-full md:w-2/3 mx-4 md:float-left'>
          <video className='w-full p-2' src='/assets/projects/recipe.mp4' controls></video>
          <p className='text-[#5651e5] p-2'>
            This video demonstrates how to sign up for an account using email address, filter recipes 
            by tags, and add new recipes to collection using Recipe Book.
          </p>
        </div>
        <p className='p-2'>
          Recipe Book is a Next.js web application that simplifies recipe management for home cooks. 
          With robust authentication and authorization functionality using Firebase Authentication, 
          Recipe Book ensures user privacy and security. Users can sign up for an account using their 
          Google account or email address and access a personalized dashboard to manage their recipes 
          and profile information.
          <br /> <br />
          Recipe Book's key feature is its recipe management functionality. Users can easily add new 
          recipes to their collection, complete with photos, ingredients, and step-by-step instructions. 
          Recipes are stored in Cloud Firestore, and recipe images are stored in Cloud Storage. Users 
          can edit or delete recipes at any time and organize them with custom tags, making it easy to 
          find the recipe they need.
          <br /> <br />
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
    </div>
  );
};

export default recipe;
