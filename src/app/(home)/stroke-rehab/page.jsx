"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const StrokeRehab = () => {
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
                    <Image priority src={IMAGES.SANITIZATION} alt="Stroke Rehab" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#8bbbf3] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Stroke Rehab</h2>
                    <p className="text-sm mb-6">Stroke Rehab</p>
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
                        <h1 className="text-md md:text-xl font-bold">STROKE REHABILATION SERVICE AT HOME</h1>
                        <p className="my-2">Our stroke service is one of the best way to support a patient who had suffered from stroke. The aim of service is to deal with patient who had often suffered by stroke we serve as caregivers for family with physical, emotional and post behavioral changes. Our stroke professional involves family members with customized service as per needs and requirements for stroke. Though drugcarts will provide stroke survivor and family members had opportunity to enjoy happy life and spend quality time together with their dignity and independence,
                        </p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">STROKE</h1>
                        <p className="my-2">A stroke occurs when blood supply to brain cells is reduced, due to the blockge of oxygen and nutrients from blood tissue which leads stop working. It’s also called as cerebro vascular accident or brain attack. As brain cells begin to die, they get affected in such as muscle control, movement of arms; legs, etc. are lost and need medical emergency. Some of signs such as trouble in speaking and understanding, paralysis and numbness, blurred or blackened vision, headache, dizziness, vomiting, altered consciousness.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">How it causes stroke?</h1>
                        <p className="my-2">A stroke can be caused by a blockage of artery in case of ischemic stroke and due to the leaking or bursting of a blood vessel causes a hemorrhagic stroke. The part of brain that supplies blood vessels by clotting due to the blockage of oxygen and nutrients leads to stop working.</p>
                        <p className="my-2">Certainly its changes lifestyle and some of risk factors such as obesity, physical inactivity, consumption of alcohol, high blood pressure, cholesterol, diabetes and smoking etc. increase the chances of causing a stroke. People who are older age of 55 are at a higher risk and so are those who have a genetic history of stroke in family.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">What are the Types of stroke?</h1>
                        <p className="my-2"> They are three types of stroke that need medical emergency due to clotting of blood vessels.</p>
                        <p className="my-2"> 1. Ischemic stroke</p>
                        <p className="my-2"> The stroke happens when blood vessel supplying to blood to brain get blocked by a clots. Treatment includes administrating of tissue plasminogen activator (TPA) directly into an artery of the brain that remove the clot or the use of a catheter. Symptoms are numbness or weakness of your face, arm, or leg, often on one side of the body</p>
                        <p className="my-2"> 2. Hemorrhagic Stroke: </p>
                        <p className="my-2"> This stroke occurs in blood causes bleeding that damages your brain cells and turns into pressure. Treatment is focused on controlling the high blood pressure and preventing of blood vessel with sudden constriction. Symptoms like intense headache, confusion, blurred vision, nausea and sensitivity to lights.</p>
                        <p className="my-2"> 3. Transient ischemic attack: </p>
                        <p className="my-2"> Ischemic stroke when temporary blockage of blood flow to brain called as mini stroke for few minutes. Treatments due to medication, surgery and lifestyle changes. Symptoms like weakness, severe headache, loss of balance.</p>
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
                <h1 className="text-md md:text-xl font-bold">Long term care service with support</h1>
                <p className="my-2"> It covers a variety of health, health-related services that individuals assists the functional limitations due to physical, cognitive, or mental conditions or disabilities with the support. The goal of Long term care service is to facilitate optimal functioning among people with disabilities</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">What is prevention of stroke?</h1>
                <p className="my-2"> * Nutritional diet and healthy life.</p>
                <p className="my-2"> * Maintaining healthy life</p>
                <p className="my-2"> * Doing regular physical activity</p>
                <p className="my-2"> * Avoiding tobacco and alcohol.</p>
                <p className="my-2"> * Medical factors are keeping diabetes, blood pressure and cholesterol under control its also reduce the risk of stroke.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Physiotherapy service for stroke at home</h1>
                <p className="my-2">The stroke mainly affects the brain which controls muscle movement, person may experience with some symptoms like as muscle spasms, balance problems, and joint pain. Regular physiotherapy service ensures that will help in restore mobility, improving health, managing pain and instilling confidence in the patient to be active and involved in daily activities. Physiotherapist will provide regular exercises such as stretching, walking, joints with massage therapy and educate the people.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">When you need most care for stroke with us at home?</h1>
                <p className="my-2"> * Nursing rehabilitation</p>
                <p className="my-2"> * Restore physical functioning</p>
                <p className="my-2"> * Treat problems of movement, coordination and balance.</p>
                <p className="my-2"> * Need daily living activities with assistance</p>
                <p className="my-2"> * Mobility assistance</p>
                <p className="my-2"> * Companionship</p>
                <p className="my-2"> * Swallowing problems and regain communication</p>
                <p className="my-2"> * Caregivers gives education and family from stroke</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Ensuring high quality care with patient at home</h1>
                <p className="my-2"> Treatment and the outcomes </p>
                <p className="my-2"> • Plan for specialized care</p>
                <p className="my-2"> • Online assessment and clinical records</p>
                <p className="my-2"> • Home visit reports of patient</p>
                <p className="my-2"> Clinical audits like hospital</p>
                <p className="my-2"> • Monitoring the daily treatment</p>
                <p className="my-2"> • Weekly audits by chief physiotherapist</p>
                <p className="my-2"> • Monthly on site audits.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Benefits for patients</h1>
                <p className="my-2"> • 50% of savings as compared to hospital</p>
                <p className="my-2"> • Quick recovery on functional abilities and independence</p>
                <p className="my-2"> • Minimize readmission to hospital</p>
                <p className="my-2"> • Doctors for 24X7 clinical supervision and e-reports</p>
                <p className="my-2"> • One shop for stroke rehabilitation service at home</p>
                <p className="my-2"> • Well trained stroke professionals</p>
            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default StrokeRehab