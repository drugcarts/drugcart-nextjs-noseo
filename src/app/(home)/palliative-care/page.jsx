"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const PalliativeCare = () => {
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
                    <Image priority src={IMAGES.NURSINGBANNER1} alt="What Is Palliative Care?" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#7ceb81] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Palliative Care</h2>
                    <p className="text-sm mb-6">Palliative Care</p>
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
                        <h1 className="text-md md:text-xl font-bold">What Is Palliative Care?</h1>
                        <p className="my-2">Palliative care is defined a specialised medical care for individuals who are suffering from serious illnesses. Palliative care aim to provide a comfort and relief from the symptoms, pain and stress for whom undergoing a serious illness. The main goal of palliative care is to ensure for cancer patients or similar patients is to enjoy have a better quality of life – both for them and their families.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">How can be provided?</h1>
                        <p className="my-2">If someone suffering from a serious illness, palliative care nursing is provided by a group of specially-trained nurses, among doctors and specialists who work closely with the patients. Palliative care in India or any other country its contribute with an appropriate for any age person or any stage of illness.It can be provided along with the patient who undergoes normal treatment.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">What are Issues for Palliative Care should be taken?</h1>
                        <p className="my-2"> There are number of issues that palliative care it includes:</p>
                        <p className="my-2"><b>Physical issues:</b> A common physical issues such as pain, loss of appetite, vomiting, shortness of breath and insomnia for palliative care should be taken care at home</p>
                        <p className="my-2"><b>Emotional coping: </b> Palliative cares for cancer contribute resources that help who are in the stress and emotions and a person undergoes chemotherapy. A palliative care chemotherapy is that adding bit of emotional and other support from doctors help patients to cope with.</p>
                        <p className="my-2"><b>Spiritual: :</b> Sometimes with palliative care for cancer, families look for a deeper meaning in their lives. For a person undergoing palliative chemotherapy, a lot of spiritual questions with an expert care about patients and families with beliefs and values from a different angle. This can help them feel more at ease and peace with the situation.</p>
                        <p className="my-2"><b>Needs for Care giving:</b> Palliative care stages can also involve who needs care for family members play a crucial role in cancer care and they have varied needs. Some family members can get overcome by the number of responsibilities upon them. For someone undergoing palliative care chemotherapy, their family member need to be given the strength to patient at that situation.</p>
                        <p className="my-2">The palliative care challenges with the help of a good support system provided with care. </p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">During Cancer What Is Palliative care?</h1>
                        <p className="my-2">Undergoing chemotherapy is necessary during the time a patient is diagnosed with cancer by palliative care and when treatment is no longer the answer. Some advantage like the patient can take palliative care at home while you are going the hospital for chemotherapy.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">How Palliative Care can be assessed by someone?</h1>
                        <p className="my-2">Palliative care can be easily accessed by someone who had a private medical insurance. After that a chat with your doctor, we get special palliative care for the remaining of the period.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">What are Beneficial for Palliative Care?</h1>
                        <p className="my-2">Palliative care has been shown to improve the overall quality of lives, both for the patients and their relatives at home or even in the hospital. Merge with a system of palliative care through diagnosis for a patient can improve their life and mood and enhancing their survival rate. Patients undergoing palliative cancer care in advanced could really get benefit with a good support system.</p>
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">We will Help you?</h1>
                        <p className="my-2">We provide patients with all the support that they require remaining happy and content by palliative treatment at home. During this critical phase they needed trained doctors who are able to provide you with all the requirements and care. At that time, by seeing the results and the benefits of taking palliative care. When you needed, our doctors will provide the best palliative care with the right support with attitude to approach the condition.</p>
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

            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default PalliativeCare;