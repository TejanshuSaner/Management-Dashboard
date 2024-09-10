import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { FiShoppingBag } from 'react-icons/fi';
import Sales from './ui/Sales';
import Warehouse from './ui/Warehouse';
import Leads from './ui/Leads';
import Customer from './ui/Customer';
import Status from './ui/Status';
import { ImClock } from "react-icons/im";
import { BiStats } from "react-icons/bi";


const Home = () => {
  return (
    <div className='h-screen w-screen bg-slate-300 flex flex-col items-center relative gap-3 p-4'>
      <div className='w-full md:w-[97vw] bg-white flex flex-wrap gap-3 p-2 rounded-2xl'>
        <div className='flex-1 min-w-[200px] bg-rose-200 relative text-center flex flex-col justify-center items-center p-4 rounded-xl'>
          <h3 className='text-[20px] font-bold text-black'>
            <Leads />
          </h3>
          <FaCartShopping className='absolute right-5 text-rose-700 top-3 text-[40px]' />
        </div>

        <div className='flex-1 min-w-[200px] bg-violet-300 relative text-center flex flex-col justify-center items-center p-4 rounded-xl'>
          <FiShoppingBag className='absolute right-5 text-violet-700 top-3 text-[40px]' />
          <Customer />
        </div>

        <div className='flex-1 min-w-[200px] bg-green-200 p-4 rounded-xl relative'>
        <h2 className='text-[13px] font-bold mb-3'>Shipment Statuses</h2>
        <ImClock className='absolute right-5 text-green-700 top-3 text-[35px]' />
          <Status/>
        </div>

        <div className='flex-1 min-w-[200px] bg-blue-300 p-4 rounded-xl flex justify-center items-center relative'>
        <BiStats className='absolute right-5  text-blue-700 top-2 text-[45px]' />

        <Sales  />
        </div>
      </div>

      <div className='w-full md:w-[97vw] bg-white flex p-2 rounded-2xl mt-4'>
        <Warehouse />
      </div>
    </div>
  );
};

export default Home;
