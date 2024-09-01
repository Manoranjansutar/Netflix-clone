import React from 'react'
import logo from './../assets/Netflix_Logo_PMS.png';
import { Link } from 'react-router-dom';

const Header = ({page}) => {
    
  return (
    <div className='flex justify-between px-[7vw] py-1 items-center'>
      <img src={logo} alt="" className='w-48'/>
      {
        page === 'login' ? "" :  <div>
        <Link to='/login'><button className='bg-[--primary-color] text-white rounded-md px-4 py-[5px]' >Sign In</button></Link>
      </div>
      }
     
    </div>
  )
}

export default Header
