"use client"
import React from 'react'
import { FcSalesPerformance } from "react-icons/fc";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { TbActivityHeartbeat } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { SiGoogleadsense } from "react-icons/si";
import { TbCropPortrait } from "react-icons/tb";
import { MdSupervisorAccount } from "react-icons/md";
import { Leads } from './leads';
import { useState } from 'react'

// import {useState} from "react"

export const Mysidebar = () => {
  
//     const [active, setActive] = useState("Home");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOpenOverlay = () => setIsOverlayOpen(true)
  const handleCloseOverlay = () => setIsOverlayOpen(false)

  return (
    <div className="  md:w-1/6 bg-gray-800 text-white flex flex-col">
      <h1 className="p-4 text-lg font-bold"><MdMenu /></h1>
      <nav className="flex-grow"> 
          <ul className="flex flex-col space-y-2 p-4 list-none">
            <li className="font-bold hover:bg-gray-700 pb-2 rounded">
              <a href="#" className="block">Home</a>
            </li>
            <li className="inline-flex items-center justify-between space-x-8  hover:bg-gray-700 pb-2 rounded">
              <a href="#" className="block font-bold">Recent</a>
              <span><RiArrowDropDownLine  className='size-7'/></span>
            </li>
            <li className="inline-flex items-center justify-between space-x-8 hover:bg-gray-700 pb-2 rounded">
              <a href="#" className="block font-bold">Pinned</a>
              <span><RiArrowDropDownLine  className='size-7'/></span>
            </li>
            <li className=" pb-2">
              <a href="#" className="block font-bold hover:bg-gray-700 rounded">My Work</a>
              <ul className='flex flex-col space-y-2'>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><FcSalesPerformance /></span><p>Sales Accelerator</p>
                </li>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><RiDashboardHorizontalFill /></span><p>Dashboards</p>
                </li>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><TbActivityHeartbeat /></span><p>Activities</p>
                </li>
              </ul>
            </li>
            <li className=" pb-2 ">
              <a href="#" className="block font-bold  hover:bg-gray-700 rounded">Customers</a>
              <ul className='flex flex-col space-y-2'>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><MdOutlineManageAccounts /></span><p>Accounts</p>
                </li>
                <li className='inline-flex items-center space-x-2 hover:bg-gray-700 rounded'>
                    <span><IoIosContacts /></span><p>Contacts</p>
                </li>
              </ul>

            </li>
            <li className=" pb-2 ">
              <a href="#" className="block font-bold  hover:bg-gray-700 rounded">Sales</a>
              <ul className='flex flex-col space-y-2'>
                <li ><button className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'  onClick={handleOpenOverlay}>
                    <span><SiGoogleadsense /></span><p>Leads</p></button>
                </li>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><TbCropPortrait /></span><p>Opportunities</p>
                </li>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><MdSupervisorAccount /></span><p>Competitors</p>
                </li>
              </ul>

            </li>
            <li className=" pb-2">
              <a href="#" className="block font-bold  hover:bg-gray-700 rounded">Marketing</a>
              <ul className='flex flex-col space-y-2'>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><SiGoogleadsense /></span><p>Marketing Lists</p>
                </li>
                <li className='inline-flex items-center space-x-2  hover:bg-gray-700 rounded'>
                    <span><TbCropPortrait /></span><p>Quick Campaigns</p>
                </li>
                
              </ul>

            </li>
            <li className="hover:bg-gray-700 pb-2 rounded">
              <a href="#" className="block font-bold">Agent Skill</a>
            </li>
          </ul>
        </nav>
        <Leads isOpen={isOverlayOpen} onClose={handleCloseOverlay}/>
    </div>
  );
};

  

