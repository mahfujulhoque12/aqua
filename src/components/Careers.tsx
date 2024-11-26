import MaxWidthWrapper from './layout/MaxWidthWrapper';
import Link from "next/link";

const Careers = () => {
    return (
        <section className="py-5 md:pt-5 pb-10">
            <MaxWidthWrapper>
        <div> 

            <h2 className="w-full text-black    font-semibold text-lg sm:text-xl md:text-[50px] font-roboto md:leading-[60px]">
            Careers
            </h2>

            <p  className="text-gray-500 mt-5 font-semibold text-sm md:text-base">STC is an equal opportunity employer and does not discriminate on gender, religion or race. Merit is the only criteria for selection.</p>
            <p  className="text-gray-500 mt-3 font-semibold text-sm md:text-base">STC aims at developing, enhancing and retaining a professional team of employees to work on and deliver results on our challenging projects.</p>
            <p  className="text-gray-500 mt-3 font-semibold text-sm md:text-base">STC aims to ensure that all its employees and associates work in an environment that is transparent, fair and provides opportunities to display skills and innovative ideas.</p>
            <p  className="text-gray-500 mt-3 font-semibold text-sm md:text-base">STC encourages employees to think out of the box and rewards achievements and hard work through suitable incentives and promotions.</p>
            <p  className="text-gray-500 mt-3 font-semibold text-sm md:text-base">To see the job openings currently available please <Link href="#" className="text-green-400 underline"> click here. </Link></p>
            <p  className="text-gray-500 mt-3 font-semibold text-sm md:text-base">In case you do not see a posting suitable for you but would like us to have a look at your resume please <Link href="#" className="text-green-400 underline"> click here. </Link> to post your resume online.</p>
            <p className="text-gray-500 mt-3 font-semibold text-sm md:text-base">
                    For any other queries, please send a mail to Director HR on{" "}
                    <a
                        href="mailto:rupali@stc.co.in"
                        className="text-green-400 underline hover:text-green-500"
                    >
                        rupali@stc.co.in
                    </a>
                    </p>




        </div>
        </MaxWidthWrapper>
        </section>
    )
}

export default Careers;