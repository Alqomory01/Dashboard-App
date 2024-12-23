import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import Image from 'next/image'
import { MdOutlineEdit } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsFillAwardFill } from "react-icons/bs";
import { GiBrainTentacle } from "react-icons/gi";
import { MdConnectedTv } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

interface LeadsProps {
    isOpen: boolean;
    onClose: () => void;
  }

export const Leads: React.FC<LeadsProps>  = ({ isOpen, onClose }) => {
    if(!isOpen) return null;
  return (
    <div className=' bg-white text-black z-10 w-[960px] mx-auto p-3 border border-blue-800 rounded-lg absolute top-7 right-36'><div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'><FaCameraRetro /><p>Engage with Jane Reyes</p></div><button onClick={onClose}><IoClose /></button> 
        </div>
        <div className='flex items-center space-y-2 mt-3 border shadow-sm  rounded-md shadow-black'>
          <div><Image src='/jane.jpeg' alt='jane' width={30} height={30} style={{borderRadius:'50%'}}/></div><div><p className='font-bold'>Jane Reyes</p><p>COO NorthWind Traders</p></div>
        </div>

        <div style={{backgroundColor: '#E8EFFF'}} className='flex items-center justify-between mt-2 p-2  text-blue-950  border shadow-sm  rounded-md shadow-black'>
          <div className='flex items-center'><Image src='/jane.jpeg' alt='jane' width={30} height={30} style={{borderRadius:'50%'}}/><p className='font-bold text-sm'>Jane may be interested in expressing espiresso machines for her in-stone coffe shops</p></div><div className='flex items-center space-x-2'> <span className='flex items-center border rounded-md bg-white px-2 space-x-2'> <span ><MdOutlineEdit /></span><p className='bg-white'>  Edit</p></span><span className=' flex items-center border rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 px-2'> <span><IoSend /></span> <p>Approve and send</p></span></div>
        </div>

        <div style={{backgroundColor: 'white'}} className='flex items-center justify-between mt-2 p-2  text-blue-950  border shadow-sm  rounded-md shadow-black'>
          <div className='flex items-center font-bold text-sm space-x-3 '><p >Engage</p> <p className='hover: cursor-pointer underline-offset-2 decoration-blue-900'>Search</p></div>
        </div>
        <div className='border rounded-md my-2 px-3 py-2'>
        <div className='border rounded-md m-2 px-3 py-2' style={{backgroundColor: '#E8EFFF'}}>
            <p>Why i picked this lead</p>
            <ul>
                <li>Jane is a <strong>key decision maker</strong> and was browsing `<strong>expresso machines</strong>` on first coffee website</li>
                <li>Multiple people at her company have report `slowness` during service requests</li>
                <li>Northwind Traders  currently are <strong>$200m in revenure</strong> from their in store coffee</li>
            </ul>
            <div className='flex items-center space-x-3'><div className=' flex items-center px-3 py-2 space-x-2 bg-white border rounded-md'><IoShieldCheckmarkOutline className='size-7' /> <div><p>Discussion Maker</p> <p className='text-blue-800'>Yes</p></div></div>
            <div className=' flex items-center px-3 py-2 space-x-2 bg-white border rounded-md'><BsFillAwardFill  className='size-7 text-orange-700' /> <div><p>Potential deal value</p> <p className='text-blue-800'>$1M</p></div></div>
            <div className='flex items-center px-3 py-2 space-x-2 bg-white border rounded-md'><GiBrainTentacle className='size-7' /> <div><p>Intent</p> <p className='text-blue-800'>High</p></div></div></div>
        </div>
        <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-1'><div style={{backgroundColor: '#e9e9e9', padding:'5px'}}><MdConnectedTv /></div><div  className='flex items center space-x-1'><p style={{backgroundColor: '#e9e9e9', borderRadius: '4px', padding:'5px'}}>1 </p><span className='flex items-center' style={{backgroundColor: '#e9e9e9', borderRadius: '4px', padding:'5px'}}> <span><BiWorld /></span><p > D 365 sales</p></span><p style={{backgroundColor: '#e9e9e9', borderRadius: '4px', padding:'5px'}}>-2</p></div></div> <div style={{backgroundColor: '#e9e9e9', borderRadius: '4px', padding:'5px'}}  className='flex items-center space-x-3'><p style={{backgroundColor: '#e9e9e9', borderRadius: '4px', padding:'5px'}}>Ai Generated content may be incorrect</p> <span><FaRegThumbsUp /></span><FaThumbsDown /><span></span></div>
        </div>
        <div className='border rounded-md my-2 px-3 py-2' >
            <div className='flex items-center justify-between'><p>About Jane </p><span><RiArrowDropDownLine /></span></div>
            <p>Jane Reyes the chief operetaing officer of Northwind Traders is a dynamic leader with a proven track record in optimizing operations and enhancing, customer experience under her guidance Northwind traders in Northwind `Northwind traders in-store coffee shop have flourished becominjg a hallmark of quality and innovation jane&apos;s commitment to excellence makes her an ideal partner for first coffee she is always seeking top-tier equipment to elevate her cofee shops` offering consistent high quality service </p></div>
        </div>
        <div className='flex items-center justify-between'><div className='flex items-center space-x-3'><p className='border-r-4 pr-3'>Showing one of all</p> <p className='text-blue-900'>Show all</p></div> <div className='flex items-center space-x-1 justify-center mt-2'>
        <div className='bg-blue-900 w-[20px] h-[4px] rounded-full'></div>
        <div className='bg-blue-900 w-[5px] h-[4px] rounded-full'></div>
        <div className='bg-blue-900 w-[5px] h-[4px] rounded-full'></div>
        <div className='bg-blue-900 w-[5px] h-[4px] rounded-full'></div>
      </div> <div className='flex items-center space-x-4'><span><FaRegThumbsUp /></span><FaThumbsDown /></div> </div>
        </div>
  )
}
