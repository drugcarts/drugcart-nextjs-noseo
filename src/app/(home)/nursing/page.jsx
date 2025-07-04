"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const Nursing = () => {
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
                    <Image priority src={IMAGES.NURSINGBANNER} alt="Logo" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#FFD233] rounded-md">
                    <h2 className="font-bold text-[16px]">Elder Care</h2>
                    <p className="text-sm mb-6">Worried about the medical needs of your parents back home? Avail the Care Plan package from Drugcarts to ease the worries. To book a Care Plan , begin here</p>
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
                            required
                            value={formik.values.mobile}
                            onChange={formik.handleChange("mobile")}
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
            <div className="flex flex-wrap">
                <div className="w-full md:w-[68%] p-2">
                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">Home Care Nursing</h1>
                        <p className="my-2">In our home we need for nursing support through drugcarts that will help you trained and qualified nurses for home care ,nursing by the team of nurses and doctor to the patients for a medical care at your doorsteps. Home care nursing for the critical care to patients like oxygen administration , tracheostomy care, support on ventilator, NG feed, wound dressings, injections etc.</p>
                        <Image priority src={IMAGES.NURSETYPES} alt="Logo" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Nursing Home Services</h1>
                        <p className="my-2">Drugcarts brings vast experience in nursing care at your doorsteps. Nursing home services is a part of patient care. We will understand emotional of patient and family during hospitalization. With best of nursing home care services ensure the patients health care by nusing home services without any compromises.</p>
                        <Image priority src={IMAGES.NURSETYPES1} alt="Logo" className="w-full mx-auto" />
                        <p className="my-2">Book an appointment now with drugcarts give a short visit for a free services, if you are looking for the best nursing home care services for your patient or elderly. The special team; will visit you for details about patient's medical condition and access the level of nursing support with medical equipment that he/she needs at your doorstep.</p>
                    </div>

                </div>
                <div className="w-full md:w-[30%] p-2 border-[1.5px] hidden md:block">
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 mx-auto place-content-center">
                        <div className="border-[1.5px] p-4 bg-[#88d190] rounded-lg">
                            <h2 className="font-bold">Short Visits</h2>
                            <p>Nursing Visits</p>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#88d190] rounded-lg">
                            <h2 className="font-bold">Day Care</h2>
                            <p>By Nurse</p>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#88d190] rounded-lg">
                            <h2 className="font-bold">Night Care</h2>
                            <p>By Nurse</p>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#88d190] rounded-lg">
                            <h2 className="font-bold">Live in Care</h2>
                            <p>Resident Nursing Care</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h1 className="text-md md:text-xl font-bold">What are Nursing Home Services</h1>
                    <p className="my-2"> Nursing home services is a world wide range of healthcare services that can be easily care at your home. Home nursing services are very cheap, effective medical care than hospitals and nursing home.</p>

                    <p className="my-2"> An in-nursing home service provide personalized nursing care at home offered by a typical hospital while nurse give more concern towards the patient and gets close into the patient’s family with an emotional bond.</p>

                    <p className="my-2"> The home nursing care service had a qualified registered nurse and experienced therapists. And the best quality of service offered by the nurse at your doorstep.</p>

                    <p className="my-2"> Today however, people would have to understand difference between In-Home Care, Home Care and Home Health Care Home Health Care or In-Home nursing service is basically a skilled nursing care, the term In-Home Care refers to non-medical care services like intensive care, companionship with patient and supervision.</p>
                    <p className="my-2"> Home Care Nursing means appointing a team of nurses and nursing assistants under the supervision of a doctor for recovery of a patient in the comfort at their home.</p>
                    <p className="my-2"> Nursing services be mostly with the support of medical equipment along with accessories and medicine to patient with the nursing care plan. Nurses who are hired for job are trained to handle respective medical equipment and medications by the doctor.</p>
                    <p className="my-2"> Once we would defining about the home nursing care services. We would provide a complete quality healthcare, unique treatment options, clinical excellence with patient care at your home. </p>
                    <Image priority src={IMAGES.NURSING1} alt="Logo" className="w-[60%] mx-auto" />
                    <p className="my-2"> Our nurses are trained and certified to undergoing an advanced medical treatments like</p>
                    <p className="my-2"> <b>*</b> Cardiac Care </p>
                    <p className="my-2"> <b>*</b> Ortho Care</p>
                    <p className="my-2"> <b>*</b> Post Surgical Care</p>
                    <p className="my-2"> <b>*</b> Chronic Disease Management</p>
                    <p className="my-2"> <b>*</b> Alzheimer's and Dementia Support</p>
                    <p className="my-2"> <b>*</b> Palliative / End-of-Life Care</p>
                    <p className="my-2"> <b>*</b> Cancer Care</p>
                    <p className="my-2"> <b>*</b> Neo-natal Care and Vaccinations at home care nursing.</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold">Why Nursing service is needed in home?</h3>
                    <p className="my-2">The aim of nursing home service is to take care ofpatient illness or injury and usually patient with wound care for an infection or surgical care and nursing care provide a, Intravenous, injections, or nutrition therapy, rehabilitation therapies and monitoring serious illness and unstable health status.</p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 mx-auto place-content-center">
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.DRESSINGCARE} alt="Care for dressing" className="w-24 mx-auto" />
                            <h2 className="font-bold">Care for Dressing</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Wound Dressing</li>
                                <li>Post - Operative Dressing</li>
                                <li>Suctioning Dressing</li>
                                <li> Burn Dressing</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.INTENSTIVECARE} alt="Intensive Care" className="w-24 mx-auto" />
                            <h2 className="font-bold">Intensive Care</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Care on Ventilator</li>
                                <li>Cardiac Monitoring</li>
                                <li>Oxygen Administration</li>
                                <li>BiPAP / cPAP Administration</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.INJECTIONS} alt="Home Care Injections" className="w-24 mx-auto" />
                            <h2 className="font-bold">Home Care Injections</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>I/M Injection</li>
                                <li>I/V Injection</li>
                                <li>Subcutaneous or I/D</li>
                                <li>Subcutaneous or I/D</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.NASITUBE} alt="Administration of Nanogastric Tube" className="w-24 mx-auto" />
                            <h2 className="font-bold">Administration of Nanogastric Tube</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>NG Tube Carer</li>
                                <li>NG Tube Feeding</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.URINACAPABLE} alt="Administration of urine cathether" className="w-24 mx-auto" />
                            <h2 className="font-bold">Administration of urine cathether</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Urine Catheter Care</li>
                                <li>Urine Catheter Change</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.TRACHEOSTOMY} alt="Administration of Tracheostomy" className="w-24 mx-auto" />
                            <h2 className="font-bold">Administration of Tracheostomy</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Tracheostomy Care</li>
                                <li>Tracheostomy Suctioning</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.NURSEE} alt="Nurses Friendly" className="w-24 mx-auto" />
                            <h2 className="font-bold">Nurses Friendly</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Bathing / Spounging</li>
                                <li>Meals Administration</li>
                                <li>Medicine Administration</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.VITALSMONTTING} alt="Monitoring Patient" className="w-24 mx-auto" />
                            <h2 className="font-bold">Monitoring Patient</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Blood Pressure / BP</li>
                                <li>SPO2</li>
                                <li>Blood Sugar</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.URINAECAPA} alt="Nurse Care for Urinary Catheterisation" className="w-24 mx-auto" />
                            <h2 className="font-bold">Nurse Care for Urinary Catheterisation</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Nurses are well trained and help you with the process of Urine catheterisation at your home care.</li>
                                <li>SPO2</li>
                                <li>Blood Sugar</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.NURSEE1} alt="Post Surgical Care" className="w-24 mx-auto" />
                            <h2 className="font-bold">Post Surgical Care</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Post-surgical care is critical step that includes the pain management, feeding to respiratory management, fluid management. Nurses will take care of patient and make comfort at your home.</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.OXYGEN} alt="Oxygen Administration" className="w-24 mx-auto" />
                            <h2 className="font-bold">Oxygen Administration</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Oxygen administration is required in both acute and chronic conditions like trauma, haemorrhage, shock, breathlessness, pulmonary disease, and more. Don’t panic if you require one. Call a Drugcart nurse home and sit back, while she does the needful.</li>
                            </ul>
                        </div>
                        <div className="border-[1.5px] p-4 bg-[#eee] rounded-lg">
                            <Image src={IMAGES.INJECTIONSS} alt="Injection" className="w-24 mx-auto" />
                            <h2 className="font-bold">Injection</h2>
                            <ul className="p-4 list-disc leading-7">
                                <li>Save yourself the trouble of travel and long hospital hour for a minor process like injection administration or IV infusion. Just book with us a home nurse and an experienced and registered nurse will come visit you at home to administer the required injection or IV infusion.</li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold"> Nurses can help u at your home!</h3>
                    <p> Our in-home nurses excel in providing services such as</p>
                    <ul className="p-4 list-disc leading-7">
                        <li>Post-surgical Care</li>
                        <li>Elder care</li>
                        <li>Chronic care</li>
                        <li>Tracheotomy</li>
                        <li>Urinary Catheterization Care</li>
                        <li>Wound care</li>
                        <li>Injections, and IV infusion</li>
                        <li>Diabetic care</li>
                    </ul>
                    <p> Nurses are always supervised by a senior doctor for 12 / 24-hr care from a Drugcarts in-home nurse.</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                        <div className="border-[1.5px] p-4 border-[#eee] rounded-lg">
                            <Image src={IMAGES.DAYSHIFT} alt="Care for dressing" className="w-24 mx-auto bg-blue-400 p-3 rounded-md" />
                            <h2 className="font-bold">Short Visits / Day Care</h2>
                            <p className="my-2">Nurses give support to patient with short visits or up to 12 hours daily, care for monitoring, medications by nurse at home</p>
                        </div>
                        <div className="border-[1.5px] p-4 border-[#eee] rounded-lg">
                            <Image src={IMAGES.NIGHTSHIFT} alt="Care for dressing" className="w-24 mx-auto bg-blue-400 p-3 rounded-md" />
                            <h2 className="font-bold">Night Shift</h2>
                            <p className="my-2">Nursing home care Services can be dedicated for overnight nurses who can actively perform their duties, especially for critical patients</p>
                        </div>
                        <div className="border-[1.5px] p-4 border-[#eee] rounded-lg">
                            <Image src={IMAGES.LIVEIN} alt="Care for dressing" className="w-24 mx-auto bg-blue-400 p-3 rounded-md" />
                            <h2 className="font-bold">Live in Nursing Care</h2>
                            <p className="my-2">24-hour live-in nursing care, which is similar to hospital-stay but at the comfort zone at ur home.</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">What are the benefits for home nursing care? </h3>
                    <p className="my-2"> The benefit of home health care is plenty. Besides being convenient than getting admitted in a hospital or nursing home, the nursing care at home also helps a patient recover sooner, as it has been found that people tend to recover sooner from their illness or ailments when surrounded by their loved ones.</p>
                    <p className="my-2"> * Home health care nurses gives supports diet and nutrition to the patient in your absence</p>
                    <p className="my-2"> * It brings experienced nursing home care make comfortable services at your home.</p>
                    <p className="my-2"> * Nursing care at home helps in managing chronic health conditions and avoids hospitalization.</p>
                    <p className="my-2"> * Home care nursing services help in providing recovery from the illness or injury will take care of patient at home</p>
                    <p className="my-2"> * A nurse offers one – on – one focus and support.</p>
                    <p className="my-2"> * Patient has best health outcomes.</p>
                    <p className="my-2"> * Nurses provide medication management.</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">Disadvantages of nursing care in Hospital</h3>
                    <p className="my-2"> * Inccreased trips to hospital, readmission of hospital for injuries.</p>
                    <p className="my-2"> * Risk of infection does not reduced in hospital</p>
                    <p className="my-2"> * Nurses are not friendly with patient</p>
                    <p className="my-2"> * Appoint doctor for medical supervision for routine checkup and their decision for well being</p>
                    <p className="my-2"> Hence home care nursing best known to reduce trips, reduce risk infection, companionship and decisive medical support to the patient. </p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">What is the Expectation From Nursing Care Services At Home?</h3>
                    <p className="my-2"> Home care nursing starts only after the recommendation of a doctor, and it is important for the patient to see a home nurse as often as a doctor. The nursing services as mentioned before are provided by registered nurses who help in ongoing medical support and rehabilitative care.</p>

                    <p className="my-2"> * Nursing home care take care upon the diet of the patient, routine checking of blood pressure, temperature, heart rate and breathing</p>
                    <p className="my-2"> * Regularly checking the patient prescription are taking any other treatments</p>
                    <p className="my-2"> * Enquire about patient health and any sort of pain </p>
                    <p className="my-2"> * Checking on the safety of the patient ,whether any medical device is needed for the care of the patient and feasibility at home</p>
                    <p className="my-2"> * Educate the patient with self-care</p>
                    <p className="my-2"> * Regularly communicate with the doctor to provide a proper direction of health care.</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">How Much Cost for Home Care Nursing?</h3>
                    <p className="my-2"> The cost of home care nursing services varies depending on the patient illness and the duration of the service sought. the cost of the home care nursing services wont be higher than 20% and 50% .it is cheap as compared to hospital.</p>
                    <p className="my-2"> The home nursing services are much in demand owing to rising hospitalization charges, availability of quality health care services and the demand of the elderly who prefer familiar surroundings to sterile hospitals and nursing homes.</p>
                    <p className="my-2"> Looking at the growth of the nursing home care services, they are many insurance agencies have acquired on varied policies, needs and specifications.</p>
                    <p className="my-2"> The home health care insurance also depends on cost some factors like area, which type of care you need for the treatment and medication. Contact your general insurance provider; enquire about their home health care policy and the premium they can work for you.</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">Ideal for making home nursing service</h3>
                    <p className="my-2"> There are a few set for making the nursing services like;</p>
                    <p className="my-2"> * Create a personal emergency contact list</p>
                    <p className="my-2"> * Have your prescription and reports should be ready</p>
                    <p className="my-2"> * Doctor Contact list</p>
                    <p className="my-2"> * Making a list of the tasks expected from the nurse</p>
                    <p className="my-2"> * Making a list of the tasks expected from the nurse</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">Why To Choose Drugcarts?</h3>
                    <p className="my-2"> * Verified ,trained and experienced professionals</p>
                    <p className="my-2"> * Manage replacements</p>
                    <p className="my-2"> * Handle the emergency</p>
                    <p className="my-2"> * Doctor support</p>
                </div>
                <div className="shadow-md rounded-lg p-6 mt-5">
                    <h3 className="text-md md:text-xl font-bold my-2">How the nursing services available at home?</h3>
                    <p className="my-2"> Availing nursing as services on your own is easy, but you need 24 hours of home care nursing services when your patient needs constant monitoring and intensive care at home. If you hire a nurse for daily visits or periodic visits, nurse should take care of patient with proper treatment and medication at home its depend upon the instructions of your family doctor.</p>
                    <p className="my-2"> Our team is visiting nurse to meet a patient care he/she needs and help you with the following setup:</p>
                    <p className="my-2"> * Handle the emergency</p>
                    <p className="my-2"> * Rotational nursing care</p>
                    <p className="my-2"> * Medical equipment.</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md mt-5">
                <h2 className="text-md md:text-xl font-bold my-2">FAQ</h2>
                <p className="my-2"><b>Q – What are the things that a Drugcarts home nursing service would do?</b></p>
                <p className="my-2"><b>A – </b> Drugcarts trained and experienced nurse can assist you with post-surgical care, Tracheostomy, Urine catheterization, Suture removal, Wound care, Injections, Oxygen administration, IV infusion and more.</p>

                <p className="my-2"><b>Q – whether a nurse will visit often?</b></p>
                <p className="my-2"><b>A – </b> Yes, They nurse will meet often visit depending on the patient’s needs and treatment plan.</p>

                <p className="my-2"><b>Q – Whether nursing service for 12-hr or 24-hr in home?</b></p>
                <p className="my-2"><b>A – </b> Yes, we provide nursing service of 24-hr service at home for patients.</p>

                <p className="my-2"><b>Q – How nurses are qualified from Drugcarts?</b></p>
                <p className="my-2"><b>A – </b> All Drugcarts nurses are professionally trained and certified nurses and have ICU experience.</p>

            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p>Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default Nursing;
