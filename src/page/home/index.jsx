import React from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import { Link } from 'react-router-dom'
import reg_section1 from '../../asset/reg_section1.png'
import reg_arr1 from '../../asset/reg_arr1.png'
import reg_arr2 from '../../asset/reg_arr2.png'
import reg_section2 from '../../asset/reg_section2.png'
import reg_section3 from '../../asset/reg_section3.png'
import reg_section4 from '../../asset/reg_section4.png'
import proc_section1 from '../../asset/proc_section1.png'
import proc_section2 from '../../asset/proc_section2.png'
import law_section1 from '../../asset/law_section1.png'
import law_section2 from '../../asset/law_section2.png'
import law_section3 from '../../asset/law_section3.png'
import background from '../../asset/Home.png'
import under_hero from '../../asset/under_hero1.png'
import hero from '../../asset/hero_section.png'


function Home() {
  return (
    <div style={{backgroundImage: `url(${background})`, height: '100%'}} className='bg-no-repeat lg:bg-contain lg:overflow-hidden'>

        <header>
            <div className='lg:pb-16'>
                <Header />
            </div>
            <div className='lg:mt-28'></div>
        </header>

        <main className='lg:px-24 min-h-screen'>
            <div className='grid grid-cols-2' id='hero'>
                <div className='lg:w-80'>
                    <h5 className='text-info font-semibold font-azeret lg:text-xs lg:mb-3'>Tentang Digital Kreatif Solusi</h5>
                    <h1 className='lg:text-[2rem] lg:mb-4 lg:leading-7 font-medium'>LEMBAGA SERTIFIKASI PROFESI</h1>
                    <p className='text-gray-400 lg:text-[0.6rem] lg:mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    <Link to='#/' className='btn lg:btn-sm rounded-full lg:w-28 bg-[#22A75D] text-white lg:text-xs'>Learn More</Link>
                </div>
                <div>
                    <div className='relative'>
                        <img src={law_section2} className='absolute -scale-x-100 2xl:w-[300px] z-10 lg:left-32 lg:-top-20' alt="" />
                        <img src={under_hero} className='absolute lg:w-[350px] z-0 lg:left-[220px] lg:-top-20' alt="" />
                    </div>
                </div>
            </div>
            <div className='lg:h-[500px] relative'>
                <div className='absolute grid gap-8 grid-cols-2 z-30 lg:mt-6 lg:py-6 lg:px-8 bg-[#F2F0F4] rounded-3xl'>
                    <div className='flex justify-center items-center'>
                        <img className='w-[80%]' src={hero} alt="" />
                    </div>
                    <div>
                        <h1 className='lg:text-3xl lg:mb-3'>Skema Sertifikasi</h1>
                        <p className='lg:text-[0.6rem] lg:mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                        <p className='lg:text-[0.6rem] text-gray-400'>ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    </div>
                </div>
            </div>
            <div className='lg:mt-4'>
                <div className='flex justify-center uppercase lg:text-[2rem] text-white'><h1>Skema LSP P1 digital kreatif solusi</h1></div>
                <div className='lg:mt-12 lg:py-8 lg:px-10 bg-[#F2F0F4] w-full font-sans lg:text-xl lg:font-semibold text-gray-500'>
                    <div className='flex mb-4'>
                        <span className='lg:w-16'>1</span>
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
                <div className='flex justify-center text-white mt-4'>
                    <span>Lihat: </span>
                    <span className='font-bold'>23</span>
                    <span><Link to='#'> skema lainya...</Link></span>
                </div>
            </div>
            <div className='mt-44'>
                <div className='relative w-[70%] mx-auto'>
                    <div className='flex flex-col justify-center'>
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
                    <div className='absolute right-[-320px] top-12'>
                        <img className='w-[250px]' src={reg_section4} alt="" />
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-center uppercase'>
                        <div className='flex text-4xl'><h1 className='me-3 text-[#FF7F00]'>Tahapan</h1><h1>Untuk Mendaftar</h1></div>
                    </div>
                    <div className='flex justify-center items-center mt-10'>
                        <div className='rounded-3xl rounded-bl-none border-4 shadow-[inset_0px_0px_20px_0px_#ccc] bg-white p-4 me-4'>
                            <img src={reg_section1} alt="" />
                        </div>
                        <div className='self-start me-4'>
                            <img src={reg_arr1} alt="" />
                        </div>
                        <div className='rounded-3xl rounded-bl-none border-4 shadow-[inset_0px_0px_20px_0px_#ccc] bg-white py-6 px-7 me-4'>
                            <img className='w-12' src={reg_section2} alt="" />
                        </div>
                        <div className='self-end me-4'>
                            <img src={reg_arr2} alt="" />
                        </div>
                        <div className='rounded-3xl rounded-bl-none border-4 shadow-[inset_0px_0px_20px_0px_#ccc] bg-white p-5'>
                            <img src={reg_section3} alt="" />
                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='text-center w-[80%] mt-4'>
                            <h6 className='text-warning font-bold mb-1'>Your Content Goes Here</h6>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='text-center w-[80%] mx-auto mt-4'>
                            <h6 className='text-warning font-bold mb-1'>Your Content Goes Here</h6>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='text-center w-[80%] mx-auto mt-4'>
                            <h6 className='text-warning font-bold mb-1'>Your Content Goes Here</h6>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-20 mt-44'>
                <div className='w-[50%]'>
                    <h1 className='text-3xl font-semibold mb-8'>Proses Sertifikasi Kompetensi LSP Digital Kreatif Solusi</h1>
                    <div className='me-12'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='relative w-[50%] h-[750px] bg-[#F7F5F9] rounded-2xl'>
                    <div>
                        <img className='w-52 ms-20 mt-16' src={proc_section1} alt="" />
                    </div>
                    <div className='absolute bottom-20 right-[-25px]'>
                        <img className='w-80' src={proc_section1} alt="" />
                    </div>
                    <div className='relative w-full'>
                        <img className='absolute left-[-170px] w-[200%]' src={proc_section2} alt="" />
                    </div>
                </div>
            </div>
            <div className=' relative mt-[450px]'>
                <div className='text-center mb-16'>
                    <h1 className='text-5xl text-white'>Dasar Hukum</h1>
                </div>
                <div>
                    <div className='w-full flex gap-6'>
                        <div className='w-full bg-white rounded-2xl px-12 mb-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='w-[50%] mb-4' src={law_section1} alt="" />
                                <p>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                        <div className='w-full bg-white rounded-2xl px-12 mt-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='w-[50%] mb-4' src={law_section1} alt="" />
                                <p>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                        <div className='w-full bg-white rounded-2xl px-12 mb-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='w-[50%] mb-4' src={law_section1} alt="" />
                                <p>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-6 mt-8'>
                        <div className='w-full bg-white rounded-2xl px-12 -mt-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='w-[50%] mb-4' src={law_section1} alt="" />
                                <p>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                        <div className='w-full bg-none rounded-2xl px-12 mt-5'>
                            
                        </div>
                        <div className='w-full bg-white rounded-2xl px-12 -mt-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='w-[50%] mb-4' src={law_section1} alt="" />
                                <p>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-10 left-[310px]'>
                    <img className='w-56' src={law_section2} alt="" />
                </div>
                <div className='absolute -bottom-10 right-[330px]'>
                    <img className='w-56' src={law_section3} alt="" />
                </div>
            </div>
        </main>

        <footer className='mt-80'>
            <div className='flex justify-center gap-8 text-white'>
                <div className='uppercase'>
                    <span className='me-8'>Tentang Kami</span>
                    <span>/</span>
                </div>
                <div className='uppercase'>
                    <span className='me-8'>Regulasi</span>
                    <span>/</span>
                </div>
                <div className='uppercase'>
                    <span className='me-8'>Skema</span>
                    <span>/</span>
                </div>
                <div className='uppercase'>
                    <span className='me-8'>Galeri</span>
                </div>
            </div>
            <div className='mt-12'>
                <Footer />
            </div>
        </footer>
    
    </div>
  )
}

export default Home