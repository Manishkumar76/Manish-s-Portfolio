import React, { useEffect, useState } from 'react'
import { Document, pdfjs, Page } from 'react-pdf';
import pdf from './../assets/Manish Kumar Resume .pdf'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Particle from '../components/Particle';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {

  const [width, setWidth] = useState(1200);



  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  return (
    <div className=' text-white pt-20 flex flex-col justify-center'>

      <Particle />

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <p className='inline text-4xl font-bold border-b-4 border-pink-600'>Resume</p>
      </div>

      <div className='max-w-[1000px] mx-auto pb-10 flex flex-col justify-center'>

        <div className='w-full py-4'>

          <a href={pdf} target='_blank' rel="noreferrer">
            <button className='group mx-auto text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:rounded-lg font-medium transition-all duration-300'> Download Resume
              <span className='group-hover:rotate-90 duration-500'>
                <HiArrowNarrowRight className='ml-2 mr-2' />
              </span>
            </button>
          </a>

        </div>

        <div className='bg-[#dedede] mx-auto'>
          <Document file={pdf}>
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} scale={width > 900 ? 1.4 : 0.6} />
          </Document>
        </div>

        <div className='w-full py-4'>

          <a href={pdf} target='_blank' rel="noreferrer">
            <button className='group mx-auto text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:rounded-lg font-medium transition-all duration-300'> Download Resume
              <span className='group-hover:-rotate-90 duration-500'>
                <HiArrowNarrowRight className='ml-2 mr-2' />
              </span>
            </button>
          </a>

        </div>


        <div>

        </div>

      </div>

    </div>
  )
}

export default Resume