"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const MedicalAttendant = () => {
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
                    <Image priority src={IMAGES.MEDICALATTENDBANNER} alt="Medical Attendant" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Medical Attendant</h2>
                    <p className="text-sm mb-6">Medical Attendant</p>
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
                        <h1 className="text-md md:text-xl font-bold">Medical Attendant :</h1>
                        <p className="my-2"> The Medical assistant job falls under the category of nursing assistant or caregivers. The caregivers are particularly experienced and trained for the post hospitalization and post surgical care or long term medical care. Besides medical attendant are complete enough to take care for you and your family members with hygiene related care.</p>
                        <p className="my-2"> Our care manager works closely for you in identifying the need of basic health condition with highly professionals and complete medical attendant for your family members with daily care.</p>
                        <Image priority src={IMAGES.MEDICALATTEND1} alt="CANCER CARE" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Medical caregivers will take care of :</h1>
                        <p className="my-2"> • Feeding through ryles tube/NG tube</p>
                        <p className="my-2"> • Daily monitoring of outpatient procedure</p>
                        <p className="my-2"> • Urine bag care</p>
                        <p className="my-2"> • Nebulization</p>
                        <p className="my-2"> • Assistance for bathing/cleaning/toileting</p>
                        <p className="my-2"> • Doctors equipment</p>
                        <p className="my-2"> • To sharpen the memory the discussing about the current and historic events</p>
                        <p className="my-2"> • Oral medication and injection</p>
                        <p className="my-2"> • Oxygen administration</p>
                        <p className="my-2"> • Bed sore dressing</p>
                        <p className="my-2"> • Dressing for wound care</p>
                        <p className="my-2"> • Promote the active lifestyle by walking</p>
                        <p className="my-2"> • Outing to socialization</p>
                        <p className="my-2"> • Rehabilitation</p>
                        <p className="my-2"> Our assistant are caregivers are able to assists the patient mobility, maintaining hygiene and take care of the family.</p>
                        <Image priority src={IMAGES.MEDICALATTEND2} alt="CANCER CARE" className="w-full mx-auto" />
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
                <h1 className="text-md md:text-xl font-bold">When caregivers are needed for you?</h1>
                <p className="my-2"> <b>Elder Care</b></p>
                <p className="my-2"> In your family the elder ones their needs support and assistance with daily activities, we will take care and understand about them self. Service for 12 / 24-hr trained attendant at home.</p>

                <p className="my-2"> <b>Mother and Baby Care</b></p>
                <p className="my-2"> The mother and newborn need constant attention while feeding, bathing and housekeeping. The support of trained caregivers will provide a care with wonders.</p>

                <p className="my-2"> <b>Health and Lifestyle Management</b></p>
                <p className="my-2"> If your loved one needs help moving around and should be monitored regularly, a trained attendant is exactly need basic health condition with highly professional with proper exercise and maintain hygiene and lead your happy life.</p>

                <p className="my-2"> <b>Post-Operative Support </b></p>
                <p className="my-2"> Looking help from someone who had undergone surgery leads to be stressful for the family. A trained attendant can make things simple by keeping a check on the patient’s and monitoring the health for their essential needs and supporting the family.</p>

                <p className="my-2"> <b>Benefits of caregivers</b></p>
                <p className="my-2"> • 24*7 availability for service </p>
                <p className="my-2"> • Personal assistance</p>
                <p className="my-2"> • Special visit at home</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Why choose our medical Attendants Service at home?</h1>
                <p className="my-2"> • You receive complete care at home</p>
                <p className="my-2"> • We provide about 1,50,000+ happy customers</p>
                <p className="my-2"> • Our medical attendants are supervised by senior nurses and doctors and healthcare professionals</p>
                <p className="my-2"> • They are well trained and their backgrounds are verified</p>
                <p className="my-2"> • Health manager assign you an attendant in such a way that he or she speaks a language you are comfortable with the service</p>
                <p className="my-2"> • We’re the suggesting homecare partner who are leading hospitals</p>
                <p className="my-2"> • We’re affordable, accountable and feasible.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Why we choose medical assistant team?</h1>
                <p className="my-2"> • Experienced Team with our professionals attendants service</p>
                <p className="my-2"> • Certified nurses and attendants provide professional attendant service.</p>
                <p className="my-2"> • constantly trained for nurses to get rid of all situations</p>
                <p className="my-2"> • Special Abilities Patient Care needs special attention understand by attendants</p>
                <p className="my-2"> • 100% verified for patients at every stage of process.</p>
                <p className="my-2"> • Thoroughly evaluated care plans and follow medical practices and guidelines</p>
                <Image priority src={IMAGES.MEDICALATTEND1} alt="Medical Attendant" className="w-[60%]" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">We will help you?</h1>
                <p> Our medical attendants provide care to those in need medical care for post operation and surgeries, in the comfort at their homes. Caregivers will help with personal grooming, feeding, mobility, oral medication, monitoring of patient and exercise etc. A trained attendant will take care of your requirement and your needs for 12 hours or 24 hours through drug carts service at your home.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">FAQ’s</h1>
                <p className="my-2"> <b> Q1: What are the responsibilities of drug carts Attendant?</b></p>
                <p> A1: A trained attendants will provide you with administering oral medication, managing feeding tubes, assistance in ambulation, monitoring vitals or patients, personal grooming for the patient and more.</p>

                <p className="my-2"> <b> Q2: Will the medical attendant wash the clothes and utensils for the family?</b></p>
                <p> A2: No, our medical attendant will only help the patient to provide their daily activities.</p>

                <p className="my-2"> <b> Q3: Whether they are medically qualified for medical attendants?</b></p>
                <p> yes, our medical attendants are medical professionals and we serve to train our attendants for basic medical assistance for daily living life.</p>

                <p className="my-2"> <b> Q4: In drug carts service the medical attendants are reliable?</b></p>
                <p> A4: Yes, we do a complete background verification of our attendants before recruiting and we also provide them training advance to appointing them a patient.</p>

                <p className="my-2"> <b> Q5: How long the medical attendants stay at my home?</b></p>
                <p> A5: You can take long term or short term care for your family. We can provide for 12-hr or 24-hr medical attendant service as per the requirement.</p>

            </div>

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default MedicalAttendant;