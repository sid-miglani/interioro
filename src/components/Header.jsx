import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='flex justify-between bg-gray-100'>
        <div className='flex'>
            <img className='w-[70px] h-[70px] rounded-full m-4' src='./src/images/3606664.jpg'></img>
        </div>
            <div className='mt-[40px] mr-[80px]'>
                <ul className='flex'>
                <Link to='/'><li className='mr-10 font-bold hover:text-gray-600'>Home</li></Link>
                <Link to='/products'><li className='mr-10 font-bold hover:text-gray-600'>Products</li></Link>
                <Link to='/about'><li className='mr-10 font-bold hover:text-gray-600'>About</li></Link>
                <Link to='/contact'><li className='mr-10 font-bold hover:text-gray-600'>Contact</li></Link>
                </ul>
            </div>
    </div>
    </>
  )
}

export default Header;
