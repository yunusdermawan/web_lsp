import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import logosdk from '../asset/LSP.png'
import logobnsp from '../asset/logo-bnsp.png'
import { motion } from 'framer-motion';


function Header() {

    // Navbar scroll event handler
    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
            <>
                { scrolling === true ? 
                <motion.div animate={{ backgroundColor: "#fff" }} className="h-32 navbar flex items-center text-slate-400 fixed z-40">
                    <div className="navbar-start flex items-end mt-[-3.125rem] md:ms-12 lg:ms-0 2xl:px-12">
                        <div className='flex items-end 2xl:pt-4'>
                            <Link to="" className="btn btn-ghost normal-case text-xl hover:bg-transparent"><img className='w-28' src={logosdk} alt="" /></Link>
                            <Link to="" className="btn btn-ghost normal-case text-xl hover:bg-transparent"><img className='w-24' src={logobnsp} alt="" /></Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex xl:ps-[18rem] 2xl:ps-[23rem]">
                        <ul tabIndex={0} className="menu menu-horizontal uppercase font-semibold lg:text-xs 2xl:text-sm px-1">
                            <li><Link className='hover:bg-white' to="/">Beranda</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Layanan</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Jadwal</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Whatsapp</Link></li>
                            <li><Link className='hover:bg-white' to="/about">About Us</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Support</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end xl:pe-3 2xl:pe-12">
                        <motion.Link whileHover={{scale: 1.3}} to="" className="btn btn-md xl:w-[80%] 2xl:w-full 3xl:w-[80%] rounded-full bg-black text-white border-0 w-44 font-bold hover:text-black">Daftar</motion.Link>
                    </div>
                    <div className="md:navbar-end lg:hidden mt-3 md:me-12 lg:me-0">
                        <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content text-slate-700 mt-12 z-[1] p-2 text-center shadow bg-base-100 rounded-box w-[41.875rem] h-[20rem]">
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/about">Layanan</Link></li>
                            <li><Link to="/about">Jadwal</Link></li>
                            <li><Link to="/about">Whatsapp</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/about">Support</Link></li>
                        </ul>
                        </div>
                    </div>
                </motion.div>
                :
                <div className="h-32 navbar flex items-center text-white fixed z-40">
                    <div className="navbar-start flex items-end mt-[-3.125rem] md:ms-12 lg:ms-0 2xl:px-12">
                        <div className='flex items-end 2xl:pt-4'>
                            <Link to="" className="btn btn-ghost normal-case text-xl hover:bg-transparent"><img className='w-28' src={logosdk} alt="" /></Link>
                            <Link to="" className="btn btn-ghost normal-case text-xl hover:bg-transparent"><img className='w-24' src={logobnsp} alt="" /></Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex xl:ps-[18rem] 2xl:ps-[23rem]">
                        <ul tabIndex={0} className="menu menu-horizontal uppercase font-semibold lg:text-xs 2xl:text-sm px-1">
                            <li><Link className='hover:bg-white' to="/">Beranda</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Layanan</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Jadwal</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Whatsapp</Link></li>
                            <li><Link className='hover:bg-white' to="/about">About Us</Link></li>
                            <li><Link className='hover:bg-white' to="/about">Support</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end xl:pe-3 2xl:pe-12">
                        <motion.Link whileHover={{scale: 1.3, originX: -3}} to="" className="btn btn-md xl:w-[80%] 2xl:w-full 3xl:w-[80%] rounded-full bg-black text-white border-0 w-44 font-bold hover:text-black">Daftar</motion.Link>
                    </div>
                    <div className="md:navbar-end lg:hidden mt-3 md:me-12 lg:me-0">
                        <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content text-slate-700 mt-12 z-[1] p-2 text-center shadow bg-base-100 rounded-box w-[41.875rem] h-[20rem]">
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/about">Layanan</Link></li>
                            <li><Link to="/about">Jadwal</Link></li>
                            <li><Link to="/about">Whatsapp</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/about">Support</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
                }
            </>
     )
}

export default Header