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
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className=' flex items-center justify-start'>
          <input type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='search by name' className='border border-blue-800 rounded-md w-[350px] h-8 pl-2' /> <Image src='/copilot.png' alt='copilot.png' width={30} height={30} className='transform -translate-x-8'/></div>

        <div className='grid grid-cols-4 gap-x-4 pb-2 mt-2'>
          <div className='flex items-center'><p>Name</p><RiArrowDropDownLine /></div>
          <div className='flex items-center'><p>Topic</p><RiArrowDropDownLine /></div>
          <div className='flex items-center'><p>Status reason</p><RiArrowDropDownLine /></div>
          <div className='flex items-center'><p>Created on</p><FaArrowDownLong /><RiArrowDropDownLine /></div>
          
          
        </div>
        <hr/>
        {filteredLeads.map((lead, index) => (
        <div key={index}>
          <div className="grid grid-cols-4 gap-x-4 pt-2 pb-2">
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
      ))}
    
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Wilford Asher</p></div>
          <div className='flex items-center'><p className='text-sm'>Cafe A 100 for commercial use</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>4/02/2024</p><p>12:00 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Joshia Love</p></div>
          <div className='flex items-center'><p className='text-sm'>Upgrading service plan</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>3/30/2024</p><p>07:45 AM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Harrison Curtis</p></div>
          <div className='flex items-center'><p className='text-sm'>Issue with througout on Epiresso master</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>3/28/2024</p><p>3:30 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Jermaine Bernnet</p></div>
          <div className='flex items-center'><p className='text-sm'>New Roster in distribution facility</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>3/25/2024</p><p>11:05 AM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Gerald stephens</p></div>
          <div className='flex items-center'><p className='text-sm'>Concerns on current Machines</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>3/23/2024</p><p>4:50 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Hale Griffits</p></div>
          <div className='flex items-center'><p className='text-sm'>Expanding Business</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>3/23/2024</p><p>10:20 AM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Rachel Micheal</p></div>
          <div className='flex items-center'><p className='text-sm'>Addressing service concerns</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>3/19/2024</p><p>1:15 PM</p></div>
          
          
        </div>
        <hr/>
        <div className='grid grid-cols-4 gap-x-4 pt-2 pb-2'>
          <div className='flex items-center'><input type='checkbox'/><p className='text-blue-800 pl-2'>Alex Baker</p></div>
          <div className='flex items-center'><p className='text-sm'>Premium Coffee Beans</p></div>
          <div className='flex items-center'><p>New</p></div>
          <div className='flex items-center'><p>3/17/2024</p><p>8:00 AM</p></div>
          
          
        </div>
        <hr/>
      </div>
    );
  };