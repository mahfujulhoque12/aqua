"use client"
import MaxWidthWrapper from '@/components/layout/MaxWidthWrapper'
import about2 from '/public/about/about2.png';

import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';

type Data = {
    id:number;
    fristData:string;
    secData:string;
}

const data:Data[] = [
    { id:1,fristData: "Engineers", secData: "520" },
    { id:2,fristData: "Soft Skills ( IT / Env / Social)	", secData: "15" },
    { id:3,fristData: "Architects", secData: "10" },
    { id:4,fristData: "Admin and Support staff	", secData: "20" },
    { id:5,fristData: "TOTAL	", secData: "565" },
 


  ];

const About = () =>{
  const pdf = '/example.pdf'

  const handlePdf = () =>{
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'example.pdf';
    link.click();
  }

    return (
        <section>
        <MaxWidthWrapper>
        <div>
         
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='rounded-md'>

            <Image src={about2} alt='img' width={1500} height={500} className='h-[350px] md:h-[500px] object-contain ' />
              </div>

              <div className="flex flex-col justify-center ">
                  <h2 className="w-full text-black mt-8   font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
                  Our Company
                  </h2>
                  <p className='text-base font-medium text-gray-700 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus unde placeat, repellendus natus culpa blanditiis fugiat voluptate dolorem iste voluptatibus saepe, facere, ipsa asperiores consequatur provident nihil animi rem</p>

                  <div className="mt-3">
                    <button
                    onClick={handlePdf}
                     className="bg-gradient-to-t from-[#20B038] to-[#60D66A] px-5 py-3 rounded font-semibold text-base text-white flex items-center gap-2 transition-all duration-500 hover:bg-gradient-to-t hover:from-[#1d623a] hover:to-[#20b14e]">
                      Download Company Profile <FaLongArrowAltRight size={20} />
                    </button>
                  </div>

              </div>
            </div>


            {/* history start */}
            <h2 className="w-full text-black mt-8   font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
            History
            </h2>
            
            <p className='text-base font-medium text-gray-700 mt-2'>AQUA Consultant & Associates Limited  was established in the year 1976 by Mr. Mahavir Shah (1933 – 1988) with the objective of providing professional services in the field of urban Infrastructure. Mr. Shah had previous experience of working with major American consulting firms in the USA before returning to India to set up auqa. Mr. Shah was also one of the founder members of the Indian Water Works Association.</p>

            <p className='text-base font-medium text-gray-700 mt-3'>From its humble beginnings with its head office in Mumbai, auqa won its first major assignment in 1978 for the World Health Organization to prepare a Master Plan for water supply and sewerage for the city of Chennai (Pop: 4 Million) in India. </p>

            <p className='text-base font-medium text-gray-700 mt-3'> Subsequent to this auqa bagged another major assignment for undertaking the feasibility, detailed engineering and tender documentation for water and sewerage facilities for 6 cities and 104 towns in the Mumbai Metropolitan region (Pop: 3 Million).</p>

            <p className='text-base font-medium text-gray-700 mt-3'>Thereafter, auqa has been growing steadily undertaking projects for most of the major cities in India and recently for projects overseas. </p>

            <p className='text-base font-medium text-gray-700 mt-3'>auqa commenced work on overseas projects in the year 2006 with projects in USA, Canada, UAE, Libya, Kuwait, Vietnam, Bangladesh, Srilanka, Tanzania and Qatar. </p>

            <p className='text-base font-medium text-gray-700 mt-3'>It has regularly posted growth in turnover and has always been a profitable company since the date on its inception over three decades ago. </p>

        {/* history end */}

  

        {/* Company Facts start */}
        <h2 className="w-full text-black mt-8   font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
        Company Facts
            </h2>

           <div className='ms-3 md:ms-4'>
           <li className='text-base font-medium text-gray-700 mt-3'>auqa is a firm providing specialized services in Infrastructure Consulting with a strong focus on Water and Wastewater sectors.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa is an ISO 9001-2015 QMS certified company with its main office in Mumbai.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa has branch offices in Chennai and Jaipur and registered office in UAE.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa has project offices in Bangalore, Haridwar, Agra, Pune, Shimla, Amritsar, Dehradun, Kolkata, Patna, Purulia, Chandigarh, Ludhiana, Bhagalpur, Nagaur, Bhopal, Rajkot and a few other places. It has representative offices in Delhi  and Ahmadabad.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>All auqa offices are equipped with modern and latest hardware and software.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa has a collection of 4000 titles in its HO library for topics covering all fields of civil engineering and project management.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa has reported a turnover of over Rs 817 Million for the year 2019-20120.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa is currently handling projects with a capital investment of over USD 2.7 Billion
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa is empaneled with most of the government bodies in India.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa is registered with ADB and has worked on projects funded by JICA / ADB / AfDB / World Bank / AFD / KFW / WHO / GTZ/ Exim Bank India
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa has worked on projects in major cities in India including, Chennai, Kolkata, Delhi, Mumbai, Bangalore, Jaipur, Jammu, Nagpur, Indore, Guwahati, Trivandrum, Ahmedabad, Pune, Shimla, Amritsar, Cuttack, Agra, Dehradun , Shillong and many others.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa is now focusing on increasing its footprints in the consulting markets overseas and has undertaken projects in USA, Canada, UAE, Libya, Kuwait, Uganda, Eswatini, Rwanda, Malawi, Mozambique, Vietnam, Bangladesh, Sri Lanka, Zanzibar, Maldives, Kenya, Tanzania and Qatar.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3'>auqa is also focusing on the overseas outsourcing market for major contractors and consultants for services related to designs, drawings and estimation.
            </li>
           </div>


        {/* Company Facts end */}

        {/* Organization start */}
        <h2 className="w-full text-black mt-8   font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
        Organization
      </h2>

            <p className='text-base font-medium text-gray-700 mt-3'>auqa is a 100% family held Private Ltd Company.</p>
            <p className='text-base font-medium text-gray-700 mt-3'> auqa is guided by a Board of Directors consisting of representatives of major shareholders and professionals. The Board of Directors is headed by the Chairman. The Managing Director is supported by the Executive Director, Director (Operations), Director (Finance) and Director (HR). They are supported by three Vice Presidents each looking after one region.</p>

            <p className='text-base font-medium text-gray-700 mt-3'>On the operational level each project is assigned a Team Leader who reports to the Vice Presidents who in turn report to the Directors. </p>

            <p className='text-base font-medium text-gray-700 mt-3'> The breakup of regular staff with auqa is given below. In addition auqa has a long and strong working relationship with over 40 senior experts from the industry and academics in various specializations for association on a project to project basis.</p>

            <div className="overflow-x-auto mt-6 py-3">
  <table className="table-fixed w-full border-collapse border border-gray-300">
    <tbody>
      {data.map((row) => (
        <tr key={row.id} className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2 bg-gray-100 w-1/2">{row.fristData}</td>
          <td className="border border-gray-300 px-4 py-2 w-1/2">{row.secData}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

 {/* Organization end */}

 {/* Vision-Mission-Values start */}
 <h2 className="w-full text-black mt-8   font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
 Vision-Mission-Values
</h2>
<h3 className='underline text-lg  md:text-2xl text-gray-800 font-semibold mt-3'>Vision</h3>

<p  className='text-base font-medium text-gray-700 mt-3'>auqa aims to constantly grow to become a market leader in the urban infrastructure consulting field in India and to increase share of overseas work to half of its turnover by the year 2020.</p>

<h3 className='underline text-lg mt-5 md:text-2xl text-gray-800 font-semibold '>Mission</h3>

<p  className='text-base font-medium text-gray-700 mt-3'>auqa aims to constantly improve and innovate to have an organization that always provides.</p>
      <div className='ms-3 md:ms-4 mt-5'>

            <li className='text-base font-medium text-gray-700 mt-3' >our clients the best professional services with innovative and futuristic solutions at justifiable costs.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3' >our stakeholders a healthy and cordial atmosphere to work.
            </li>
            <li className='text-base font-medium text-gray-700 mt-3' >our shareholders and business partners a good return on their investments.
            </li>

      </div>

      <h3 className='underline text-lg  md:text-2xl text-gray-800 font-semibold mt-3'>Values</h3>

<p  className='text-base font-medium text-gray-700 mt-3 pb-10'>auqa is committed to conduct its business in an ethical, fair and honest manner and totally within the spirit and framework of the legal requirements of the country that we work in.

</p>

 {/* Vision-Mission-Values end */}


        </div>
        </MaxWidthWrapper>
        </section>
    )
}

export default About;