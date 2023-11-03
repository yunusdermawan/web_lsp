import React from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>

        <header className='px-16 pb-20'>
            <Header />
        </header>

        <main className='px-40 bg-white min-h-screen'>
            <div className='grid grid-cols-2' id='hero'>
                <div>
                    <h5 className='text-info font-semibold font-azeret text-lg mb-4'>Tentang Digital Kreatif Solusi</h5>
                    <h1 className='text-5xl mb-4'>LEMBAGA SERTIFIKASI PROFESI</h1>
                    <p className='text-gray-500 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    <Link to='#/' className='btn rounded-full w-40 bg-[#22A75D] text-white'>Learn More</Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 mt-12 py-12 px-10 bg-[#F2F0F4]'>
                <div className=''>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl mb-8'>Skema Sertifikasi</h1>
                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    <p>ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat. ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat. ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat. ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                </div>
            </div>
        </main>

        <footer>
            <Footer />
        </footer>
    
    </>
  )
}

export default Home