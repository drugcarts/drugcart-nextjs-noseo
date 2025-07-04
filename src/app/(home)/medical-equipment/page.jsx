"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const MedicalEquipment = () => {
    const { serviceUrl } = useSelector((state) => state.serviceData);
    const dispatch = useDispatch()
    const pathname = usePathname();

    let pathSegments = pathname.split("/").filter(Boolean);
    pathSegments = pathSegments.map((segment) => segment.replace(/-/g, " "));

    const urlText = pathSegments[0].split(" ").join("-")

    useEffect(() => {
        if (pathSegments.length > 0) {
            dispatch(GetServiceUrlService(urlText));
        }
    }, []);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            service: serviceUrl?.title || "",
            name: "",
            email: "",
            mobile: "",
            city: "",
        },
        onSubmit: async (data, { resetForm }) => {
            console.log(data);
            await dispatch(PostServiceQuiryService(data, resetForm))
        },
    });

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap h-62 justify-center items-center mx-auto">
                <div className="w-full md:w-[58%] m-2 rounded-md">
                    <Image priority src={IMAGES.EQUIPMENTBANNER} alt="Medical Equipment" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Medical Equipment</h2>
                    <p className="text-sm mb-6">Medical Equipment</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mb-2 ">Name</label>
                        <input
                            type="text" name="name"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            required
                        />
                        <label className="w-[30%] block md:mt-4 md:mb-2">Mobile</label>
                        <input
                            type="number" name="mobile"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.mobile}
                            onChange={formik.handleChange("mobile")}
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mt-4 md:mb-2">E-Mail</label>
                        <input
                            type="email" name="email"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            required
                        />
                        <label className="w-[30%] block  md:mt-4 md:mb-2">City</label>
                        <input
                            type="text" name="city"
                            className="w-[70%] px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.city}
                            onChange={formik.handleChange("city")}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[50%] mt-6 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                    >
                        Book Now
                    </button>
                </form>
            </div>
            <div className="flex">
                <div className="w-full md:w-[68%] p-2">
                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">MEDICAL EQUIPMENT FOR HOME</h1>
                        <p className="my-2 font-bold"> PURCHASE OR RENT MEDICAL EQUIPMENT</p>
                        <p className="my-2"> Hospitalization for patient must have high cost when a patient causes chronic diseases they need proper care and requires medical equipment with qualified attendant and nurses at home.</p>
                        <p className="my-2"> Obtaining medical equipment on rent or purchase has never been more convenient at your doorstep. During difficult phases of life, you or someone might need to depend on the different medical equipment to regain your normal life. Care at home provides a wide range of medical equipment for rent or purchase making healthcare more feasible and affordable cost through drug carts. Don’t worry for equipment supply by the vendor.</p>
                        <Image priority src={IMAGES.MEDICAL1} alt="MEDICAL EQUIPMENT FOR HOME" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Use of medical equipment :</h1>
                        <p className="my-2"><b>Oxygen cylinder</b></p>
                        <p className="my-2"> It’s used to manage in the emergency situation by the people who required medical oxygen due to decreases in level of oxygen in blood.</p>

                        <p className="my-2"><b>Oxygen concentrator</b></p>
                        <p className="my-2"> Mainly used as an inert sources there need long-term oxygen therapy (LTOT) to patients at home.</p>

                        <p className="my-2"><b>Bi-PAP/CPAP</b></p>
                        <p className="my-2"> CPAP is used in the treatment of sleep aponea. It generally needs to deliver single pressure and Bi-PAP is used in inhale and exhale pressure in air ways that have respiratory problem.</p>

                        <p className="my-2"><b>Wheel chair</b></p>
                        <p className="my-2"> It’s used by people for whom walking is difficult or due to physiological illness, injury or disability.</p>

                        <p className="my-2"><b>Cardiac monitor</b></p>
                        <p className="my-2"> Cardiac monitoring is used to identify the heart rhythm disorder and its part of essential need in emergency medicine, and electrocardiography</p>

                        <p className="my-2"><b>Hospital bed</b></p>
                        <p className="my-2"> This is used for bedsores treatment, decubitus pressure ulcers and for chronic bedridden patients, who need to develop pressure sores with low cost.</p>

                        <p className="my-2"><b>Suction machine</b></p>
                        <p className="my-2"> The suction machine used to pull out mucus, saliva, blood, secretions or other fluids for clearing the airway for easy breathing and prevent from aspiration.</p>

                        <p className="my-2"><b>DVT pump</b></p>
                        <p className="my-2"> To deliver with proper compression to blood within the arteries so that blood doesn’t clot.</p>

                        <p className="my-2"><b>Ventilators</b></p>
                        <p className="my-2"> A medical device that provides with oxygen to a patient who are unable to breathe on their own.</p>
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
                <Image priority src={IMAGES.MEDICAL2} alt="MEDICAL EQUIPMENT FOR HOME" className="w-[60%] mb-10" />
                <h1 className="text-md md:text-xl font-bold">WE PROVIDE MEDICAL EQUIPMENT CARE</h1>
                <p className="my-2"> <b>Respiratory Care</b></p>
                <p className="my-2"> Nothing is better than the cure. Our completed range of respiratory devices like advanced homecare ventilators, BiPAP, CPAP, oxygen concentrator, pulse oximeter.</p>

                <p className="my-2"> <b>Sleep Therapy</b></p>
                <p className="my-2"> The diagnostic test package it includes sleep related disorders and management. Sleep study with free CPAP titration for 2 days from drugcarts </p>

                <p className="my-2"> <b>Mobility Care & Geriatric</b></p>
                <p className="my-2"> Drugcarts provide complete range of geriatric and mobility care includes air mattresses, hospital beds, wheelchairs, mobility aids like walker, walking stick etc.</p>

                <p className="my-2"> <b>View Physio Care and Orthopedic surgeries </b></p>
                <p className="my-2"> Orthopedic surgeries like total Knee, hip replacement, patient requires a wide range of equipments.</p>

                <p className="my-2"> <b>Care for cardiac</b></p>
                <p className="my-2"> The medical equipment for care for people suffering from cardiac is ECG, multipara monitor, syringe pump, infusion pump</p>

                <p className="my-2"> <b>Care for mother & Baby</b></p>
                <p className="my-2"> Both them need the best care possible post delivery. Drug carts provide the care products like breast pumps, baby weighing scale, bottle...</p>

            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">HOW CAN WE HELP</h1>
                <p className="my-2"> Get from drugcarts when you need any medical equipment for rent or purchase. Check our full details of medical equipment catalogue for rent or buy delivered at your doorstep through online, via email, a phone call.</p>
                <Image priority src={IMAGES.MEDICAL3} alt="New born baby care" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">NEAR ME MEDICAL EQUIPMENT:</h1>
                <p className="my-2"> Don’t wait for long time and stress yourself for visiting a clinic or hospitals to monitor your treatment. Drug carts provide availability of best medical equipment to buy or rent from market. Just search in Google medical equipments near me and they delivered at your home</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">FAQ’S IN MEDICAL EQUIPMENT</h1>
                <p className="my-2"> <b> Q1: How to take the medical equipment for rent? </b></p>
                <p className="my-2"> A1: To rent a medical equipment, you can either book online (By Visiting: www.drugcarts.com/medical-equipment/), via email (Email: bookings@drugcarts.com) or give a call</p>

                <p className="my-2"> <b> Q2: What are the available equipments at drug carts?</b></p>
                <p className="my-2"> A2: Drug carts a wide range of medical equipment including hospital cot & mattresses, cardiac range, mobility range and respiratory range equipments. Visit the website to view the completed details about medical equipment catalogue.</p>

                <p className="my-2"> <b> Q3: What is the minimum period for equipment rental?</b></p>
                <p className="my-2"> You can take rent equipment on a monthly basis. However, we do ensure flexibility on-need your needs.</p>

                <p className="my-2"> <b> Q4: Drug carts can provide for purchase of medical equipment?</b></p>
                <p className="my-2"> A4: Drug carts can provide for purchase of medical equipment?</p>

                <p className="my-2"> <b> Q5: Whether I need to collect the medical equipment from drucarts?</b></p>
                <p className="my-2"> A5: Drugcarts deliver the medical equipment to home at your doorstep.</p>
                <Image priority src={IMAGES.MEDICAL4} alt="Dietitian" className="w-[60%]" />
            </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default MedicalEquipment;