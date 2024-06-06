import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex bg-gray-100  w-screen h-[230px]'>
      <div className=' mx-8'>
        <h1 className='font-bold text-2xl text-center'>INTERIORO DESIGN</h1>
        <h2 className='w-[300px] mt-4 text-lg text-gray-700 text-center'>Interior Designs for your Home</h2>
        <h3 className='w-[300px] text-center mt-4 text-gray-700'>At Interioro Design, we believe in transforming spaces to elevate lives. Let us help you design the art of living well.</h3>
      </div>
      <div>
        <div className='w-[300px] h-[230px] mx-8 '>
          <h1 className='font-bold text-2xl text-center'>Explore More</h1>
          <div className='mt-4 mb-2'><a className='' href="#" class="fa fa-facebook">  Facebook</a></div>
          <div className='mb-2'><a  className='' href="#" class="fa fa-twitter">  Twitter</a></div>
          <div className='mb-2'><a className='' href="#" class="fa fa-youtube">  Youtube</a></div>
          <div className='mb-2'><a  className='' href="#" class="fa fa-instagram">  Instagram</a></div>
          <div className='mb-2'><a className='' href="#" class="fa fa-pinterest">  Pinterest</a></div>
        </div>
      </div>
      <div className='w-[300px] h-[230px] mx-8'>
      <h1 className='font-bold text-2xl text-center'>Quick Links</h1>
      <div className='my-4'><a className='font-bold text-lg hover:underline hover:opacity-60' href='/about'>About</a></div>
      <div className='my-4'><a className='font-bold text-lg hover:underline hover:opacity-60' href='/products'>Products</a></div>
      <div className='my-4'><a className='font-bold text-lg hover:underline hover:opacity-60' href='/contact'>Contact</a></div>
      </div>
      <div className='w-[300px] h-[230px] mx-8'>
      <h1 className='font-bold text-2xl text-center'>Have Any Questions</h1>
      <div className='mt-4 mb-3'>
      <a className='' href="#" class="fa fa-phone"></a><span>  +91 78140 73920</span>
      </div>
      <div className='my-3'>
      <a className='' href="#" class="fa fa-envelope"></a><span>  piyushmittal033@gmail.com</span>
      </div>
      <div className='my-3'>
      <a className='' href="#" class="fa fa-address-book"></a><span>  Street no. 1A, Last Chowk, Circular road, Abohar</span>
      </div>
      </div>
    </div>
    <div className=' my-6 mx-8'>
      <footer className="text-center">
        <p>
          Copyright &copy; 2024, Made with 💗 by <strong>Piyush</strong>
        </p>
      </footer>
    </div>
    </>
  )
}

export default Footer
