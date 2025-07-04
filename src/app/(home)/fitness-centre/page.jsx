"use client";
import { useEffect } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetServiceUrlService } from '@/services/drugService';
import { PostServiceQuiryService } from '@/services/serviceenquiryService';
import { useFormik } from "formik";

const FitnessCentre = () => {
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
                    <Image priority src={IMAGES.FITNESSBANNER} alt="FITNESS BANNER" className="w-[100%] md:h-[300px] rounded-lg" />
                </div>
                <form onSubmit={formik.handleSubmit} className="w-full md:w-[40%] md:h-[300px] p-2 text-center bg-[#FFD233] rounded-md">
                    <h2 className="font-bold text-[16px]">Fitness Centre</h2>
                    <p className="text-sm mb-6">Fitness Centre</p>
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
                        <h1 className="text-md md:text-xl font-bold">Fitness center</h1>
                        <p className="my-2"> The fitness means “quality of being fit”. The ultimate goal of fitness is the ability to perform activities to help make the members healthier. The overall fitness care to make it measurable on their own necessary aspects of our job and daily activities and sports and they withstand on physically, physiologically and mentally.</p>
                        <p className="my-2"> Some health clubs require to undergo a health assessment by staff member they will be weighed and a staff member will measure your body fat composition. It almost fitness is about feeling good and being able to go without pain,” says the certified strength and conditioning specialist.</p>
                        <p className="my-2"> Routine exercise is the best things the one you can do for your health and lifestyle. It has many benefits, including improving your overall health and fitness, overcome stress, restfull sleep and reducing your risk for many chronic diseases.</p>
                        <Image priority src={IMAGES.FITNESS1} alt="Fitness Center" className="w-full mx-auto" />
                    </div>
                    <div className="shadow-md rounded-lg p-6 mt-5">
                        <h1 className="text-md md:text-xl font-bold">Health & Fitness Guide</h1>
                        <p className="my-2"> Walking, lifting weights, doing chores it’s are all good to promote health. Anyway of we do, the regular exercise and physical activity is the path to health and well-being is to promote muscle strengthening.</p>
                        <p className="my-2"> Exercise burns, reducing fat, builds muscle, lowers cholesterol, eases stress and anxiety, and lets us sleep restfully. In this guide, we match resources of our exercise important -- at every fitness level</p>
                        <Image priority src={IMAGES.FITNESS2} alt="Health & Fitness Guide" className="w-full mx-auto" />
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
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">What type of Exercise should we do?</h1>
                <p className="my-2"> You can do anything that your heart and lungs work harder, such as short spurts, walking, biking, jogging, swimming, fitness classes, or cross-country skiping. Mowing your lawn, going out dancing, playing with your kids -- it all counts, throwball that makes your prevent from heart problem.</p>
                <p className="my-2"> Routine exercise is one of the best things and it’s good for health. It has many useful things involves improving your comprehensive health and fitness, and gets reduce from your risk and prevent from chronic diseases.</p>
                <p className="my-2"> There are many various types of exercise; its need to pick the right types for you. Most people have advantage for a combination of them:</p>
                <p className="my-2"> • Endurance, or aerobic: These activities increase your breathing and heart rate. This improves your overall fitness and it will strengthen your heart, lungs, and circulatory system healthy. Examples: Cycling, brisk walking, jogging, swimming, and biking.</p>
                <p className="my-2"> • Strength, or resistance training The exercises make your strengthening your muscles stronger and its more calorie burning machine. Examples: Glutes, lifting weights and using a resistance band, biceps.</p>
                <p className="my-2"> • Balance exercises can make it easier to stand up on uneven surfaces without using hands and it improve your balance, stability and reduce the falls. Examples: try tai chi</p>
                <p className="my-2"> • Flexibility: select the best exercises that will stretch your muscles and can help your body stay limber. Yoga, pilates are suggestion that improving flexibility.</p>
                <p className="my-2"> Make sure that you have enough protein. Fitting regular exercise into your daily schedule its not possible and seem difficult at first. From first start slowly and strict to breaks your exercise timely into chunks. When you are doing ten minutes at a time is fine. You can work your way up to doing the suggesting with large amount of exercise. How much exercise you needed it depends on your age and health.</p>
            </div>
            <div className="shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-md md:text-xl font-bold">Some of the things you make can to doing your exercises involve</h1>
                <p className="my-2"> • Selecting the activities that work at all the different parts of the body, including your core (muscles around your back, abdomen, and pelvis).Its improves strength, balance and stability and Good core strength its helps to prevent from lower back injury.</p>
                <p className="my-2"> • Selecting the activities that make you enjoy. It's simple way to make exercise a regular part of your life and have interest, fun doing it.</p>
                <p className="my-2"> • Be safe while doing exercise, with proper equipment, and prevent injuries. Also, listen to your body and don't make it over, do as you can.</p>
                <p className="my-2"> • Keep yourself goals. The goals should be realistic and give challenge to you, and it's also helpful to prize yourself when you reached the goals. The prize could be something big, like a new gift, workout gear, or something smaller, such as movie tickets etc.</p>
            </div>
            <div className="mt-5 bg-blue-800 p-2 text-white text-center">
                <h1 className="text-md md:text-xl font-bold my-4">For enquiries, bookings or support and other details give a missed call @ +91 9920611567</h1>
                <p>Need help? Get a call back from our support team</p>
            </div>
        </section>
    )
}

export default FitnessCentre