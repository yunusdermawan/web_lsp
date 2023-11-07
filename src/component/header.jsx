import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/LSP.png'

function Header() {
  return (
            <>

                <div className="h-32 navbar text-white fixed z-40">
                    <div className="navbar-start mt-[-3.125rem] md:ms-12">
                        <Link to="" className="btn btn-ghost normal-case text-xl"><img className='w-52' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul tabIndex={0} className="menu menu-horizontal uppercase font-semibold lg:text-xs px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/about">Regulasi</Link></li>
                            <li><Link to="/about">Skema</Link></li>
                            <li><Link to="/about">Galeri</Link></li>
                            <li><Link to="/about">Support</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end hidden">
                        <Link to="" className="btn rounded-full w-44 font-bold">Login</Link>
                    </div>
                    <div className="md:navbar-end mt-3 md:me-12">
                        <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content text-slate-700 mt-12 z-[1] p-2 text-center shadow bg-base-100 rounded-box w-[41.875rem] h-[20rem]">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/about">Regulasi</Link></li>
                            <li><Link to="/about">Skema</Link></li>
                            <li><Link to="/about">Galeri</Link></li>
                            <li><Link to="/about">Support</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>

            </>
     )
}

export default Header