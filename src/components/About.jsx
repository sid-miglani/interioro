import React from 'react'

const About = () => {
  return (
    <>
    <div className='relative'>
      <img className='w-screen h-[700px] opacity-80' src="./src/images/homepageimg.jpg" alt="about-img" />
      <div className='absolute top-32 left-[270px]'>
        <h1 className='font-bold text-5xl text-white tracking-wider'>
          YOUR DREAM INTERIOR STARTS HERE
        </h1>
      </div>
    </div>
    <div className='text-center my-8'>
      <h1 className='tracking-wide text-2xl text-gray-400'>
      The Furniture Gallery's interior styling service is designed to take the stress out of furnishing your home. Because sometimes you just need an expert eye to help you put the perfect look together.
      </h1>
    </div>
    <div className='font-bold text-center text-black text-5xl tracking-wider my-6'>
      HOW IT WORKS
    </div>
    <div className='flex'>
      <div><img className='w-[450px] h-[450px] ml-10' src="./src/images/scenery-designers-work.jpg" alt="about-img" /><h1 className='my-4 ml-[220px] text-2xl font-bold tracking-wide text-gray-400'>ENGAGE</h1><p className='text-center text-lg ml-24 w-[350px]'>Book your free interior design consultation online at your preferred FG store. Bring photos of your home, room measurements and any other inspiration, into store to meet with your interior designer. Alternatively, you can book an In-Home Consultation for $399 and one of our designers will visit your home.</p></div>
      <div><img className='w-[450px] h-[450px] ml-10' src="./src/images/view-essentials-pottery-studio.jpg" alt="about-img" /><h1 className='my-4 ml-[220px] text-2xl font-bold text-gray-400 tracking-wide'>ENVISION</h1><p className='text-center ml-24 text-lg mx-6  w-[350px]'>We'll sit down and talk through your vision, budget and lifestyle, to determine how we can best meet your needs. Then we'll walk through the showroom and show you your options, helping you to select each piece, from furniture and decor to the finishing touches, step by step</p></div>
      <div><img className='w-[450px] h-[450px] ml-10' src="./src/images/cozy-lively-home-interior-design.jpg" alt="about-img" /><h1 className='my-4 ml-[220px] text-2xl font-bold text-gray-400 tracking-wide'>ENJOY</h1><p className='text-center ml-24 text-lg mx-6  w-[350px]'>Love what we come up with? We'll put your order through and take care of the rest, finishing with our renowned white glove delivery service.</p>
    </div>
    </div>
    <div className='text-center my-8'>
      <a href='/contact' className='px-28 py-4 bg-black text-white hover:opacity-85'>CONTACT US TO BOOK YOUR OWN CONSULTANT</a>
    </div>
    <div className='text-center'>
    <h1 className='tracking-wider text-3xl text-gray-500 my-4'>
      FOLLOW US ON SOCIAL MEDIA
    </h1>
    <div className='inline-block mx-4 h-7'><a className='' href="#" class="fa fa-facebook"></a></div>
    <div className='inline-block mx-4 h-7'><a  className='' href="#" class="fa fa-twitter"></a></div>
    <div className='inline-block mx-4 h-7'><a className='' href="#" class="fa fa-youtube"></a></div>
    <div className='inline-block mx-4 h-7'><a  className='' href="#" class="fa fa-instagram"></a></div>
    <div className='inline-block mx-4 h-7 mb-8'><a className='' href="#" class="fa fa-pinterest"></a></div>
  </div>
    </>
  )
}

export default About
