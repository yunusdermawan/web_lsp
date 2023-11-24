import React from 'react'
import hero from '../../src/asset/hero_section.png'
import { motion } from 'framer-motion'

function Commitment() {
  return (
    <div>

      <div className='relative md:h-[52rem] lg:h-[30.625rem] xl:h-[30rem] 2xl:h-[6rem]'>
          <div className='absolute z-30 grid gap-8 grid-cols-1 lg:grid-cols-2  md:mt-20 lg:mt-6 xl:mt-12 2xl:mt-16 md:py-6 lg:py-6 xl:py-10 2xl:py-16 md:px-2 lg:px-8 bg-[#F2F0F4] rounded-3xl'>
              {/* Tab BP - 768px */}
              <div className='md:flex flex-col justify-center items-center lg:hidden px-16'>
                  <div className='text-center'>
                      <h1 className='md:text-[1.5rem] lg:text-3xl xl:text-4xl uppercase md:mb-3 lg:mb-3'>komitmen lsp</h1>
                      <p className='lg:text-[1rem] xl:text-sm 2xl:text-sm md:mb-4 lg:mb-3 '>Kami berkomitmen untuk menyelenggarakan proses sertifikasi kompetensi SDM di bidang teknologi informasi dan komunikasi (TIK) secara profesional. Keberhasilan dalam mencapai visi, misi, sasaran, dan kebijakan mutu ditentukan oleh komitmen personil badan pelaksana dan dewan pengarah dalam pelaksanaan program dan strategi kebijakan LSP (Lembaga Sertifikasi Profesi) Digital Kreatif Solusi yang berorientasi kepada kompetensi peserta uji dan kebutuhan para pemangku kepentingan.</p>
                  </div>
                  <img className='w-[80%] md:pb-4 lg:pb-0' src={hero} alt="" />
              </div>
              {/* XL BP - 1280px */}
              <div className='md:hidden lg:flex flex-col justify-center items-center'>
                  <img className='w-[80%] 2xl:w-full' src={hero} alt="" />
              </div>
              <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: 5 }}  className='hidden lg:block 2xl:ps-12 2xl:pe-6 3xl:pt-24'>
                  <h1 className='md:text-[1.5rem] lg:text-3xl xl:text-4xl 2xl:text-[3.25rem] uppercase lg:mb-3 2xl:mb-10'>komitmen lsp</h1>
                  <p className='lg:text-[0.6rem] xl:text-sm 2xl:text-base 2xl:leading-6 lg:mb-3'>Kami berkomitmen untuk menyelenggarakan proses sertifikasi kompetensi SDM di bidang teknologi informasi dan komunikasi (TIK) secara profesional. Keberhasilan dalam mencapai visi, misi, sasaran, dan kebijakan mutu ditentukan oleh komitmen personil badan pelaksana dan dewan pengarah dalam pelaksanaan program dan strategi kebijakan LSP (Lembaga Sertifikasi Profesi) Digital Kreatif Solusi yang berorientasi kepada kompetensi peserta uji dan kebutuhan para pemangku kepentingan.</p>
              </motion.div>
          </div>
      </div>

    </div>
  )
}

export default Commitment