"use client"
import Image from 'next/image'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowDownLong } from "react-icons/fa6";
import { useState } from 'react';
export default function Maincontent() {

  const [searchQuery, setSearchQuery] = useState("");

  const leads = [
    { name: "Wilford Asher", topic: "Cafe A 100 for commercial use", status: "New", date: "4/02/2024", time: "12:00 PM" },
    { name: "Joshia Love", topic: "Upgrading service plan", status: "New", date: "3/30/2024", time: "07:45 AM" },
    { name: "Harrison Curtis", topic: "Issue with throughput on Epiresso master", status: "New", date: "3/28/2024", time: "3:30 PM" },
    { name: "Jermaine Bernnet", topic: "New Roster in distribution facility", status: "New", date: "3/25/2024", time: "11:05 AM" },
    { name: "Gerald Stephens", topic: "Concerns on current Machines", status: "New", date: "3/23/2024", time: "4:50 PM" },
    { name: "Hale Griffits", topic: "Expanding Business", status: "New", date: "3/23/2024", time: "10:20 AM" },
    { name: "Rachel Micheal", topic: "Addressing service concerns", status: "New", date: "3/19/2024", time: "1:15 PM" },
    { name: "Alex Baker", topic: "Premium Coffee Beans", status: "New", date: "3/17/2024", time: "8:00 AM" },
  ];

  const filteredLeads = leads.filter((lead) =>
  lead.name.toLowerCase().includes(searchQuery.toLowerCase())
);

    return (
        <div className=" w-[250px] sm:w-[300px] sm:p-2 text-xs md:max-md p-6 md:text-lg bg-white rounded-lg shadow-md">
          <div className='flex items-center justify-start'>
          <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='search by name' className=' sm:w-[200px] border border-blue-800 rounded-md md:w-[350px] h-8 pl-2' /> <Image src='/copilot.png' alt='copilot.png' width={30} height={30} className='transform -translate-x-8'/></div>

        <div className='grid grid-cols-4 gap-x-4 pb-2 mt-2'>
          <div className='flex items-center'><p>Name</p><RiArrowDropDownLine /></div>
          <div className='flex items-center'><p>Topic</p><RiArrowDropDownLine /></div>
          <div className='flex items-center'><p>Status reason</p><RiArrowDropDownLine /></div>
          <div className='flex items-center'><p>Created on</p><FaArrowDownLong /><RiArrowDropDownLine /></div>
          
          
        </div>
        <hr/>
        {/* {filteredLeads.map((lead, index) => (
        <div key={index}>
          <div className="grid grid-cols-4 gap-x-4 sm:gap-y-2 pt-2 pb-2">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="text-blue-800 pl-2">{lead.name}</p>
            </div>
            <div className="flex items-center">
              <p className="text-sm">{lead.topic}</p>
            </div>
            <div className="flex items-center">
              <p>{lead.status}</p>
            </div>
            <div className="flex items-center">
              <p>{lead.date}</p>
              <p className="pl-2">{lead.time}</p>
            </div>
          </div>
          <hr />
        </div>
      ))} */}
    
        <div className='grid grid-cols-4 sm:gap-y-2 gap-x-4  pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 sm:pl-1 text-blue-800  md:pl-2'>Wilford Asher</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>Cafe A 100 for commercial use</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>4/02/2024</p><p>12:00 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 space-x-2 gap-y-3 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 sm:pl-1 text-blue-800 md:pl-2'>Joshia Love</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>Upgrading service plan</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>3/30/2024</p><p>07:45 AM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 sm:pl-1 text-blue-800 md:pl-2'>Haris Curtis</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>Issue with througout on Epiresso master</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>3/28/2024</p><p>3:30 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 sm:pl-1 text-blue-800 md:pl-2'>Jerman Bernet</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>New Roster distribution facility</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>3/25/2024</p><p>11:05 AM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 text-xs sm:pl-1 text-blue-800 md:pl-2'>Gerald step</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>Concerns current Machines</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>3/23/2024</p><p>4:50 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 sm:pl-1 text-blue-800 md:pl-2'>Hale Griffits</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>Expanding Business</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>3/23/2024</p><p>10:20 AM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 sm:pl-1 text-blue-800 md:pl-2'>Rachel Micheal</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>Addressing service concerns</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>3/19/2024</p><p>1:15 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='pl-1 sm:pl-1 text-blue-800 md:pl-2'>Alex Baker</p></div>
          <div className='flex items-center'><p className='text-xs pl-1'>Premium Coffee Beans</p></div>
          <div className='flex items-center'><p className='pl-1'>New</p></div>
          <div className='flex items-center'><p>3/17/2024</p><p>8:00 AM</p></div>
          
          
        </div>
        <hr/>
      </div>
    );
  };