"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const faqs = [
    {
        question: "What is a valid prescription?",
        answer: `A Correct prescription has the following information:
      - Name and address of the Doctor
      - Doctor's stamp or signature
      - Patient name and age
      - Date of visit or date of the prescription
      - Name of medicine, dosage, strength and duration for which it is required and direction to take the medicine`,
    },
    {
        question: "How can I place my order as I am unable to read the prescription?",
        answer: "You can upload your prescription, and our experts will assist you in placing your order.",
    },
    {
        question: "Why do I need to upload a prescription for medicines?",
        answer: "Uploading a prescription ensures that the medicines are prescribed by a qualified doctor.",
    },
    {
        question: "Do you sell genuine medicines?",
        answer: "Yes, all our medicines are sourced from licensed pharmacies and manufacturers.",
    },
    {
        question: "Can I place an order for multiple patients in a single order?",
        answer: "Yes, you can place an order for multiple patients in a single order by uploading their prescriptions.",
    },
    {
        question: "Can i save multiple addresses in my account?",
        answer: "Yes, you can place an order for multiple patients in a single order by uploading their prescriptions.",
    },
    {
        question: "How much time take to deliver my order",
        answer: "Yes, you can place an order for multiple patients in a single order by uploading their prescriptions.",
    },
    {
        question: "How are temperature sensitive medicines handled?",
        answer: "Yes, you can place an order for multiple patients in a single order by uploading their prescriptions.",
    },
    {
        question: "Can I order medicines in bulk?",
        answer: "Yes, you can place an order for multiple patients in a single order by uploading their prescriptions.",
    },
    {
        question: "Do you offer priority delivery if we pay additional charges?",
        answer: "Yes, you can place an order for multiple patients in a single order by uploading their prescriptions.",
    },
];

const Needhelp = () => {
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center">
                <div className="w-full md:w-1/3 mt-4">
                    <h1 className="text-md md:text-2xl font-bold text-center">A GUIDE TO DRUGCARTS</h1>
                    <div className="flex justify-center items-center">
                        <Image
                            priority
                            src={IMAGES.NEEDHELP}
                            alt="Ayush Banner"
                            className="w-[100%] h-[500px] rounded my-6 mx-auto"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="border-[1.5px] my-2 m-4">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">The services we offer</h1>
                        <p className="p-2">Drugcarts is India's leading digital healthcare
                            platform. From doctor consultations on chat
                            to online pharmacy and lab tests at home,
                            Drugcarts have covered for you.
                            Drugcarts Having delivery over 25 million
                            orders in 1000+ cities till date, we are on a
                            mission to bring "care" to "health" and to
                            give you a flawless healthcare experience.</p>
                    </div>
                    <div className="border-[1.5px] my-2 m-4">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">Book lab tests</h1>
                        <p className="p-2">Drugcarts is India's leading digital healthcare
                            platform. From doctor consultations on chat
                            to online pharmacy and lab tests at home,
                            Drugcarts have covered for you.
                            Drugcarts Having delivery over 25 million
                            orders in 1000+ cities till date, we are on a
                            mission to bring "care" to "health" and to
                            give you a flawless healthcare experience.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="border-[1.5px] my-2 m-4 h-[250px]">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">Access medical and health information</h1>
                        <p className="p-2">Drugcarts provides you with medical information which is curated, written and verified by experts,accurate and trustworthy. Drugcarts experts create high-quality content about medicines, diseases, lab investigations,
                            Over-The-Counter (OTC) health products,
                            Ayurvedic herbs/ingredients,
                            and alternative remedies.</p>
                    </div>
                    <div className="border-[1.5px] my-2 m-4 h-[245px]">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">Consult a doctor online</h1>
                        <p className="p-2">If patient has any health query?
                            Patient can Consult a doctors online
                            from the comfort of your home for free.
                            Patient can Chat privately
                            with our registered medical specialists to
                            connect directly with verified doctors.
                            Your privacy is guaranteed.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap h-62 justify-center items-center">
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`flex justify-between w-full p-4 text-left text-lg font-medium focus:outline-none ${openIndex === index ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                                    }`}
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <ArrowUpwardIcon className="w-6 h-6" />
                                ) : (
                                    <ArrowDownwardIcon className="w-6 h-6" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="p-4 text-gray-600 bg-white">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
                <div>
                    <div className="flex justify-center items-center">
                        <Image
                            priority
                            src={IMAGES.NEEDHELPDRUG}
                            alt="Ayush Banner"
                            className="w-[100%] h-[500px] rounded my-6 mx-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full py-4">
            <h1 className="font-bold text-xl m-4">POLICY</h1>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <div className="border-[1.5px] my-2 m-4 h-72">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">Return policy</h1>
                        <p className="p-2">
                        1. Delivered Poduct’s do not match your order <br/>
2. Delivered Poduct’s are past or near to its expiry date
(medicines with an expiry date of less than 03 months shall be considered as near expiry) <br/>
3. Delivered Poduct’s were damaged in transit (do not to accept any product which has a tampered seal) <br/>
4. The request will not be accepted if it is raised after 7 days of order delivery.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="border-[1.5px] my-2 m-4">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">Shipping policy</h1>
                        <p className="p-2">Orders with a payable amount of Rs. 1100 or more will qualify for free delivery. 
                        A delivery charge of Rs. 25 will be applied otherwise.</p>
                    </div>
                    <div className="border-[1.5px] my-2 m-4">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">Data protection policy</h1>
                        <p className="p-2">We at Drugcarts use the highest level of data security. Drugcarts uses Secure 
Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data
Security Standard (PCI DSS) compliant.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-2xl flex justify-center items-center mx-auto mt-4">
            <Image src={IMAGES.PRIVACYPOLICY} alt="Privacy Policy" className="w-[100% h-[500px] mx-auto"/>
            </div>
            </div>
            <div className="flex flex-wrap h-62 justify-center items-center">
                <div className="my-5 w-full">
                    <div className="border-[1.5px] my-2 m-4">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">What are your current offers?</h1>
                        <p className="p-2">Drugcarts are always running various offers on our platform to provide great deals to our users.</p>
                    </div>
                </div>
                <div>
                    <div className="border-[1.5px] my-2 m-4">
                        <h1 className="text-md md:text-xl text-white p-2 bg-[#35A24D] mb-4">Cancellation policy</h1>
                        <p className="p-2">
                        People can cancel the order for the product before we ship it. Orders once shipped cannot be cancelled.
People can cancel the order for a medical test before the collection of samples happens.
There may be certain orders that Drugcarts partners are unable to accept and service. Such orders may need to be cancelled. 
Some such situations that may result in your order being cancelled include non-availability of the product or quantities ordered by you or inaccuracies or errors in pricing information specified by our partners.
Drugcarts also reserves the right to cancel orders that classify as ‘Bulk Order’ as determined by Drugcartsas per certain criteria. Drugcarts order can be classified as ‘Bulk Order’ if it meets with the below mentioned criteria, which may not be exhaustive,
<br/>
1. Ordered Products are not for self-consumption but for commercial resale <br/>
2. More than 1 order placed for same product at the same address<br/>
3. Bulk quantity of the same product ordered<br/>
4. Invalid address given in order details<br/>
5. Any malpractice used to place the order
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Needhelp;