import React from 'react'
import hero from '../../src/asset/hero_section.png'
import { motion } from 'framer-motion'

function CommitmentMobile() {
  return (
    <div>

      <div className='md:h-[52rem] lg:h-[30.625rem] xl:h-[30rem] 2xl:h-[6rem] px-10'>
          <div className='grid gap-8 grid-cols-1 lg:grid-cols-2 mt-10 md:mt-20 lg:mt-6 xl:mt-12 2xl:mt-16 md:py-6 lg:py-6 xl:py-10 2xl:py-16 md:px-2 lg:px-8 bg-[#F2F0F4] rounded-3xl'>
              <div className='md:flex flex-col justify-center items-center lg:hidden'>
                  <div className='flex flex-col items-center justify-center'>
                      <h1 className='text-[1.7rem] md:text-[1.5rem] lg:text-3xl xl:text-4xl uppercase md:mb-3 lg:mb-3'>komitmen lsp</h1>
                      <img className='w-[20rem] md:w-[30rem] rounded-lg px-2 md:pb-4 lg:pb-0' src={hero} alt="" />
                      <p className='text-[0.8rem] lg:text-[1rem] xl:text-sm 2xl:text-sm md:mb-4 lg:mb-3 px-6 py-6 '>Kami berkomitmen untuk menyelenggarakan proses sertifikasi kompetensi SDM di bidang teknologi informasi dan komunikasi (TIK) secara profesional. Keberhasilan dalam mencapai visi, misi, sasaran, dan kebijakan mutu ditentukan oleh komitmen personil badan pelaksana dan dewan pengarah dalam pelaksanaan program dan strategi kebijakan LSP (Lembaga Sertifikasi Profesi) Digital Kreatif Solusi yang berorientasi kepada kompetensi peserta uji dan kebutuhan para pemangku kepentingan.</p>
                  </div>
              </div>
              
          </div>
      </div>

    </div>
  )
}

export default CommitmentMobile