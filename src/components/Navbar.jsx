import React from 'react'
import  './css/navabr.css';
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='w-full justify-between h-[10vh] bg-blue-600 flex p-4 text-center  '>
      <h2 className='credit text-2xl font-bold' >Tejanshu</h2>
   
   <h2 className='headline text-2xl font-semibold'>Management Dashboard</h2>
  <button className='bg-white p-1 border-none rounded-lg font-bold text-center'>Download</button>
    </div>
  )
}

export default Navbar
