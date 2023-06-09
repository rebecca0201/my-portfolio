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
          <div className='aspect-video'>
            <iframe
              className='w-full h-full'
              src='https://www.youtube.com/embed/DJuU73PIHRY'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
          <p className='text-[#5651e5] p-2'>
            This video demonstrates how to sign up for an account, filter recipes by tags, and add new recipes.
          </p>
        </div>
        <p className='p-2'>
          Recipe Book is a Next.js web application that simplifies recipe management for home cooks. 
          With robust authentication and authorization functionality using Firebase Authentication, 
          Recipe Book ensures user privacy and security. Users can sign up for an account using their 
          Google account or email address and access a personalized dashboard to manage their recipes 
          and profile information.
          <br /> <br />
          Recipe Book&apos;s key feature is its recipe management functionality. Users can easily add new 
          recipes to their collection, complete with photos, ingredients, and step-by-step instructions. 
          Users can edit or delete recipes at any time and organize them with custom tags, making it easy to 
          find the recipe they need.
          <br /> <br />
          Our team followed Agile development methodology and held weekly internal meetings to ensure 
          effective communication and collaboration among team members. We also had weekly stand-up 
          meetings with our supervisor to report progress and discuss any issues or roadblocks. 
          Additionally, we had monthly meetings with the client to provide updates on the project&apos;s 
          status and receive feedback. Through this process, we were able to efficiently develop Recipe 
          Book, meeting expectations and timelines.
        </p>
      </div>
    </div>
  );
};

export default recipe;
