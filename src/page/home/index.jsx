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
import background from '../../asset/Home.png'
import under_hero from '../../asset/under_hero1.png'
import hero from '../../asset/hero_section.png'


function Home() {
  return (
    <div style={{backgroundImage: `url(${background})`, height: '100%', width: '100vw'}} className='container bg-no-repeat bg-cover overflow-hidden lg:bg-contain xl:bg-cover overflow-hidden'>

        <header>
            <div className='md:pb-10 lg:pb-16'>
                <Header />
            </div>
            <div className='md:mt-24 lg:mt-28'></div>
        </header>

        <main className='px-10 lg:px-24 min-h-screen'>
            {/* Hero section */}
            <div className='grid grid-cols md:grid-cols-2 md:px-12 lg:px-0 mt-40 md:pt-8 lg:pt-0' id='hero'>
                <div className='lg:w-80 xl:w-96'>
                    <h5 className='text-info font-semibold font-azeret text-center md:text-left md:text-[0.8rem] lg:text-xs xl:text-sm mb-3'>Tentang Digital Kreatif Solusi</h5>
                    <h1 className='text-[1.7rem] md:text-[1.5rem] lg:text-[2rem] xl:text-4xl lg:mb-4 lg:leading-7 lg:font-medium xl:font-semibold'>LEMBAGA SERTIFIKASI PROFESI</h1>
                    <p className='text-gray-400 lg:text-[0.6rem] xl:text-sm md:mb-3 lg:mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    <Link to='#/' className='btn lg:btn-sm rounded-full lg:w-28 bg-[#22A75D] text-white lg:text-xs'>Learn More</Link>
                </div>
                <div className='hidden md:block'>
                    <div className='relative'>
                        <img src={law_section2} className='absolute -scale-x-100 xl:w-[18.75rem] z-10 md:left-[4.5rem] lg:left-32 lg:-top-20' alt="" />
                        <img src={under_hero} className='absolute lg:w-[21.875rem] xl:w-[28.125rem] z-0 md:left-40 lg:left-[13.75rem] lg:-top-20' alt="" />
                    </div>
                </div>
            </div>
            {/* Schema section */}
            <div className='md:h-[52rem] lg:h-[30.625rem] xl:h-[37.5rem] relative'>
                <div className='absolute grid gap-8 grid-cols-1 lg:grid-cols-2 z-30 md:mt-20 lg:mt-6 md:py-6 lg:py-6 xl:py-10 md:mt-2 md:px-2 lg:px-8 bg-[#F2F0F4] rounded-3xl'>
                    {/* Tab BP - 768px */}
                    <div className='md:flex flex-col justify-center items-center lg:hidden px-16'>
                        <div className='text-center'>
                            <h1 className='md:text-[1.5rem] lg:text-3xl xl:text-4xl md:mb-3 lg:mb-3'>Skema Sertifikasi</h1>
                            <p className='lg:text-[0.6rem] xl:text-xs md:mb-4 lg:mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                            <p className='lg:text-[0.6rem] xl:text-xs text-gray-400 md:mb-12 lg:mb-4'>ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                        </div>
                        <img className='w-[80%] md:pb-4 lg:pb-0' src={hero} alt="" />
                    </div>
                    {/* Large BP - 1204px */}
                    <div className='md:hidden lg:flex flex-col justify-center items-center'>
                        <img className='w-[80%]' src={hero} alt="" />
                    </div>
                    <div className='hidden lg:block'>
                        <h1 className='md:text-[1.5rem] lg:text-3xl xl:text-4xl lg:mb-3'>Skema Sertifikasi</h1>
                        <p className='lg:text-[0.6rem] xl:text-xs lg:mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                        <p className='lg:text-[0.6rem] xl:text-xs text-gray-400'>ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.</p>
                    </div>
                </div>
            </div>
            {/* Schema of field of study */}
            <div className=' md:bg-[#F86D42] lg:bg-transparent rounded-xl lg:mt-0 xl:mt-4 md:px-8 lg:px-0 md:py-10 lg:py-0'>
                <div className='flex justify-center uppercase md:text-[1.5rem] lg:text-[2rem] md:font-bold text-white mb-2'><h1>Skema LSP P1 digital kreatif solusi</h1></div>
                <div className='lg:mt-2 xl:mt-6 lg:py-2 xl:py-4 lg:px-6 lg:bg-[#F2F0F4] w-full font-sans lg:text-xl lg:font-semibold md:text-white lg:text-gray-500'>
                    <div className='flex lg:mb-1 xl:mb-3'>
                        <span className='w-16 lg:text-[0.8rem] xl:text-sm'>1</span>
                        <span className='w-[28.125rem] xl:w-[43.75rem] lg:text-[0.8rem] xl:text-sm'>Ahli Fluida Pengeboran Migas dan Panas Bumi</span>
                        <div ><ul className='list-disc uppercase lg:text-[0.8rem] xl:text-sm'><li>Teknik Perminyakan</li></ul></div>
                    </div>
                    <div className='flex lg:border-t-2 xl:border-t-[0.185rem] lg:mb-1 xl:mb-3'>
                        <span className='w-16 lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>2</span>
                        <span className='w-[28.125rem] xl:w-[43.75rem] lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>Ahli Keselamatan dan Kesehatan Kerja</span>
                        <div className='lg:mt-1 xl:mt-2'>
                            <ul className='list-disc uppercase'>
                                <li className='lg:text-[0.8rem] xl:text-sm lg:-mb-2 xl:mb-0'>Teknik Lingkungan</li>
                                <li className='lg:text-[0.8rem] xl:text-sm lg:-mb-2 xl:mb-0'>Teknik Kimia</li>
                                <li className='lg:text-[0.8rem] xl:text-sm lg:-mb-2 xl:mb-0'>Teknik Industri</li>
                                <li className='lg:text-[0.8rem] xl:text-sm lg:-mb-2 xl:mb-0'>Teknik Perminyakan</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex lg:border-t-2 xl:border-t-[0.185rem] lg:mb-1 xl:mb-3'>
                        <span className='w-16 lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>3</span>
                        <span className='w-[28.125rem] xl:w-[43.75rem] lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>Analisis Kemananan Siber</span>
                        <div className='lg:mt-1 xl:mt-2' >
                            <ul className='list-disc uppercase lg:text-[0.8rem] xl:text-sm'>
                                <li>Informatika</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex lg:border-t-2 xl:border-t-[0.185rem] lg:mb-1 xl:mb-3'>
                        <span className='w-16 lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>4</span>
                        <span className='w-[28.125rem] xl:w-[43.75rem] lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>Asisten Produser Televisi</span>
                        <div className='lg:mt-1 xl:mt-2' >
                            <ul className='list-disc uppercase lg:text-[0.8rem] xl:text-sm'>
                                <li>Ilmu Komunikasi</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex lg:border-t-2 xl:border-t-[0.185rem] lg:mb-1 xl:mb-3'>
                        <span className='w-16 lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>5</span>
                        <span className='w-[28.125rem] xl:w-[43.75rem] lg:text-[0.8rem] xl:text-sm lg:mt-2 xl:mt-3'>Desainer Grafis Madya</span>
                        <div className='lg:mt-1 xl:mt-2' >
                            <ul className='list-disc uppercase lg:text-[0.8rem] xl:text-sm'>
                                <li>Ilmu Komunikasi</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center text-white mt-4'>
                    <span className='md:text-[0.75rem] lg:text-[0.8rem]'>Lihat: </span>
                    <span className='font-bold md:text-[0.75rem] lg:text-[0.8rem] lg:mx-2'>23</span>
                    <span className='md:text-[0.75rem] lg:text-[0.8rem]'><Link to='#'>skema lainnya...</Link></span>
                </div>
            </div>
            {/* T&C and steps section */}
            <div className='md:mt-20 lg:mt-24 xl:mt-40'>
                <div className='relative lg:w-[80%] lg:mx-auto md:px-12 lg:px-0'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center uppercase'>
                            <div className='flex md:text-[1.5rem] lg:text-[2rem]'><h1 className='md:me-3 text-[#FF7F00]'>Persyaratan</h1><h1>Umum</h1></div>
                        </div>
                        <div className='md:mt-2 lg:mt-1 xl:mt-3'>
                            <ul className='list-decimal text-[0.7rem]'>
                                <li className='lg:mb-0 xl:mb-1'>Form APL 01 dan APL 02 tidak perlu diprint , Save as menjadi PDF.</li>
                                <li className='lg:mb-0 xl:mb-1'>Tanda tangan asesi menggunakan digital.</li>
                                <li className='lg:mb-0 xl:mb-1'>Perhatikan pada Form APL 02, arti kode K = Kompeten dan BK = Belum Kompeten.</li>
                                <li className='lg:mb-0 xl:mb-1'>Dokumen yang digunakan sebagai persyaratan pendaftaran, usahakan sudah terdapat tanda tangan pengesahan dari pihak bersangkutan, seperti KHS, Sertifikat,dll.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='absolute md:right-16 lg:right-[-10rem] md:top-0 lg:top-8'>
                        <img className='md:w-[7rem] lg:w-[9.375rem]' src={reg_section4} alt="" />
                    </div>
                </div>
                <div className='md:mt-12 lg:mt-0'>
                    <div className='flex justify-center uppercase'>
                        <div className='flex md:text-[1.5rem] lg:text-[2rem]'><h1 className='md:me-2 lg:me-3 text-[#FF7F00]'>Tahapan</h1><h1>Untuk Mendaftar</h1></div>
                    </div>
                    <div className='flex justify-center items-center md:mt-2'>
                        <div className='lg:rounded-2xl lg:rounded-bl-none lg:border-4 shadow-[inset_0px_0px_10px_0px_#ccc] bg-white lg:p-2 lg:me-2'>
                            <img className='md:w-10 lg:w-12' src={reg_section1} alt="" />
                        </div>
                        <div className='md:w-52 lg:w-40 xl:w-60 self-start lg:me-2'>
                            <img src={reg_arr1} alt="" />
                        </div>
                        <div className='lg:rounded-2xl lg:rounded-bl-none lg:border-4 shadow-[inset_0px_0px_10px_0px_#ccc] bg-white lg:py-3 lg:px-4 lg:me-2'>
                            <img className='w-8' src={reg_section2} alt="" />
                        </div>
                        <div className='md:w-52 lg:w-40 xl:w-60 self-end lg:me-2'>
                            <img src={reg_arr2} alt="" />
                        </div>
                        <div className='lg:rounded-2xl lg:rounded-bl-none lg:border-4 shadow-[inset_0px_0px_10px_0px_#ccc] bg-white lg:p-2'>
                            <img className='md:w-10 lg:w-12' src={reg_section3} alt="" />
                        </div>
                    </div>
                    <div className='grid md:gap-4 lg:gap-0 md:grid-cols-8 lg:grid-cols-3'>
                        <div className='md:col-span-3 lg:col-span text-center lg:w-[85%] md:mt-3 lg:mt-4'>
                            <h6 className='text-warning font-bold lg:mb-1 md:text-[0.7rem] lg:text-[0.8rem]'>Your Content Goes Here</h6>
                            <p className='md:text-[0.7rem] lg:text-[0.8rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='md:col-span-2 lg:col-span text-center lg:w-[80%] mt-4'>
                            <h6 className='text-warning font-bold lg:mb-1 md:text-[0.7rem] lg:text-[0.8rem]'>Your Content Goes Here</h6>
                            <p className='md:text-[0.7rem] lg:text-[0.8rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='md:col-span-3 lg:col-span text-center lg:w-[85%] mt-4'>
                            <h6 className='text-warning font-bold lg:mb-1 md:text-[0.7rem] lg:text-[0.8rem]'>Your Content Goes Here</h6>
                            <p className='md:text-[0.7rem] lg:text-[0.8rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Proccess section */}
            <div className='flex justify-center items-center gap-8 md:mt-16 lg:mt-24 xl:mt-52'>
                <div className='lg:w-[50%] md:text-center lg:text-left md:px-16'>
                    <h1 className='md:text-[1.5rem] lg:text-[1.3rem] font-semibold md:mb-4 lg:mb-8'>Proses Sertifikasi Kompetensi LSP Digital Kreatif Solusi</h1>
                    <div className='lg:text-[0.8rem] lg:me-12'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum auctor odio eget metus gravida, at feugiat erat consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='relative md:hidden lg:block lg:w-[50%] lg:h-[34.375rem] bg-[#F7F5F9] rounded-2xl'>
                    <div>
                        <img className='lg:w-28 lg:ms-16 lg:mt-12' src={proc_section1} alt="" />
                    </div>
                    <div className='absolute lg:bottom-20 lg:right-[-1.5rem]'>
                        <img className='lg:w-64' src={proc_section1} alt="" />
                    </div>
                    <div className='relative lg:w-full'>
                        <img className='absolute lg:left-[-7.5rem] xl:left-[-11.25rem] lg:w-[200%]' src={proc_section2} alt="" />
                    </div>
                </div>
            </div>
            {/* Law section */}
            <div className=' relative md:mt-24 lg:mt-[7.5rem] xl:mt-[18.75rem]'>
                <div className='text-center lg:mb-6'>
                    <h1 className='md:text-[1.7rem] lg:text-3xl text-white'>Dasar Hukum</h1>
                </div>
                <div>
                    <div className='md:hidden lg:block w-full flex md:gap-10 lg:gap-6 md:px-16 lg:px-0'>
                        <div className='w-full bg-white md:rounded-xl lg:rounded-2xl lg:px-12 lg:mb-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='md:w-[40%] lg:w-[50%] mb-4' src={law_section1} alt="" />
                                <p className='lg:text-[0.7rem]'>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                        <div className='w-full bg-white md:rounded-xl lg:rounded-2xl lg:px-12 lg:mt-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='md:w-[40%] lg:w-[50%] mb-4' src={law_section1} alt="" />
                                <p className='lg:text-[0.7rem]'>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                        <div className='md:hidden lg:block w-full bg-white lg:rounded-2xl lg:px-12 lg:mb-10'>
                            <div className='text-center flex flex-col justify-center items-center lg:py-5'>
                                <img className='lg:w-[50%] mb-4' src={law_section1} alt="" />
                                <p className='lg:text-[0.7rem]'>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex md:gap-10 lg:gap-6 lg:mt-8 md:px-16 lg:px-0 md:mt-10 lg:mt-0'>
                        <div className='w-full bg-white md:rounded-xl lg:rounded-2xl lg:px-12 lg:-mt-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='md:w-[40%] lg:w-[50%] mb-4' src={law_section1} alt="" />
                                <p className='lg:text-[0.7rem]'>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                        <div className='md:hidden lg:block w-full bg-none lg:rounded-2xl lg:px-12 lg:mt-5'>
                            
                        </div>
                        <div className='w-full bg-white md:rounded-xl lg:rounded-2xl lg:px-12 lg:-mt-10'>
                            <div className='text-center flex flex-col justify-center items-center py-5'>
                                <img className='md:w-[40%] lg:w-[50%] mb-4' src={law_section1} alt="" />
                                <p className='lg:text-[0.7rem]'>UU No.3. th 2003 tentang tenagakerjaan.</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:block lg:hidden w-[40%] bg-white md:rounded-xl lg:rounded-2xl mx-auto lg:mb-10 mt-8'>
                        <div className='text-center flex flex-col justify-center items-center py-5'>
                            <img className='md:w-[40%] lg:w-[50%] mb-4' src={law_section1} alt="" />
                            <p className='lg:text-[0.7rem]'>UU No.3. th 2003 tentang tenagakerjaan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className='md:mt-64 lg:mt-80'>
            <div className='flex justify-center gap-8 text-white'>
                <div className='uppercase'>
                    <span className='lg:text-[0.8rem] lg:me-8'>Tentang Kami</span>
                    <span>/</span>
                </div>
                <div className='uppercase'>
                    <span className='lg:text-[0.8rem] lg:me-8'>Regulasi</span>
                    <span>/</span>
                </div>
                <div className='uppercase'>
                    <span className='lg:text-[0.8rem] lg:me-8'>Skema</span>
                    <span>/</span>
                </div>
                <div className='uppercase'>
                    <span className='lg:text-[0.8rem] lg:me-8'>Galeri</span>
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