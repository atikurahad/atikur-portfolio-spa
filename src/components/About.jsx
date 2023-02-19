import React from 'react';
import DevImg from '../assets/atik.jpeg'

const About = () => {
  return ( <>
  <div>
 <h1 className='text-center text-yellow-500 text-6xl font-bold '> About Me</h1>
 <div className='bg-white h-[35rem] grid grid-cols-2 justify-center items-center'>
  <div className=''>
      <img className='h-[30rem] w-full' src={DevImg} alt="" />
  </div>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates eius, temporibus recusandae dignissimos adipisci unde sint ipsam exercitationem non delectus alias, molestias aperiam eaque voluptatum iure. Pariatur recusandae, laborum fugit debitis maiores ipsum esse culpa, architecto ut dolor, totam rem in impedit! Temporibus odio quos distinctio vitae nemo quaerat.</p>
  </div>
 </div>
  </div>
  </>

  );
};

export default About;
