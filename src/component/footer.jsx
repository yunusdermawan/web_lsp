import React from 'react'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTelegram, faInstagram, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
            <>

                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <Link to="" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal uppercase font-semibold px-1">
                            <li><Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                            <li><Link to="/about"><FontAwesomeIcon icon={faTelegram} /></Link></li>
                            <li><Link to="/about"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                            <li><Link to="/about"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                            <li><Link to="/about"><FontAwesomeIcon icon={faGithub} /></Link></li>
                            <li><Link to="/about"><FontAwesomeIcon icon={faDiscord} /></Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex flex-col items-end'>
                            <p>	&copy; 2023 | LSP DIGITAL KREATIF SOLUSI. All rights reserved.</p>
                            <span>Design by Ariq Fadhilah</span>
                        </div>
                    </div>
                </div>

            </>
     )
}

export default Footer