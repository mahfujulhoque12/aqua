import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import Image from 'next/image'
import notice from '/public/notice/notic.png'
const Notice = () => {
  return (
    <section className="py-5 md:py-10">
        <MaxWidthWrapper>

        <div>
        <h2 className="w-full text-black font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
          Some Important Notice
          </h2>
          <p className="text-gray-500 mt-5 font-semibold text-sm md:text-base">
          Auqa expertise covers all aspects of NRW and Leak Detection studies starting from Intake to WTP to transmission and distribution systems and all the way to customer property connections. The major disciplines covered in water audits and NRW studies are:
          </p>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 mt-8'>
                <div>
                    <Image src={notice} alt="img" width={800} height={400}/>
                </div>
                <div>
                <p className="text-gray-500 mt-5 font-semibold text-sm">
          Auqa expertise covers all aspects of NRW and Leak Detection studies starting from Intake to WTP to transmission and distribution systems and all the way to customer property connections
          </p>

          {/* List Items */}
  
            <li  className="text-sm font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li>
            <li  className="text-sm font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li> 
            <li  className="text-sm font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li> 
            <li  className="text-sm font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li>  
            <li  className="text-sm font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li>
            <li  className="text-sm font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li>
            <li  className="text-sm font-medium text-gray-700 mt-3">Ground water potential studies and abstraction</li>
            </div>

            </div>
        </div>
        </MaxWidthWrapper>
   
    </section>
  )
}

export default Notice