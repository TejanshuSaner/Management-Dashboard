import React from 'react'
import  './css/navabr.css';
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='w-full justify-between h-[8vh] bg-blue-600 flex p-3 text-center  '>
      <img className='font-extrabold text-black ' src={Logo} alt="" />
   
   <h2 className='headline text-2xl font-semibold'>Management Dashboard</h2>
   <h2 className='credit text-2xl font-bold' >Tejaanshu</h2>
    </div>
  )
}

export default Navbar
