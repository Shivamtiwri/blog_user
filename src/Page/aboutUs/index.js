// src/AboutUs.js
import React from 'react';
import Header from '../Header';


const AboutUs = () => {
  return (
    <div className=" flex flex-col lg:px-32 px-10 bg-white">
      <Header/>
      <header className="w-full flex flex-col items-center  bg-white rounded-md py-1 px-5 my-5">
        <h1 className='font-bold text-red-700 text-3xl'>About Us</h1>
        <p className='text-red-500'>We are a community of music lovers, creators, and performers, dedicated to spreading the joy of music!</p>
      </header>
      <section className="our-mission">
        <h2 className='text-red-700 font-bold text-2xl'>Our Mission</h2>
        <p className='text-red-500 text-xl my-5'>
          We believe in the power of music to bring people together, break barriers, and create lasting memories. 
          Our mission is to provide a platform where artists, fans, and music lovers can connect, explore, and share their passion for music.
        </p>
      </section>
      <section className="my-5">
        <h2 className='font-bold text-red-700'>Our Team</h2>
        <div className="gap-5 flex flex-col">
         
          <h3 className='font-bold text-red-700'>admin</h3>
          <p className=' text-red-700'>Founder & CEO - A lover of classic rock and modern indie, John has been in the music industry for over 10 years.</p>
        </div>
        
      </section>
      <footer className="flex items-center justify-center text-red-700 font-bold">
        <p>&copy; 2025 Music Lovers Collective</p>
      </footer>
    </div>
  );
};

export default AboutUs;
