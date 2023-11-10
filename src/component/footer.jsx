import React from 'react'
import { Link } from 'react-router-dom'
import { faTwitter, faTelegram, faInstagram, faLinkedinIn, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../asset/LSP.png'

function Footer() {
  return (
            <>

                <div className="navbar text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <Link to="" className="btn btn-ghost normal-case text-xl"><img className='w-52' src={logo} alt="" /></Link>
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
                        <div className='flex flex-col items-end text-right text-[0.6rem]'>
                            <p>	&copy; 2023 | LSP DIGITAL KREATIF SOLUSI. All rights reserved.</p>
                            <span>Design by Ariq Fadhilah</span>
                        </div>
                    </div>
                </div>

            </>
     )
}

export default Footer