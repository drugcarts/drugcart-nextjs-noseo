"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const Nutritionists = () => {
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
                    <Image priority src={IMAGES.NUTRITIONISTBANNER} alt="YOGA BANNER" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#8bbbf3] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Nutritionists</h2>
                    <p className="text-sm mb-6">Nutritionists</p>
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
                        <h1 className="text-md md:text-xl font-bold">What is a Nutritionist?</h1>
                        <p className="my-2"> Do you interested in advising people on what to eat in order achieve a specific health-related goal or to lead a healthy lifestyle. </p>
                        <p className="my-2"> A nutritionist is a specialist they plan and formulate the meals for patient like food and nutrition. </p>
                        <p className="my-2"> In many countries, a person can state to be a nutritionist even without any training, education, or professional license, in contrast to a dietitian, who has a university degree, professional license, and certification for professional practice</p>
                        <Image priority src={IMAGES.NUTRITIONIST1} alt="Nutritionist" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">What a Nutritionist does do?</h1>
                        <p className="my-2">Certain nutritionists provide customized information for specific individuals. For example, a dietitian or nutritionist can teach a patient with high blood pressure, when preparing meals how to use less salt.</p>
                        <p className="my-2"> They could plan a diet that helps people lose weight to reduced processed foods and sugar. </p>
                        <Image priority src={IMAGES.NUTRITIONIST2} alt="Dietitian" className="w-full mx-auto" />
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
                <h1 className="text-md md:text-xl font-bold">ROLE OF NUTRITIONISTS:</h1>
                <p className="my-2">• Explain nutrition and what it can use for client</p>
                <p className="my-2">• Assess clients' health needs and diet</p>
                <p className="my-2">• Develop meal plans for both cost and clients and preferences into account the effects of meal plans are evaluated and need in change the plans.</p>
                <p className="my-2">• Giving talks promote best nutrition about diet, nutrition and the relationship between good eating habits </p>
                <p className="my-2">• preventing or managing specific diseases</p>
                <p className="my-2">• Keep the latest update nutritional science research</p>
                <Image priority src={IMAGES.NUTRITIONIST3} alt="Dietician" className="w-[60%] my-4" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">TYPES OF NUTRITIONIST SPECIALIST WITH OCCUPATION:</h1>
                <p className="my-2"><b>Clinical Dieticians</b></p>
                <p className="my-2">Clinical dieticians provide medical nutrition therapy. They work in hospitals, long-term care, specialized treatment facilities, and other institutions. </p>

                <p className="my-2"><b>Management Dieticians</b></p>
                <p className="my-2">Management dieticians plan meal programs and they work in food service settings such as cafeterias, hospitals, and food corporations, responsible for buying food and for carrying out other business-related tasks. </p>

                <p className="my-2"><b>Community Dieticians</b></p>
                <p className="my-2">Community dieticians educate the public related to food and nutrition and they work with specific groups of people, such as pregnant women, public health clinics, government and non-profit agencies, health maintenance organizations (HMOs)</p>

                <p className="my-2"><b>A NUTRITIONIST WORKPLACE</b></p>
                <p className="my-2">Nutritionists serve with the group of peoples like in hospitals, cafeterias, nursing homes, and schools. Certain nutritionists are self-employed and maintain their own practice. And they work as consultants, providing advice to clients and health basis.</p>
                <Image priority src={IMAGES.NUTRITIONIST4} alt="Dietician" className="w-[60%] my-4" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">NUTRITIONIST SERVICES AT HOME</h1>
                <p className="my-2">Good nutrition give you support and enhance our mental and physical health. A Registered Dietitian and nutrition specialist provides nutrition counseling to experts and their Families at home.</p>
                <p className="my-2"> Nutritionist counseling for patients at home seeks for support like weight-management, sports nutrition, heart health, diabetes, IBS/IBD, brain health, and the management of food allergies/intolerances. The provide service, assessment of the patient to overcome the realistic lifestyle and create an individualized nutrition plans at home.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">NUTRITIONIST SERVICE AT HOME:</h1>
                <p className="my-2">• Diabetes education.</p>
                <p className="my-2">• General nutrition education sessions and healthy eating</p>
                <p className="my-2">• Development of an individualized meal plan by nutrition counseling session</p>
                <p className="my-2">• Class for cooking food with nutrition.</p>
                <p className="my-2">• Grocery shopping store .</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">NUTRITION CARE SERVICE:</h1>
                <p className="my-2"> Maintain the health of individuals through the nutrition care services.</p>
                <p className="my-2">• assessing the nutrition needs of individuals or groups and determining resources</p>
                <p className="my-2">• Establishing priorities, goals, and objectives that meet nutrition needs with consistent </p>
                <p className="my-2">• providing nutrition counseling in health and disease management;</p>
                <p className="my-2">• Nutrition care systems are developing, implementing, and managing</p>
                <p className="my-2">• Evaluating, making changes in plan, and maintain standards of quality in food and nutrition care services.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">NUTRITION SPECIALIST IN HEALTHCARE PROFESSIONALS</h1>
                <p className="my-2"> They are various health care professionals and providing the role of nutrition services like.</p>
                <p className="my-2">• Registered Dietitian</p>
                <p className="my-2">• Certified Nutrition Specialist</p>
                <p className="my-2">• Dietetic Technician, Registered</p>
                <p className="my-2">• Certified Dietary Manager</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Drug carts will help you</h1>
                <p className="my-2"> Good nutrition is an important factor in leading a healthy lifestyle. Good nutrition is achieved by means of a balanced diet and physical activity. It should be evidence-based and the nutrition professional and specialist helps to educate to their families for the health care and nutrition care. Nutrition will provide you a complete healthy life by doing physical exercise while taking food nutrition at home. When you need nutritionist just contact and visit you provide you nutrition health care service </p>
            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p className="my-2">Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default Nutritionists;