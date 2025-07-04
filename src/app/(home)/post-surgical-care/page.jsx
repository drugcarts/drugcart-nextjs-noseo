"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const PostSurgicalCare = () => {
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
                    <Image priority src={IMAGES.POSTOPERBANNER} alt="Post Surgical Care" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#8bbbf3] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Post Surgical Care</h2>
                    <p className="text-sm mb-6">Post Surgical Care</p>
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
                            type="tel" name="mobile"
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
                        <h1 className="text-md md:text-xl font-bold">Post Operative Care</h1>
                        <p className="my-2"> Postoperative care in simple terms is a person receives after undergone a surgical procedure to take care. Postoperative care is given immediately in the Postoperative period. As such the post operative care begins in the operating room itself and is followed by the post anaesthesia care unit (PACU) until the period the surgical wound is healed and even continues at the patient’s home</p>
                        <p className="my-2"> The main goal of the Postoperative care is the prevention of any infections at the site of the surgical wound, thereby ensure a complete healing of the surgical incision. Postoperative nursing care also aims to restore a patient’s to his own physical form and mental state.</p>
                        <p className="my-2"> Postoperative care a patient receives depends on the type and length of his /her surgical procedure with the extent of post operative care needed. Some instance an outpatient surgery has different post operative care requirement and an inpatient surgery has a different post op nursing care. Similarly its a complicated surgical procedure with the risk of post operative bleeding, blood clots etc has a completely different post surgery care requirement.</p>
                        <p className="my-2"> For a patient with simple surgical procedure can himself take care of his wound, while in some cases the assistance of professional Postoperative nursing care is required like, in cases of spine surgery, hip surgery, cardio surgery, patients with impaired levels of consciousness etc.</p>
                        <Image priority src={IMAGES.POSTOPER1} alt="Nutritionist" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Guideline for Post Operative Care</h1>
                        <p className="my-2"> The postoperative care guidelines varied for adults and children, for different types of diseases and surgical procedures. Some of the basic postoperative care guidelines are;</p>

                        <p className="my-2"> * Ensuring the comfort of the patient</p>
                        <p className="my-2"> * timely dressing changes with proper </p>
                        <p className="my-2"> * Pain medication should be given as per the prescription </p>
                        <p className="my-2"> * In Deep vein thrombosis the postoperative nursing care involves in the lower leg, giving blood thinning medication, elastic stockings and helping the patient perform foot and ankle exercises for blood circulation and enhance venous return.</p>
                        <p className="my-2"> * The post op nursing care requires close monitoring of the surgical wound and immediate reporting of persistent fever and redness or swelling at the wound site due to infection. </p>
                        <p className="my-2"> * The post op care involves a respiratory therapist to help the patient with deep breathing exercises in case of pneumonia . </p>
                        <p className="my-2"> * In knee stiffness or other joints and bone surgery, the post surgical care requires the assistance of both a physiotherapist and a nurse for postoperative exercises to be done under the control of a physiotherapist, for pain control, for Edema control and for strict adherence to CPM protocol as directed by the doctor.</p>
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
                <h1 className="text-md md:text-xl font-bold">We will Help you?</h1>
                <p className="my-2"> Postoperative care is an essential service of the healing process,a good postoperative nursing care ensures the patient’s complete physical and mental recovery. Post operative care for patients it may be long term or short term and its be simple that involve with elaborate procedure.</p>
                <p className="my-2"> A patient is better off in the warm surrounding in his home in case of long term postoperative nursing care. Depending upon the type of postoperative care is needed at home service. As part of this service our highly experienced team of doctors, nurses and other health professionals as required, would come visit you and provide with care as you feel the comfort at your home. In some cases residential nurses would also stay with the patient for 24*7 monitoring and care.
                    If you need postoperative care at home, Drugcarts helps you with the care of your family and that would ensure a satisfactory recovery of the patient with trust in the most caring manner.</p>
                <Image priority src={IMAGES.POSTOPER2} alt="Post Surgical Care" className="w-[60%]" />
            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default PostSurgicalCare