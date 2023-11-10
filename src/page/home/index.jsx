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
import background from '../../asset/Background.jpg'
import under_hero from '../../asset/under_hero1.png'
import hero from '../../asset/hero_section.png'
import schema from '../../asset/schema.png'
import mapBG from '../../asset/mapBG.png'
import logosdk from '../../asset/LSP.png'


function Home() {
  return (
    <div style={{backgroundImage: `url(${background})`, height: '100%', width: '100%'}} className='container[2560px] mx-auto bg-no-repeat bg-cover overflow-x-hidden'>

        <header>
            <div className='md:pb-10 lg:pb-16'>
                <Header />
            </div>
            <div className='md:mt-24 lg:mt-28'></div>
        </header>

        <main className='px-10 lg:px-24 min-h-screen'>
            {/* Hero section */}
            <div className='grid grid-cols md:grid-cols-2 md:px-12 lg:px-0 mt-40 md:mt-0 md:pt-5 lg:pt-0' id='hero'>
                <div className='lg:w-full xl:w-96 2xl:w-[80%]'>
                    <h5 className='text-info font-semibold font-azeret text-center md:text-left md:text-[0.8rem] lg:text-xs xl:text-sm mb-3'>Tentang Digital Kreatif Solusi</h5>
                    <h1 className='text-[1.7rem] md:text-[1.5rem] lg:text-[2rem] xl:text-4xl 2xl:text-6xl lg:mb-4 lg:leading-7 lg:font-medium uppercase'>sejarah singkat lsp dks</h1>
                    <div className='text-gray-400 md:text-[0.6rem] lg:text-[1rem] xl:text-sm 2xl:leading-6 md:mb-3 lg:mb-5'>
                        <p>LSP Digital Kreatif Solusi (LSP DKS) dibentuk atas inisiasi dari Perkumpulan Ahli Digital TIK Modern (PERDITIKOM) yang didukung juga oleh Ikatan Ahli Informatika Indonesia (IAII) dan Perkumpumpulan Trainer Digital Marketing Indonesia dengan Surat Keputusan Nomor: 01/ PERDITIKOM/KEP/VII/2023 tanggal 21Juli 2023 tentang Pembentukan Lembaga Sertifikasi Profesi (LSP) Digital Kreatif Solusi.</p>
                        <p>Adapun dukungan dari instansi pembina sektor TIK dalam hal ini KOMINFO RI sedang dalam proses pengajuan (draft surat dan lampirannya sdh kami siapkan).</p>
                    </div>
                    <Link to='#/' className='btn lg:btn-sm rounded-full lg:w-28 bg-[#22A75D] text-white lg:text-xs hidden'>Learn More</Link>
                </div>
                <div className='hidden md:block'>
                    <div className='relative'>
                        <img src={law_section2} className='absolute -scale-x-100 xl:w-[18.75rem] z-10 md:left-[4.5rem] lg:left-32 lg:-top-20' alt="" />
                        <img src={under_hero} className='absolute lg:w-[21.875rem] xl:w-[28.125rem] z-0 md:left-40 lg:left-[13.75rem] lg:-top-20' alt="" />
                    </div>
                </div>
            </div>
            {/* Schema section */}
            <div className='md:h-[52rem] lg:h-[30.625rem] xl:h-[37.5rem] 2xl:h-[10rem] relative'>
                <div className='absolute grid gap-8 grid-cols-1 lg:grid-cols-2 z-30 md:mt-20 lg:mt-6 2xl:mt-44 md:py-6 lg:py-6 xl:py-10 2xl:py-16 md:px-2 lg:px-8 bg-[#F2F0F4] rounded-3xl'>
                    {/* Tab BP - 768px */}
                    <div className='md:flex flex-col justify-center items-center lg:hidden px-16'>
                        <div className='text-center'>
                            <h1 className='md:text-[1.5rem] lg:text-3xl xl:text-4xl uppercase md:mb-3 lg:mb-3'>komitmen lsp</h1>
                            <p className='lg:text-[1rem] xl:text-xs 2xl:text-sm md:mb-4 lg:mb-3 '>Kami berkomitmen untuk menyelenggarakan proses sertifikasi kompetensi SDM di bidang teknologi informasi dan komunikasi (TIK) secara profesional. Keberhasilan dalam mencapai visi, misi, sasaran, dan kebijakan mutu ditentukan oleh komitmen personil badan pelaksana dan dewan pengarah dalam pelaksanaan program dan strategi kebijakan LSP (Lembaga Sertifikasi Profesi) Digital Kreatif Solusi yang berorientasi kepada kompetensi peserta uji dan kebutuhan para pemangku kepentingan.</p>
                        </div>
                        <img className='w-[80%] md:pb-4 lg:pb-0' src={hero} alt="" />
                    </div>
                    {/* Large BP - 1204px */}
                    <div className='md:hidden lg:flex flex-col justify-center items-center'>
                        <img className='w-[80%]' src={hero} alt="" />
                    </div>
                    <div className='hidden lg:block 2xl:ps-12 2xl:pe-40'>
                        <h1 className='md:text-[1.5rem] lg:text-3xl xl:text-4xl 2xl:text-6xl uppercase lg:mb-3 2xl:mb-10'>komitmen lsp</h1>
                        <p className='lg:text-[0.6rem] xl:text-xs 2xl:text-sm 2xl:leading-6 lg:mb-3'>Kami berkomitmen untuk menyelenggarakan proses sertifikasi kompetensi SDM di bidang teknologi informasi dan komunikasi (TIK) secara profesional. Keberhasilan dalam mencapai visi, misi, sasaran, dan kebijakan mutu ditentukan oleh komitmen personil badan pelaksana dan dewan pengarah dalam pelaksanaan program dan strategi kebijakan LSP (Lembaga Sertifikasi Profesi) Digital Kreatif Solusi yang berorientasi kepada kompetensi peserta uji dan kebutuhan para pemangku kepentingan.</p>
                    </div>
                </div>
            </div>
            {/* Schema of field of study */}
            <div className=' md:bg-[#F86D42] lg:bg-transparent rounded-xl mt-10 lg:mt-0 xl:mt-4 2xl:mt-[58rem] md:px-8 lg:px-0 md:py-10 lg:py-0'>
                <div className='flex justify-center uppercase md:text-[1.5rem] lg:text-[2rem] 2xl:text-6xl md:font-bold text-white mb-2'><h1>Skema Sertifikasi</h1></div>
                <div className='text-[#3395FF] 2xl:text-sm'>
                    <p>*Skema sertifikasi okupasi LSP-DKS mengacu pada SKKNI (Standar Kompetensi Kerja Nasional Indonesia Peta okupasi PROSERTI KOMINFO RI)</p>
                </div>
                <div className='flex justify-center mt-16'>
                    <img className='w-[85%]' src={schema} alt="" />
                </div>
                <div className='hidden lg:mt-2 xl:mt-6 lg:py-2 xl:py-4 lg:px-6 lg:bg-[#F2F0F4] w-full font-sans lg:text-xl lg:font-semibold md:text-white lg:text-gray-500'>
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
            {/* T&C and steps section - not used*/}
            <div className='hidden md:mt-20 lg:mt-24 xl:mt-40'>
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
                        <div className='md:col-span-3 lg:col-span-1 text-center lg:w-[85%] md:mt-3 lg:mt-4'>
                            <h6 className='text-warning font-bold lg:mb-1 md:text-[0.7rem] lg:text-[0.8rem]'>Your Content Goes Here</h6>
                            <p className='md:text-[0.7rem] lg:text-[0.8rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='md:col-span-2 lg:col-span-1 text-center lg:w-[80%] mt-4'>
                            <h6 className='text-warning font-bold lg:mb-1 md:text-[0.7rem] lg:text-[0.8rem]'>Your Content Goes Here</h6>
                            <p className='md:text-[0.7rem] lg:text-[0.8rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className='md:col-span-3 lg:col-span-1 text-center lg:w-[85%] mt-4'>
                            <h6 className='text-warning font-bold lg:mb-1 md:text-[0.7rem] lg:text-[0.8rem]'>Your Content Goes Here</h6>
                            <p className='md:text-[0.7rem] lg:text-[0.8rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Visi misi section */}
            <div>
                <div className='relative lg:w-[80%] lg:mx-auto md:px-12 lg:px-0 2xl:pt-[3rem]'>
                    <div className='flex flex-col justify-center'>
                        <div className='flex justify-center uppercase'>
                            <div className='flex md:text-[1.5rem] lg:text-[2rem] 2xl:text-6xl'><h1 className='md:me-3'>Visi dan Misi</h1></div>
                        </div>
                        <div className='grid grid-cols-2 2xl:text-[2rem] 2xl:mt-6'>
                            <div className='2xl:text-[2rem] text-center'>
                                <h2>Visi</h2>
                            </div>
                            <div className='text-center md:mt-2 lg:mt-1 xl:mt-3'>
                                <h2>Misi</h2>
                            </div>
                        </div>
                        <div className='grid gap-10 grid-cols-2'>
                            <div className='text-center 2xl:px-16 md:mt-2 lg:mt-1 xl:mt-3 2xl:text-sm 2xl:leading-6'>
                                <p>Menjadi Lembaga Sertifikasi Profesi yang terdepan dan handal serta memberikanlayanan terbaik dalam pengembangan profesi sektor teknologi informasi dan komunikasi.</p>
                            </div>
                            <div className='md:mt-2 lg:mt-1 xl:mt-3'>
                                <ul className='list-decimal text-[0.7rem] 2xl:text-sm text-slate-500 2xl:leading-6'>
                                    <li className='lg:mb-0 xl:mb-1'>Menyelenggarakan sertifikasi kompetensi bagi SDM secara kredibel, independen, dan transparan sesuai dengan standar dan ketentuan yang berlaku.</li>
                                    <li className='lg:mb-0 xl:mb-1'>Mengembangkan skema kompetensi yang mengacu pada SKKNI (Standar Kompetensi Kerja Nasional Indonesia) secara berkelanjutan.</li>
                                    <li className='lg:mb-0 xl:mb-1'>Mengembangkan sistem sertifikasi profesi yang diakui secara Nasional dan Internasional.</li>
                                    <li className='lg:mb-0 xl:mb-1'>Menjamin integritas dan kompetensi para personil/penyelenggara sertifikasi profesi.</li>
                                    <li className='lg:mb-0 xl:mb-1'>Menyediakan sarana dan prasarana terbaik untuk menjamin kualitas pelayanan sertifikasi profesi.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Tujuan dan Sarana section */}
            <div className='relative flex justify-center items-center gap-8 md:mt-16 lg:mt-24 xl:mt-52 2xl:mt-[22rem] 2xl:pt-24'>
                <div className='relative md:hidden lg:block lg:w-[50%] 2xl:w-[25%] lg:h-[34.375rem] 2xl:h-[28rem] bg-[#F7F5F9] rounded-2xl 2xl:ms-12'>
                    <div>
                        <img className='lg:w-28 lg:ms-16 lg:mt-12' src={proc_section1} alt="" />
                    </div>
                    <div className='absolute lg:bottom-20 lg:right-[-1.5rem]'>
                        <img className='lg:w-64 2xl:w-52' src={proc_section1} alt="" />
                    </div>
                    <div className='relative lg:w-full '>
                        <img className='absolute lg:left-[-7.5rem] xl:left-[-6rem] lg:w-[200%]' src={proc_section2} alt="" />
                    </div>
                </div>
                <div className='lg:w-[50%] 2xl:w-[70%] md:text-center lg:text-left md:px-16'>
                    <h1 className='md:text-[1.5rem] lg:text-[1.3rem] 2xl:text-6xl font-medium md:mb-4 lg:mb-8'>TUJUAN DAN SASARAN MUTU</h1>
                    <div className='lg:text-[0.8rem] 2xl:text-sm leading-7 tracking-wide lg:me-12 2xl:me-0'>
                        <p>LSP DKS (Digital Kreatif Solusi) memiliki tujuan untuk Memastikan kompetensi SDM sektor TIK guna meningkatkan keunggulan (advantage), produktivitas (productivity) dan daya saing (competitive) mereka.</p>
                        <p className='pt-2'>LSP DKS (Lembaga Sertifikasi Profesi Digital Kreatif Solusi) melaksanakan kegiatan sesuai tugas pokok dan fungsi (tupoksi) yang ditetapkan Badan Nasional Sertifikasi Profesi (BNSP). Tupoksi yang dilaksanakan LSP DKS (Lembaga Sertifikasi Profesi Digital Kreatif Solusi) antara lain :</p>
                        <ol className='list-decimal 2xl:ms-16 2xl:mt-6'>
                            <li className='2xl:pb-2'>Penyusunan dan pengembangan skema sertifikasi.</li>
                            <li className='2xl:pb-2'>Penyusunan perangkat asesmen dan materi uji kompetensi.</li>
                            <li className='2xl:pb-2'>Penyediaan tenaga asesor.</li>
                            <li className='2xl:pb-2'>Pelaksanaan dan pemeliharaan sertifikasi.</li>
                            <li className='2xl:pb-2'>Penetapan persyaratan, verifikasi dan penetapan Tempat Uji Kompetensi (TUK).</li>
                            <li className='2xl:pb-2'>Pemeliharaan kinerja asesor dan TUK.</li>
                            <li className='2xl:pb-2'>Pengembangan pelayanan sertifikasi.</li>
                        </ol>
                    </div>
                </div>
                <div className='absolute md:right-16 lg:right-[-10rem] 2xl:right-8 md:top-0 lg:top-8 2xl:-top-40'>
                    <img className='md:w-[7rem] lg:w-[9.375rem] 2xl:w-[15rem]' src={reg_section4} alt="" />
                </div>
            </div>
            {/* FAQ section */}
            <div className='2xl:mt-[29rem] text-white'>
                <div className='text-center 2xl:mb-16'>
                    <h1 className='2xl:text-6xl'>FAQ</h1>
                    <span className='2xl:text-2xl font-normal'>Frequently asked questions</span>
                </div>
                <div className='2xl:px-36'>
                    <div className='text-sm leading-6 2xl:mb-8 border-l-2 2xl:ps-5'>
                        <h3 className='font-semibold'>Apakah itu LSP ?</h3>
                        <h4 className='font-light 2xl:mt-4'>LSP adalah singkatan dari Lembaga Sertifikasi Profesi, yaitu organisasi yang melakukan kegiatan sertifikasi profesional dan telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP). LSP dibagi menjadi tiga jenis, yaitu LSP P1, P2, dan P3. Fungsi LSP meliputi melakukan sertifikasi kompetensi, membuat materi uji kompetensi, menyediakan asesor, serta menjaga dan mengembangkan standar kompetensi. Tujuan LSP adalah untuk memastikan bahwa para profesional memiliki keterampilan dan pengetahuan yang diperlukan untuk melakukan pekerjaan mereka dengan efektif dan efisien.</h4>
                    </div>
                    <div className='2xl:mb-8 border-l-2 2xl:ps-5'>
                        <h3 className='font-semibold'>Bagaimana sertifikasi dari LSP DKS dapat memberikan keunggulan kompetitif bagi para profesional di industri IT ?</h3>
                        <h4 className='hidden'>LSP adalah singkatan dari Lembaga Sertifikasi Profesi, yaitu organisasi yang melakukan kegiatan sertifikasi profesional dan telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP). LSP dibagi menjadi tiga jenis, yaitu LSP P1, P2, dan P3. Fungsi LSP meliputi melakukan sertifikasi kompetensi, membuat materi uji kompetensi, menyediakan asesor, serta menjaga dan mengembangkan standar kompetensi. Tujuan LSP adalah untuk memastikan bahwa para profesional memiliki keterampilan dan pengetahuan yang diperlukan untuk melakukan pekerjaan mereka dengan efektif dan efisien.</h4>
                    </div>
                    <div className='2xl:mb-8 border-l-2 2xl:ps-5'>
                        <h3 className='font-semibold'>Apa peran utama LSP dalam mendukung pengembangan karir profesional di bidang digital marketing ?</h3>
                        <h4 className='hidden'>LSP adalah singkatan dari Lembaga Sertifikasi Profesi, yaitu organisasi yang melakukan kegiatan sertifikasi profesional dan telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP). LSP dibagi menjadi tiga jenis, yaitu LSP P1, P2, dan P3. Fungsi LSP meliputi melakukan sertifikasi kompetensi, membuat materi uji kompetensi, menyediakan asesor, serta menjaga dan mengembangkan standar kompetensi. Tujuan LSP adalah untuk memastikan bahwa para profesional memiliki keterampilan dan pengetahuan yang diperlukan untuk melakukan pekerjaan mereka dengan efektif dan efisien.</h4>
                    </div>
                    <div className='2xl:mb-8 border-l-2 2xl:ps-5'>
                        <h3 className='font-semibold'>Apa peran utama LSP dalam mendukung pengembangan karir profesional di bidang digital marketing ?</h3>
                        <h4 className='hidden'>LSP adalah singkatan dari Lembaga Sertifikasi Profesi, yaitu organisasi yang melakukan kegiatan sertifikasi profesional dan telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP). LSP dibagi menjadi tiga jenis, yaitu LSP P1, P2, dan P3. Fungsi LSP meliputi melakukan sertifikasi kompetensi, membuat materi uji kompetensi, menyediakan asesor, serta menjaga dan mengembangkan standar kompetensi. Tujuan LSP adalah untuk memastikan bahwa para profesional memiliki keterampilan dan pengetahuan yang diperlukan untuk melakukan pekerjaan mereka dengan efektif dan efisien.</h4>
                    </div>
                    <div className='2xl:mb-8 border-l-2 2xl:ps-5'>
                        <h3 className='font-semibold'>Apa saja kriteria yang diukur dalam asesmen untuk mendapatkan sertifikasi dari LSP DKS ?</h3>
                        <h4 className='hidden'>LSP adalah singkatan dari Lembaga Sertifikasi Profesi, yaitu organisasi yang melakukan kegiatan sertifikasi profesional dan telah mendapatkan lisensi dari Badan Nasional Sertifikasi Profesi (BNSP). LSP dibagi menjadi tiga jenis, yaitu LSP P1, P2, dan P3. Fungsi LSP meliputi melakukan sertifikasi kompetensi, membuat materi uji kompetensi, menyediakan asesor, serta menjaga dan mengembangkan standar kompetensi. Tujuan LSP adalah untuk memastikan bahwa para profesional memiliki keterampilan dan pengetahuan yang diperlukan untuk melakukan pekerjaan mereka dengan efektif dan efisien.</h4>
                    </div>
                </div>
            </div>
            {/* Law section */}
            <div className='hidden relative md:mt-24 lg:mt-[7.5rem] xl:mt-[18.75rem]'>
                <div className='text-center lg:mb-6'>
                    <h1 className='md:text-[1.7rem] lg:text-3xl text-white'>Dasar Hukum</h1>
                </div>
                <div>
                    <div className='md:hidden lg:flex w-full md:gap-10 lg:gap-6 md:px-16 lg:px-0'>
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
            {/* Bottom Section */}
            <div className='flex flex-col justify-center items-center 2xl:mt-[20rem]'>
                <h1 className='2xl:text-6xl font-semibold text-center 2xl:pb-1'>Contact Us</h1>
                <div className='grid grid-cols-4 flex flex-col justify-center items-center 2xl:-mt-8'>
                    <div className='col-span-1 2xl:pt-8'><img src={logosdk} alt="" /></div>
                    <div className='col-span-2 flex flex-col items-center 2xl:w-[100%]'>
                        <iframe className='2xl:h-[70%] 2xl:w-[80%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.8949940954737!2d106.80237316511095!3d-6.291309966206421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1e50f73ff43%3A0x1ac72211be8b02f3!2sTalavera%20Office%20Park%2C%20Jl.%20TB%20Simatupang%20No.23%2C%20RT.3%2FRW.1%2C%20Cilandak%20Bar.%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012430!5e0!3m2!1sid!2sid!4v1687503396454!5m2!1sid!2sid"  allowfullscreen=""></iframe>
                    </div>
                    <div className='col-span-1'><img src={mapBG} alt="" /></div>
                </div>
                <div className='flex flex-col justify-center items-center 2xl:-mt-10 2xl:pb-8 mx-auto'>
                    <p className='2xl:w-[30%] 2xl:text-sm text-center 2xl:mt-3'>Alamanda Tower Lantai 2 Unit-H1 Jl. TB.  Simatupang No. 23 - 24 RT 001 RW 001, Kelurahan Cilandak Barat, Kecamatan Cilandak, Jakarta Selatan, DKI Jakarta 1243 </p>
                    <span className='flex mt-4'>
                        <p className='font-semibold'>Phone:</p><p className='text-[#2278D4]'>081188809565</p>
                    </span>
                    <span className='flex'>
                        <p className='font-semibold'>Email:</p><p className='text-[#2278D4]'>lsp.dks23@gmail.com</p>
                    </span>
                </div>
            </div>
            <div>
                
            </div>

        </main>

        <footer className=' bottom-0 md:mt-64 lg:mt-12 2xl:my-8 '>

            <div className='flex justify-center'>
                <span className='2xl:text-sm'>© Copyright LSP DIGITAL KREATIF SOLUSI 2023. All Rights Reserved</span>
            </div>
            
            {/*<div className='flex justify-center gap-8 text-white'>
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
            </div> */}
        </footer>
    
    </div>
  )
}

export default Home