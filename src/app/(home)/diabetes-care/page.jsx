"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const DiabetesCare = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center mx-auto">
                <div className="w-full md:w-[58%] m-2 rounded-md">
                    <Image priority src={IMAGES.SANITIZATION} alt="Diabetes Care" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <div className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Diabetes Care</h2>
                    <p className="text-sm mb-6">Diabetes Care</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mb-2 ">Name</label>
                        <input
                            type="text" name="name"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <label className="w-[30%] block md:mt-4 md:mb-2">Mobile</label>
                        <input
                            type="tel" name="mobile"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mt-4 md:mb-2">E-Mail</label>
                        <input
                            type="email" name="email"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <label className="w-[30%] block  md:mt-4 md:mb-2">City</label>
                        <input
                            type="text" name="city"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[50%] mt-6 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                    >
                        Book Now
                    </button>
                </div>
            </div>
            <div className="flex">
                <div className="w-full md:w-[68%] p-2">
                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">What is diabetes ?</h1>
                        <p className="my-2"> Diabetes is a metabolic disorder and chronic in nature associated with the elevation of glucose levels in the blood due to decreased production of the protein-based hormone called insulin by pancreas, which is responsible for the metabolism of the glucose in the cells of the body and due to the decreased sensitivity to insulin.</p>
                        <Image priority src={IMAGES.VACCINATION1} alt="Sanitization" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">A Program Plan for diabetes care</h1>
                        <p className="my-2">Diabetes Care Program is mainly to help people to manage their Diabetes in a natural and comfortable way. Our expert counselors work with you to help to track, manage and lower your blood sugar levels. Our counselor will provide your personalized diet plan depending on your preferences and lifestyles.</p>
                        <p className="my-2">Our team of Diabetic nurses and nutritionists work closely (on phone) to help them on a range of issues with every patient, the overall aim to reduce blood sugar levels.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">We Offer a pack for Diabetes Care</h1>
                        <p> India’s first comprehensive diabetes management program is planned to help diabetics to manage their blood sugar levels and lead to healthy life. The program is designed in consultation with our knowledge partners Belle Sante, who have served thousands of diabetes patients across 32 countries. We all work and help with you 1 Year to become self-sufficient in managing diabetes.</p>
                        <p> <b>DIABETES CARE PACKAGE FOR A YEAR@RS.1299</b></p>

                        <p>• simple Touch Select Plus (SPS) Glucometer</p>
                        <p>• Personal Health Coach</p>
                        <p>• 35 Testing Strips</p>
                        <br />
                        <p> Select Plus Simple Glucometer is a blood glucose monitoring system that has been designed to be simple and hassle free with no setups, coding and buttons. It gives a proper understanding and gives assurance with its color and sound quality.</p>
                        <p> It helps to monitor the blood glucose level with and helps in keeping diabetes and related issues in check with comfort at home.</p>
                        <p> Personal Health Coach: A dedicated Health Coach help and work with you to design your diet and exercise plan to achieve the best results within a month.</p>
                        <p> 35 Testing Strips: That help you get start for testing glucose level.</p>
                    </div>
                </div>
                <div className="w-full md:w-[30%] p-2 border-[1.5px]">
                    <h3 className="text-[16px] font-bold text-center uppercase pb-6 mt-6">Physiotherapy Services</h3>
                    <div className="items-center justify-start gap-2 text-[#ff5e00]">
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Back Pain Treatment at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Sports Injury Treatment at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Post Surgical Rehab at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Paralysis Treatment at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Parkinson Disease Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Cerebral Palsy Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Arthritis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Knee Pain Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Elbow Pain Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Foot Care Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Achilles Tendinitis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Supraspinatus Tendinitis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Spondylosis Treatment at home</h2>
                        <h2 className="text-md font-bold p-3 border-b-2">Ankylosing Spondylitis Treatment at home</h2>
                    </div>
                    <h3 className="text-[16px] font-bold text-center uppercase py-6 mt-6">Our Services</h3>
                    <div className="items-center justify-start gap-2 text-[#ff5e00]">
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Nurse Care at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Elder Care at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Diagnostic at home
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Doctor Consultations
                        </h2>
                        <h2 className="text-md font-bold p-3 border-b-2">
                            Medical Equipment
                        </h2>
                    </div>
                </div>
            </div>

            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">DISCOUNT ON STRIPS REFILL</h1>
                <p>(Discounted Price)</p>
                <p> • Discount 13% 25 strips @ 549 , MRP 625 , </p>
                <p> • Discount 18% 50 strips @ 899, MRP 1095, </p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">DIABETES STATISTICS</h1>
                <p> • 1 out of every 10 people in India is either Diabetic or Pre-Diabetic</p>
                <p> • 1 out of 2 adults with Diabetes is undiagnosed</p>
                <p> • 50 million people suffer from type-2 diabetes.</p>
                <p> • An estimated 3.4 million deaths are caused due to high blood sugar</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Best Package Offers for Diabetes Care From drugcarts</h1>
                <p> Long-term care it’s very expensive. Accordingly health plans and programs need routinely cover long-term care at home or in nursing service.</p>


                <div class="relative overflow-x-auto mt-6">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Diabetes care Packages
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    MRP
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Drugcarts Best Offer price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">SPS Glucometer + 10 testing strips + 1 year diet counseling</td>
                                <td className="px-6 py-4">2,200</td>
                                <td className="px-6 py-4">749</td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">SPS Glucometer + 35 testing strips + 1 year diet counseling</td>
                                <td className="px-6 py-4">3,000</td>
                                <td className="px-6 py-4">1,299</td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4">SPS Glucometer + 60 testing strips + 1 year diet counseling</td>
                                <td className="px-6 py-4">5,500</td>
                                <td className="px-6 py-4">1,749</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default DiabetesCare;