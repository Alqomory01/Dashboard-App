import React from 'react'
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineViewTimeline } from "react-icons/md";

export const Insightspanel = () => {
  return (
    <div className="sm:w-[300px] sm:p-4 m-2 z-0   md:w-[1200px] p-6 bg-white  text-black border border-blue-900 rounded-lg shadow-lg shadow-black">
      <h2 className="text-lg font-bold mb-2">Insights</h2>
      <div className='flex items-center font-bold'>
      <Image src='/copilot.png' alt='copilot.png' width={30} height={30}/><p className="">Hi Mona, you’ve achieved <span className='text-blue-900'>68%</span> of your goal for this quarter!</p>
      <div className="w-[650px] h-3 bg-white flex overflow-hidden ml-3 rounded-full">
        <div className=' w-[150px] h-3  bg-green-700'></div>
        <div className=' w-[80px] h-3 bg-blue-700'></div>
        <div className=' w-[80px] h-3 bg-purple-700'></div>
        <div className=' w-[80px] h-3 bg-yellow-700'></div>
        <div className=' w-[260px] h-3 bg-gray-300'></div>
      </div>
      <div><span><RiArrowDropDownLine  className='size-7'/></span></div>

       </div>
       <p className='m-3'>Copilot has pinpointed 20key leads that shows strong purchase intent and are actively engaging. These leads need your focus</p>
       <div className='grid gap-x-2 grid-cols-3 '>
      <div className='border border-md shadow-md px-2 rounded-md'>
        <div className='flex items-center space-y-2'>
          <div><Image src='/jane.jpeg' alt='jane' width={30} height={30} style={{borderRadius:'50%'}}/></div><div><p className='font-bold'>Jane Reyes</p><p>COO NorthWind Traders</p></div>
        </div>
        <div className='bg-slate-200 border rounded-md p-2 mb-2'>
          <div className='flex items-center space-x-2 border text-black rounded-md'> <span><MdOutlineAttachEmail /></span> <p>Engage with Jane Reyes</p></div>
          <p>Jane may be interested in upgrading espresso machine for in store coffee shops.</p>

        </div>
        <p>Expand Business High Buying Intent</p>
      </div>
      <div className='border relative border-md shadow-md px-2 rounded-md'>
        <div className='flex items-center space-y-2'>
          <div><Image src='/Allan.jpeg' alt='Allan' width={30} height={30} style={{borderRadius:'50%'}}/></div><div><p className='font-bold'>Allan Murger</p><p className='text-sm'>Head of Real Estate Development Contoso Coffee</p></div>
        </div>
        <div className='bg-slate-200 border rounded-md p-2 mb-2'>
          <div className='flex items-center space-x-2 border text-black rounded-md'> <span><MdOutlineViewTimeline /></span> <p>Engage with Allan Murger</p></div>
          <p>Allan may be interested in upgrading espresso machine for instore coffee shops.</p>

        </div>
        <p>Expand Business High Buying Intent</p>
        <IoIosArrowDroprightCircle className='transform absolute translate-x-[365px] -translate-y-[100px] size-6' />
        
      </div>
      <div className=' grid grid-rows-2 '>
        <div className='border border-md shadow-md px-2 rounded-md'>
        <div className='flex items-center space-y-2 '>
          <div><Image src='/Allan.jpeg' alt='Allan' width={30} height={30} style={{borderRadius:'50%'}}/></div><div><p className='font-bold'>Cafe A100 for Woodland Bank</p><p>Woodland Bank $280,000 8 days to close</p></div>
          </div>
          <div className='flex items-center space-x-2 border text-black bg-slate-200 rounded-md p-2 mb-2 '> <span><MdOutlineAttachEmail /></span> <p>Review draft and reply to Chris Naido</p></div>
        </div>
        
        <div className='border border-md shadow-md px-2 rounded-md'>
        <div className='flex items-center space-y-2 '>
          <div><Image src='/Fabrikam.gif' alt='Fabrikam' width={30} height={30} style={{borderRadius:'50%'}}/></div><div><p className='font-bold'>Partnership Opportunity for Fabrikam</p><p>Fabrikam $5,000 000 5 days to close</p></div>
          </div>
          <div className='flex items-center space-x-2 border text-black bg-slate-200 rounded-md p-2 mb-2'><span><MdOutlineAttachEmail /></span> <p>Prepair me for Fabrikam&apos;s key stakeholder meeting</p></div>
        </div>
        
        <p className='text-blue-950'>Show all key activities</p>
      </div>

       </div>
       {/* <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
        View Details
      </button> */}
      <div className='flex items-center space-x-1 justify-center mt-2'>
        <div className='bg-blue-900 w-[20px] h-[4px] rounded-full'></div>
        <div className='bg-blue-900 w-[5px] h-[4px] rounded-full'></div>
        <div className='bg-blue-900 w-[5px] h-[4px] rounded-full'></div>
        <div className='bg-blue-900 w-[5px] h-[4px] rounded-full'></div>
      </div>
    </div>
  );
};
