"use client";
import Link from 'next/link';
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const EditorialPolicy = () => {
    return (
        <section className="max-w-7xl mx-auto mt-3">
            <h1 className='text-md md:text-xl font-bold text-[#4C4C95] p-2 border-t-[1.5px] border-b-[1.5px] text-center'>
                Editorial Policy
            </h1>
            <Image
                priority
                src={IMAGES.EDITORIAL}
                alt="Editorial Policy"
                className="w-[50%] mx-auto"
            />
            <div className='bg-[#E4EDFF] p-4 text-center max-w-5xl mx-auto my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>Legal Disclaimer </h2>
                <p className='my-2'>The contents of the blog are purely for educational purpose and should be considered as an alternative for medical advice. For detailed medical advice please connect to the specialists in the particular field.</p>
            </div>
            <h1 className='text-md md:text-xl font-bold p-2 text-center'>
            Our Content
            </h1>
            <Image
                priority
                src={IMAGES.EDITORIALBANNER}
                alt="Editorial Policy Banner"
                className="w-[40%] mx-auto"
            />
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>Editorial Policy </h2>
                <p className='my-2'> They said you increase your knowledge by spreading them to other, and we, at Drugcarts strongly believe that of all the education, health education is the most important one. Going by the well-known proverb “Health is the best Wealth, we have a team of well- educated and qualified content writers to deliver you the best health related content in a structured manner. Our team consists of content writers having firm knowledge about health care industry and expertise in the area of medical and health related writing. The medical and health content, diet plans, nutrition plans and ideas, tips and tricks to healthy lifestyle and other contents that we publish in our website is curated through a well-structured editorial system with double peer review system with final review by our medical experts.</p>
                <p className='my-2'> Our team ensures that we abide to the code of conduct while we publish the medical and health related content to make sure that the contents are valid, informative, accurate and trustworthy. We strive to uphold the highest standards of medical integrity and deliver the best content possible.</p>

            </div>
        </section>
    )
}

export default EditorialPolicy