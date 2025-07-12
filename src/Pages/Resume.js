import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Particle from '../components/Particle';
import pdf from '../assets/Manish_Kumar.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// ✅ PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate actual pixel width for the Page component
  const getPageWidth = () => {
    if (width > 1024) return 800; // for desktops
    if (width > 768) return 600;  // for tablets
    return 330;                   // for mobiles
  };

  return (
    <div className='text-white pt-20 pb-10 flex flex-col items-center bg-[#0a192f] min-h-screen'>
      <Particle />

      {/* Container */}
      <div className='w-full max-w-[1000px] px-4'>

        {/* Title */}
        <div className='pb-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold border-b-4 border-orange-600 inline-block'>Resume</h2>
          <p className='pt-2 text-gray-400 text-sm md:text-base'>Here is my resume for download and preview</p>
        </div>

        {/* Download Button - Top */}
        <div className='py-4 flex justify-center'>
          <a href={pdf} target='_blank' rel='noreferrer'>
            <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-orange-600 hover:border-orange-600 rounded-md font-medium transition-all duration-300'>
              Download Resume
              <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-500' />
            </button>
          </a>
        </div>

        {/* PDF Box — matches exact PDF size */}
        <div
          className='bg-white rounded-md shadow-lg mx-auto overflow-hidden border border-gray-300'
          style={{ width: `${getPageWidth()}px` }}
        >
          <Document file={pdf} loading={<LoadingIndicator />}>
            <Page
              pageNumber={1}
              width={getPageWidth()}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {/* Download Button - Bottom */}
        <div className='py-6 flex justify-center'>
          <a href={pdf} target='_blank' rel='noreferrer'>
            <button className='group text-white border-2 px-6 py-3 flex items-center hover:bg-orange-600 hover:border-orange-600 rounded-md font-medium transition-all duration-300'>
              Download Resume
              <HiArrowNarrowRight className='ml-2 group-hover:-rotate-90 duration-500' />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      
      {/* Text */}
      <p className="mt-4 text-orange-500 text-sm font-medium tracking-wide">
        Loading resume, please wait...
      </p>
    </div>
  );
}


export default Resume;
