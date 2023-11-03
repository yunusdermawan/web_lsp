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
                    <p className='text-gray-400 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    <Link to='#/' className='btn rounded-full w-40 bg-[#22A75D] text-white'>Learn More</Link>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 mt-12 py-12 px-10 bg-[#F2F0F4] rounded-3xl'>
                <div className=''>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1 className='text-4xl mb-8'>Skema Sertifikasi</h1>
                    <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    <p className='text-gray-400'>ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat. ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat. ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat. ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                </div>
            </div>
            <div className='mt-52'>
                <div className='flex justify-center uppercase text-4xl'><h1>Skema LSP P1 digital kreatif solusi</h1></div>
                <div className='mt-12 py-12 px-10 bg-[#F2F0F4] w-full font-sans text-xl font-semibold text-gray-500'>
                    <div className='flex mb-4'>
                        <span className='w-16'>1</span>
                        <span className='w-[650px]'>Ahli Fluida Pengeboran Migas dan Panas Bumi</span>
                        <div><ul className='list-disc uppercase'><li>Teknik Perminyakan</li></ul></div>
                    </div>
                    <div className='flex border-t-4 mb-4'>
                        <span className='w-16 mt-4'>2</span>
                        <span className='w-[650px] mt-4'>Ahli Keselamatan dan Kesehatan Kerja</span>
                        <div className='mt-4'>
                            <ul className='list-disc uppercase'>
                                <li className='mb-2'>Teknik Lingkungan</li>
                                <li className='mb-2'>Teknik Kimia</li>
                                <li className='mb-2'>Teknik Industri</li>
                                <li className='mb-2'>Teknik Perminyakan</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex border-t-4 mb-4'>
                        <span className='w-16 mt-4'>3</span>
                        <span className='w-[650px] mt-4'>Analisis Kemananan Siber</span>
                        <div className='mt-4'>
                            <ul className='list-disc uppercase'>
                                <li>Informatika</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex border-t-4 mb-4'>
                        <span className='w-16 mt-4'>4</span>
                        <span className='w-[650px] mt-4'>Asisten Produser Televisi</span>
                        <div className='mt-4'>
                            <ul className='list-disc uppercase'>
                                <li>Ilmu Komunikasi</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex border-t-4 mb-4'>
                        <span className='w-16 mt-4'>5</span>
                        <span className='w-[650px] mt-4'>Desainer Grafis Madya</span>
                        <div className='mt-4'>
                            <ul className='list-disc uppercase'>
                                <li>Ilmu Komunikasi</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <span>Lihat: </span>
                    <span className='font-bold'>23</span>
                    <span><Link to='#'> skema lainya...</Link></span>
                </div>
            </div>
            <div className='mt-52'>
                <div className='flex justify-center uppercase'>
                    <div className='flex text-4xl'><h1 className='me-3 text-[#FF7F00]'>Persyaratan</h1><h1>Umum</h1></div>
                </div>
                <div className='mt-10'>
                    <ul className='list-decimal'>
                        <li className='mb-2'>Form APL 01 dan APL 02 tidak perlu diprint , Save as menjadi PDF.</li>
                        <li className='mb-2'>Tanda tangan asesi menggunakan digital.</li>
                        <li className='mb-2'>Perhatikan pada Form APL 02, arti kode K = Kompeten dan BK = Belum Kompeten.</li>
                        <li className='mb-2'>Dokumen yang digunakan sebagai persyaratan pendaftaran, usahakan sudah terdapat tanda tangan pengesahan dari pihak bersangkutan, seperti KHS, Sertifikat,dll.</li>
                    </ul>
                </div>
            </div>
            <div>
                
            </div>
            
        </main>

        <footer>
            <Footer />
        </footer>
    
    </>
  )
}

export default Home