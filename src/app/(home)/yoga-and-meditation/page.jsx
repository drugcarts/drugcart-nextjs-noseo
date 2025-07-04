"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";
import { useEffect } from "react";

const YogaMeditaion = () => {
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
                    <Image priority src={IMAGES.YOGABANNER} alt="YOGA BANNER" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#d4f758] rounded-md">
                    <h2 className="font-bold text-[16px] uppercase">Yoga and Meditation</h2>
                    <p className="text-sm mb-6">Yoga and Meditation Centre</p>
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
            <div className="flex">
                <div className="w-full md:w-[68%] p-2">
                    <div className="shadow-md rounded-lg p-6">
                        <h1 className="text-md md:text-xl font-bold">Yoga and meditation</h1>
                        <p className="my-2"> Who are they? The one must always be ready to adapt themself and adjust to whatever happens. A thousand of years ago it was developed as a spiritual practice. Many people searching for yoga practice it helps with balance, strength, and lowering stress. Even though yoga can help our minds, bodies feel stronger and less stressed out and it’s a practice that connects the body, breath, and mind. It helps to connect physically as the whole body with attitude, breathing exercises, and meditation to improve overall health. </p>
                        <p className="my-2"> Meditation refers to a family of mental practices to improve concentration, increase coordination at present moment, and familiarize a person with the nature of their own mind.</p>
                        <p className="my-2"> Yoga may be a best option for your needs to improve your flexibility, maintain your weight, or it increase your sense of well-being, you. This ancient tradition blends exercise as the components in improving and maintaining your health with mindfulness techniques.</p>
                        <p className="my-2"> Before starting any new exercise regularly, including yoga, talk to your doctor. Your physician can help you determine if any specific precautions should be followed due to a medical condition, or avoid certain movements.</p>
                        <Image priority src={IMAGES.YOGA1} alt="Fitness Center" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Styles of Yoga</h1>
                        <p className="my-2"> As a there many technique they aimed on both the mind and the body. It’s may be part of original traditions to modern classic sets of poses and postures.</p>
                        <p className="my-2"> There are many different types of yoga .some of the most popular names for styles of yoga:</p>
                        <p className="my-2"><b>• Hatha</b></p>
                        <p className="my-2"> This style encloses the both breathening and any postures, this technique fall under the term of yoga. A hatha yoga class will feel comfortable with most beginners. It’s described as a loosely-organized class.</p>

                        <p className="my-2"><b>• Kundalini</b></p>
                        <p className="my-2"> Point out the effects of breath work on the posture repetitive, sudden pose transitions are the hallmarks for this style of traditional yoga. Because the poses can be easy to learn, though the hard work change occasionally. The goal is to free energy in the lower body by breathing it move upwards.</p>

                        <p className="my-2"><b>• Ashtanga</b></p>
                        <p className="my-2"> This style of yoga is highly structured and challenging style of yoga. Six different sequences that are change into75 poses can be completed at an individual's from one posture to another easily when once learned, but they need an intense time commitment.</p>

                        <p className="my-2"><b>• Bikram </b></p>
                        <p className="my-2"> • Bikram or Hot Yoga, this type of yoga in a heated room and with series of 26 poses. The goal is to warm to stretch the muscles, ligaments, and tendons, and purify the body through sweat. The room is also kept humid.</p>

                        <p className="my-2"><b>• Iyengar</b></p>
                        <p className="my-2"> A style of yoga that place with great attention to the precise alignment of the body. You need to hold poses for long periods of time.</p>

                        <p className="my-2"> To find hybrid styles of yoga they blend simple stretches with more formal poses to helps with the limited mobility or other needs.</p>
                        <Image priority src={IMAGES.YOGA2} alt="Yoga and Meditation" className="w-full mx-auto" />
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
                <h1 className="text-md md:text-xl font-bold">How much exercise we must do?</h1>
                <p className="my-2"> Start with just a few minutes of exercise and it helps your body get slowly get and you will being active at that time. Exercise is better than none</p>
                <p className="my-2"> Our goal is to work up to exercise daily for at least a half an hour most day in a week in full of benefits from exercise.</p>
                <p className="my-2"> If it's more prominent, you can do short spurts for 10 to 15 minutes there for period of time. Once you get in better shape, you can moderately exercise for longer periods of time and do more running, jogging, swimming and plying volley ball etc.</p>
                <Image priority src={IMAGES.YOGA3} alt="Yoga and Meditation" className="w-[60%] mx-auto" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Benefits of Yoga and meditation</h1>
                <p className="my-2"> Yoga and meditation can improve your posture and flexibility and maintaining overall health. It may also:</p>

                <p className="my-2">• Reduced in your blood pressure and heart rate</p>
                <p className="my-2">• Detoxification increased and restored the circulation in our body.</p>
                <p className="my-2">• Prevent from cardiovascular diseases.</p>
                <p className="my-2">• Nutrition that improve effectiveness of your digestive system</p>
                <p className="my-2">• Brain health to rejuvenate with increased oxygen</p>
                <p className="my-2">• Balancing hormones</p>
                <p className="my-2">• Relaxation</p>
                <p className="my-2">• Intensive fitness</p>
                <p className="my-2">• develop your self-confidence</p>
                <p className="my-2">• Stress reduced</p>
                <p className="my-2">• Improve your coordination</p>
                <p className="my-2">• Increases your concentration</p>
                <p className="my-2">• sleep restfully</p>
                <p className="my-2">• Aid with digestion</p>
                <Image priority src={IMAGES.YOGA4} alt="Yoga and Meditation" className="w-[60%] mx-auto" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Precaution must be followed</h1>
                <p className="my-2">For most people the yoga is generally safe. Some people need to avoid some yoga poses as:</p>
                <p className="my-2">* Pregnant</p>
                <p className="my-2">* Glaucoma</p>
                <p className="my-2">* Sciatica</p>
                <p className="my-2"> Make sure that to your yoga instructor if you have these conditions or health problem or injury. A qualified yoga teacher is able to help you find poses that are safe for you.</p>
                <Image priority src={IMAGES.YOGA5} alt="Yoga and Meditation" className="w-[60%] mx-auto" />
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Expectations</h1>
                <p className="my-2">Most yoga classes for 45 to 90 minutes. All styles of yoga with three basic components:</p>
                <p className="my-2">• Breathing. Aimed on your breathing is an main part of yoga. Your teacher may provide instruction on breathing exercising during the class.</p>
                <p className="my-2">• Poses. Yoga postures are a series of movements that help boost strength, flexibility, and balance. They range in difficulty from lying flat on the floor to balancing poses.</p>
                <p className="my-2">• Meditation. Yoga class usually end with a short period of meditation. This quiets the mind and helps you relaxation.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">How to Prevent Injury while doing yoga</h1>
                <p className="my-2"> The yoga is generally safe, you can still get hurt if you do a pose incorrectly or push yourself too far. Here are some tips to stay safe.</p>

                <p className="my-2">• If you have any health problems, talk with your health care physician before starting yoga. Ask whether any poses you should be avoid.</p>
                <p className="my-2">• Learn the basics and start slowly and before pushing yourself too far.</p>
                <p className="my-2">• Select a class that is appropriate for your level; ask the teacher when you are not sure.</p>
                <p className="my-2">• Beyond your comfort level. DO NOT push yourself, if can’t do a pose, ask your teacher to help you modify it.</p>
                <p className="my-2">• Ask questions how to do a pose if you are not cleared.</p>
                <p className="my-2">• This is mostly important in hot yoga.Take along with a water bottle and drink plenty of water..</p>
                <p className="my-2">• Wear the cloths that you can to move freely.</p>
                <p className="my-2">• Listen to your body. When you feel pain or fatigue, stop and take rest.</p>
            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p>Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default YogaMeditaion;