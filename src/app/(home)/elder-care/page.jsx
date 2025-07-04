"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";
import { useEffect } from "react";


const ElderCare = () => {
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
                    <Image priority src={IMAGES.ELDERCAREBANNER} alt="Logo" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#FFD233] text-white rounded-md">
                    <h2 className="font-bold text-[16px]">Elder Care</h2>
                    <p className="text-sm mb-6">Worried about the medical needs of your parents back home? Avail the Care Plan package from Drugcarts to ease the worries. To book a Care Plan , begin here</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mb-2 text-white">Name</label>
                        <input
                            type="text" name="name"
                            className="w-[70%] px-3 text-[#000] py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.name}
                            onChange={formik.handleChange("name")}
                            required
                        />
                        <label className="w-[30%] block md:mt-4 md:mb-2 text-white">Mobile</label>
                        <input
                            type="number" name="mobile"
                            className="w-[70%] px-3 py-1 text-[#000] border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={formik.values.mobile}
                            onChange={formik.handleChange("mobile")}
                        />
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 my-2">
                        <label className="w-[30%] block md:mt-4 md:mb-2 text-white">E-Mail</label>
                        <input
                            type="email" name="email"
                            className="w-[70%] px-3 py-1 text-[#000] border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            required
                        />
                        <label className="w-[30%] block  md:mt-4 md:mb-2 text-white">City</label>
                        <input
                            type="text" name="city"
                            className="w-[70%] px-3 py-1 text-[#000] border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <h1 className="text-md md:text-xl font-bold">WHAT IS ELDER CARE?</h1>
                        <p className="my-2">Elder cares also mention as senior care, a special care service planned to meet the specific needs and requirements to senior citizens. Elder care is a wide field that includes different services like assistance living, nursing care, adult daycare and home care. In old age itself there is no reason to consider Elder care, as it is the variety of physical disabilities and diseases that leads a person to view to the available elder care services. A large number of senior citizens still live with their family if their care is jointly undertaken by family members. In Today’s situation, there are some cases when most family members can work and are unable to give proper attention to care to their seniors and such seeking for reliable and efficient eldercare programs.</p>
                        <p className="my-2">Drugcarts provides you a complete healthcare solution for all your needs. Our Care Plans are specially crafted in designed for individual healthcare needs. With a dedicated Health Manager will provide us, to ensure all your healthcare needs are taken care of, rest be assured. Through this plan, we also provide you with services such as Doctor Visits, Diagnostic Services, Nurse, Trained Attendants, Pharmacy, Equipment, Physiotherapy and Nutrition.</p>
                        <Image priority src={IMAGES.ELDER1} alt="Logo" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">HEALTH PRIME FOR DRUGCARTS</h1>
                        <p className="my-2">Drugcarts Health Prime is an annual Healthcare plan, in which every customer gets enrolled with a dedicated Health Manager and takes care of all health requirements for the customer, such as Doctor visits, specialist consultations, lab test etc.</p>
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
            <div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h1 className="text-md md:text-xl font-bold">WHAT ARE THE PLAN INCLUDES HEALTHCARE</h1>
                    <p className="my-2"><b>1) MEDICAL FREE ASSESSMENT</b></p>
                    <p className="my-2"> A complete lab test followed by a senior Doctor, who will do a complete check-up of the patient by visiting at home .</p>

                    <p className="my-2"><b>2) HEALTH MANAGER</b></p>
                    <p className="my-2"> 24X7 dedicated trained manager, who will co-relate with the Doctor, they will take of any care health need of the patient.</p>

                    <p className="my-2"><b>3) PERSONALISED PLAN</b></p>
                    <p className="my-2"> Depending on patients’ needs and Doctor suggestion, a complete annual healthcare plan will be made for each patient, that include services as:</p>
                    <p className="my-2"> * Physiotherapy at Home</p>
                    <p className="my-2"> * Doctor Home Visits </p>
                    <p className="my-2"> * Lab Test </p>
                    <p className="my-2"> * Eye Check-up</p>
                    <p className="my-2"> * Dental Care </p>
                    <p className="my-2"> * Complete Bone Assessment </p>
                    <p className="my-2"> * Specialist Consultations and Much More</p>

                    <p className="my-2"><b>4) DOCTOR VISITS</b></p>
                    <p className="my-2"> Doctor will meet periodically to check the patient’s recovery progress through drugcarts</p>

                    <p className="my-2"><b>5) EMERGENCY CARE COORDINATION WITH PATIENT</b></p>
                    <p className="my-2"> The patient with medical emergency with meet at the time</p>
                    <p className="my-2"><b>6) COMMUNITY ACTIVITIES</b></p>
                    <p className="my-2"> Doctor talks with patient , viewing movie , elder clubs etc</p>
                    <p className="my-2"> <b>Annual Packages</b> Starting at 9000/- 5000/-pa</p>
                    <p className="my-2"> Available in Bangalore, Chennai, Coimbatore, and Delhi. </p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold"> WHEN YOU NEED ELDER CARE?</h3>
                    <p className="my-2"> Eldercare becomes essential when old people start facing troubles with daily life activities like cooking, cleaning, bathing, taking medicines etc, and there is no family member available to look over them. Due to Varied diseases and physical disabilities and also make eldercare mandatory for them, so they can live too long independently with dignity.</p>
                    <p className="my-2"> The type of geriatric care needed depends on the health condition of the old person ,the severity of the problem and the type of care needed. Most people don’t require full-time nurses, while some of them are needed a 24/7 caregiver causes to the severe of their problem.</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold"> PATIENT STORIES – HOW SABITA RATHI FOUND HELP IN DRUGCARTS TO PROVIDE WORLD CLASS CARE FOR HER FATHER?</h3>

                    <p className="my-2"> Though Drugcarts Health Prime service for my father Mr. Jauhar in Bangalore. Dr Yamani Nawani was the first person who called me regarding which plan would be best suited for my father. Dr. Yamini is an very competent manager and physician. She described about Drugcarts services to me in great detail. She also designed a special services plan that would best suit for my father and spent a great time and energy coordinating a plan for dad. She was capable and considering about the needs of an elder Parkinson’s patient and In this situation stunned with her work.</p>
                    <p className="my-2"> She went out of her way to consider special physical therapy needs of Mr. Jauhar and made best suggestion for him. Dr Yamini made an excellent assessment of our current complex family situation and gives some preference to patient. With your lucky to have a physician of with quality working with them.</p>
                    <p className="my-2"> I would like to give my feedback regarding my Drugcarts Health manager Mereena Jose, who was assigned for my father’s case. She has been an excellent health manager. She understand and been very supportive to my father. Mereena has done an excellent job navigating my father’s needs in the context of a current complex family situation. She has regularly made calls and followed up with me and given me updates. I am extremely pleased with Drugcarts services.</p>

                    <p className="my-2"> Mrs. Sabita Rathi, United States</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold">ANNUAL PLAN FOR ELDER CARE</h3>
                    <p className="my-2">Drugcarts has screened a special ‘care plan’ for the elderly. Under which specially trained home attendant for elderly provide a lot of care for their overall physical and mental well being. Under the care plan, if you choose any Drugcarts service worth Rs 999, you will be visit 1 Doctor Consultation on call, 1 nutritionist assessment on call, customized care plan, up to 12% offer on prescription medicine and up to 5% offer on equipment purchase for the first purchase.</p>
                    <Image priority src={IMAGES.ELDER2} alt="Logo" className="w-[60%] mx-auto" />
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">BENEFITS OF A CARE PLAN </h3>

                    <p className="my-2"> <b> Any Drucarts Service worth Rs. 999/-</b></p>
                    <p className="my-2"> Avail any Drugcarts service worth Rs. 999/-. Drugcarts specialized in Diagnostics, Physiotherapy, Nutrition, Nurse, Trained Attendants, Elder Care, Doctor Consultations, Mother & Baby Care, Vaccination, & Surgery Assistance makes comfort at your home.</p>

                    <p className="my-2"> <b> Personal Health Manager</b></p>
                    <p className="my-2"> As a member of our Care Plan, a dedicated Health Manager is allocate job for you, a single point of contact with Drugcarts, book an appointment, general queries on your health, or a medical query.</p>

                    <p className="my-2"> <b> Doctor Consultation</b></p>
                    <p className="my-2"> For 1 Doctor Consultation on call worth Rs. 200/- makes comfort at your home.</p>

                    <p className="my-2"> <b> Nutrition Assessment</b></p>
                    <p className="my-2"> For 1 Nutrition Assessment on call worth Rs. 200/- that comfort at your home.</p>

                    <p className="my-2"> <b> Customised Care Plan</b></p>
                    <p className="my-2"> Everone is unique. Based on your medical condition and requirements, the medical team at Drugcarts creates a customised care plan free of cost. Customised care plans cost between Rs. 2500 to Rs. 3000.</p>

                    <p className="my-2"> <b> Online Checking of Health Records </b></p>
                    <p className="my-2"> Online health records are updated on our portal and you can be viewed by you or your guardian at anytime from anywhere.</p>

                    <p className="my-2"> <b> Discounted Medicine Home Delivery</b></p>
                    <p className="my-2"> Avail 12% off in home delivery of pharmacy in all orders are available..</p>

                    <p className="my-2"> <b> Discounted Equipment (Rentals & Purchase)</b></p>
                    <p className="my-2"> Home delivery of Equipment (Rental & Purchase) is now available. Avail 5% off on equipment purchase and 10% off on equipment rentals are available for home delivery.</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2"> ELDERLY CARE/SENIOR CARE ASSISTED LIVING AT HOME</h3>

                    <p className="my-2"> Elderly Care at Home i.e. Geriatric Care is making assistance in daily activities like bathing, toileting, feeding, walking etc. From Drugcarts, we act as a close companion with your loved ones and we will understand about maintaining good hygiene, diet, and medications as guided by you and your family doctor. Home care plays an active role in developing the mental health for your loved one through various activities such as by listening and talking to them. To the best care are provided for old age person, as we make emotional connections and with a high level of patience and politeness by caregivers.</p>
                    <p className="my-2"> Yes, it is sometimes difficult to undestand that your parent/loved one has reached this stage in life, we need to take continuous caretaking or long-term assistance. We would understand and have developed plans for home care for the elderly that promote their freedom while taking care of them in the comfort as their own homes. By evaluating your loved one's healthcare needsto work with you and your doctor, will meet a periodic visit to elder ensure their well-being.</p>
                    <p className="my-2"> Our goal is to lend a helping hand to those who have less time to take care of the family's health due to their professional commitments, or because they just wont be live close like parents. With our senior citizen the home care services for the elderly, we provide good care of your parents by constant monitoring by their physical condition and helping in reducing their time to visits the hospital by organizing visits at your home by a Doctor or a Nurse or a Physiotherapist, etc.</p>

                </div>
            </div>
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
                <h2 className="text-md md:text-xl font-bold my-2">FAQ</h2>
                <p className="my-2"> <b> Q1: What is senior care assistance living at home? </b></p>
                <p className="my-2"> A1: Assistance living is supportive to senior care. Assistance living care is good for seniors they no need to live alone. It helps with the daily tasks of daily living activities such as dressing, bathing, toileting, feeding, walking, medication monitoring and the companionship.</p>

                <p className="my-2"> <b> Q2: What is domiciliary care?</b></p>
                <p className="my-2"> A2: Personal care for seniors at their own homes and help elders in maintaining their quality of life and freedom. Its helps people with disability or illness, from which they may suffer, and allows them to attain and maintain freedom with the comfort at their own home.</p>

                <p className="my-2"> <b> Q3: What you need for old age and mention the main chores and responsibilities at home?</b></p>
                <p className="my-2"> 1. Understand the elderly and their needs.</p>
                <p className="my-2"> 2. Helping with personal care like washing, toilet assistance, and dressing, etc.</p>
                <p className="my-2"> 3. Diet and Medication.</p>
                <p className="my-2"> 4. Health check-ups and counseling.</p>

                <p className="my-2"> <b> Q4: In which cities is 24x7 elderly care service available?</b></p>
                <p className="my-2"> A4: Our 24x7 home services are available for the elder in Chandigarh, Punjab, Haryana, and Himachal. We can arrange for visits, care on an hourly basis and can be wait for a full 24 hours (rotating staff or single resident staff).</p>

                <p className="my-2"> <b> Q5: How much does cost for elderly home care?</b></p>
                <p className="my-2"> A5: It depends upon the type of care that you need for your elder. We would provide care starting from a short visit and up to 24 hours a day. There is no fixed cost of the service and it should surely be clarified at the initial a stage.</p>

            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <p>Save Money & Time : Book a appointment for your convenience and save your time and money.</p>
            </div>
        </section>
    )
}

export default ElderCare;