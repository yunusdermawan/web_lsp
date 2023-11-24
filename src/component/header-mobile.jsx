import React from 'react'
import profile from '../asset/profile.jpg'

function HeaderMobile() {

    // Mobile navbar

  return (
            <>
                <div className="navbar fixed z-40 bg-base-100">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                    <div className="flex-1">
                    </div>
                    <div className="flex-none hidden">
                        <button className="btn btn-square btn-ghost">
                        <img className="inline-block w-8 h-8 rounded-full bg-cover stroke-current" src={profile}></img>
                        </button>
                    </div>
                </div>
            </>
     )
}

export default HeaderMobile