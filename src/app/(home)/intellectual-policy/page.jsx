"use client";
import Link from 'next/link';
import Image from "next/image";
import { IMAGES } from "@/components/common/images";


const IntellectualPolicy = () => {
    return (
        <section className="max-w-7xl mx-auto mt-3">
            <h1 className='text-md md:text-xl font-bold text-[#4C4C95] p-2 border-t-[1.5px] border-b-[1.5px] text-center'>
                Intellectual Property Rights (IP) Policy
            </h1>
            <Image
                priority
                src={IMAGES.INTELLECTUAL}
                alt=" Intellectual Property Rights (IP) Policy"
                className="w-[30%] mx-auto"
            />
            <div className='border-[1.5px] p-4 my-4'>
                <p className='my-2'> This intellectual property infringement policy, also referred to as IP Policy should be read along with our terms and conditions and editorial policy in use available at our website.</p>
                <p className='my-2'> The domain name <b>www.drugcarts.com</b> and mobile application “Drugcarts”(Ios and Android) collectively known and referred as “website” is solely owned and operated by Drug Carts Private Limited , a company duly incorporated under the Companies Act, 2013 (hereinafter referred to as <b>“Drugcarts”, “company”, “we”, “us”).</b> </p>
                <p className='my-2'> The terms and conditions laid down in our IP Policy is legal and binding on and between the customers <b>(referred to as “you”, “yours” or the “user”)</b> on one part and Drugcarts on the second part;</p>
                <p className='my-2'> We understand that the Intellectual Property forms the greatest asset of any company and we respect intellectual property rights of all the individuals, companies, for which we strictly prohibit third-party service providers from using the website platform to buy, sell, distribute or advertise, circulate, post the products that might lead to infringement of intellectual property rights of any individual or company. </p>
            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>The term Intellectual property means and includes the following elements :</h2>
                <p className='my-2'> 1. Trademark- brand name, brand logo, tagline etc.</p>
                <p className='my-2'> 2. Copyright pertaining to the blogs, videos, and health related information not available for use at public domain.</p>
                <p className='my-2'> 3. Domain name</p>

                <p className='my-2'> In the course of use of our website, if you happen to come across any material on the website that infringes your intellectual property rights you can notify us by writing an email addressing the query, with the subject matter mentioned- <span className='font-bold'>“IPR Infringement claim”</span>. Please make sure to attach the following information:</p>
                <p className='my-2'> i. The URL(s) through which the claimed infringing material is made available on the Website;</p>
                <p className='my-2'> ii. Identification or description of the claimed infringing material with supporting proof attached with the email.</p>
                <p className='my-2'> iii. Intellectual property that is allegedly being infringed, including evidence of your ownership of the intellectual property rights over the claimed infringing material;</p>
                <p className='my-2'> iv. Your particulars including your full name, address, telephone number(s) and email address and;</p>
                <p className='my-2'> v. A declaratory statement that “you believe in a good-faith belief that use of the claimed infringing material in question and the URL submitted is unauthorized by the rights owner or its licensee, and such use amounts to infringement under law”. </p>
                <p className='my-2'> vi. Such statement shall also declare that the information being provided by You is complete and accurate </p>

            </div>
            <div className='border-[1.5px] p-4 my-4'>
                <h2 className='text-md md:text-xl font-bold py-3'>Claim Redress mechanism : </h2>
                <p className='my-2'> 1. Upon receiving the complaint, you will be provided with an acknowledgement e-mail with a Complaint Number, which will be used for all further communications.</p>
                <p className='my-2'> 2. Once the complaint is received, the back-end team will look into the complaint and verify the same with the particulars attached. This will usually take 10-15 working days, so please be patient.</p>
                <p className='my-2'> 3. During the investigation of the complaint, if the company requires any additional information in support of your claim, they shall contact you for clarifications and post investigation, relevant actions for resolving the claims will be taken.</p>
                <p className='my-2'> 4. Upon satisfaction that the complaint is true and genuine and infringement is proved, the infringed material or URL will be taken down or any other appropriate remedy will be provided at the sole discretion of the company and the same shall be notified to you via email.</p>
                <p className='my-2'> If the complaint or claims if found to be incomplete or false or misleading, company reserves the right to refrain from taking any actions against such claims and may reactivate the URL provided in the claim.</p>
                <p className='my-2'> The company also reserves the rights to take any civil or possible criminal actions against such frivolous claims made by you.</p>

            </div>
        </section>
    )
}

export default IntellectualPolicy