"use client"
import { IMAGES } from '@/components/common/images'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CustomerSaying from '@/components/home-page/CustomerSaying';
import FeedbackCard from '@/components/home-page/FeedbackCard';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { GetLabPackagesService, GetLabPackageUrlService } from '@/services/labPackageService';
import { GetTestPackageUrlService } from '@/services/testPackageService';
import { InsertEmoticon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { GetMainSliderUrlService } from "@/services/mainSliderService";

const slides = [
    {
        id: 1,
        title: "50% - 80% Off",
        subtitle: "On all Pathology Tests and Packages",
        button: "Book Now",
        buttonLink: "#",
        discountText: "At The Lowest Prices",
        image: "https://hospitalsmagazine.com/wp-content/uploads/2024/03/diabetes-.jpg",
    },
    {
        id: 2,
        title: "50% - 80% Off",
        subtitle: "On all Pathology Tests and Packages",
        button: "Book Now",
        buttonLink: "#",
        discountText: "At The Lowest Prices",
        image: "https://www.maxlab.co.in/categoryimage/1667462132.jpg",
    },
];

const LabTest = () => {
    const { labPackageList, labPackageUrl } = useSelector((state) => state.labPackageData)
    const { testPackageUrl } = useSelector((state) => state.testPackageData)
    const { mainSliderUrl } = useSelector((state) => state.mainSliderData)
    const dispatch = useDispatch()
    const router = useRouter()
    const [choose, setChoose] = useState('food-intolerance-test')
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(GetLabPackagesService(1, 6))
        dispatch(GetTestPackageUrlService(choose))
        dispatch(GetLabPackageUrlService(choose))
        dispatch(GetMainSliderUrlService('lab-test'))
    }, [choose])

    const discountCal = (price, discount) => {
        let totalDiscount = price - price * discount / 100;
        return totalDiscount.toFixed(0)
    }

    const savePrice = (price, totalDiscount) => {
        const finalPrice = Number(price) - totalDiscount;
        return finalPrice.toFixed(0)
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className='bg-[#F7C9B0]'>
                <div className='flex justify-center items-center mx-2'>
                    <Image
                        src={IMAGES.LAB_ICON.default || null}
                        alt="Product"
                        // className="w-16 h-16"
                        width={12}
                        height={12}
                    />
                    <p className='text-[16px] mx-2 my-2 Jost font-bold'>Get your sample collected in the next 30 minutes!</p>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className="p-8">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="rounded-lg shadow-lg w-[95%] h-[350px]"
                    >
                        {mainSliderUrl.map((slide, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={slide?.slide_image ? `https://assets1.drugcarts.com/admincolor/homepage/slider/${slide?.slide_image}` : IMAGES.NO_IMAGE}
                                    alt="Lab Test"
                                    className="rounded-lg h-[350px] w-full"
                                    width={500}
                                    height={100}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='container mx-auto'>
                        <p className="text-[16px] font-medium text-center mx-2 mt-8">
                            We are on our mission of making quality healthcare services available to every individual.
                            We understand how necessary a health test can be and how important it is in detecting diseases at the earlier stages and find a cure.
                            Thyrocare is one of the leading diagnostic centres in India and we are associated with them for the grand purpose of bringing the world-class diagnostic facilities at your doorstep.
                            Our wide range of Thyrocare packages cover all kinds of medical checkup. Book a full body checkup package from our portal today.
                        </p>
                    </div>
                    <p className='text-[22px] mx-2 mt-10 mb-5 font-bold'>Popular Lab Test</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border border-t-1">
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.DIABETES || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Diabetes</p>
                        </div>
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.COMPLETE || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Complete Hemogram</p>
                        </div>
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.THYROID || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Thyroid Test</p>
                        </div>
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.LIPID || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Lipid Profile</p>
                        </div>
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.LIVER || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Liver Profile</p>
                        </div>
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.KIDNEY || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Kidney Function Test</p>
                        </div>
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.VITAMIN || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Vitamin Test</p>
                        </div>
                        <div className="border border-t-1 p-2 rounded-lg flex">
                            <Image
                                src={IMAGES.INFECTION || null}
                                alt="Product"
                                className="mx-2"
                                width={35}
                                height={35}
                            />
                            <p className='text-[16px] mx-2 mt-2 font-bold'>Infection</p>
                        </div>
                    </div>
                    <p className='text-[22px] mx-2 mt-10 mb-5 font-bold'>Popular health checkups</p>
                    <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-8 gap-4 p-1">
                        {labPackageList?.lab_packages?.map((packageItem, i) => (
                            <div key={i} className={`border border-t-1 ${labPackageUrl?.url === packageItem?.url ? "bg-[#FFE5EF]" : "bg-[#fff]"}rounded-lg w-40 cursor-pointer ml-1`}
                                onClick={() => setChoose(packageItem?.url)}>
                                <p className={`text-[13px] ${labPackageUrl?.url === packageItem?.url ? "text-[#B7084B]" : "text-[#000]"} p-2 font-bold`}>{packageItem?.packageName}</p>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6">
                        {testPackageUrl && testPackageUrl?.map((item, i) => (
                            <div className="max-w-sm border border-gray-200 rounded-lg shadow-lg p-4 bg-white" key={i}>
                                <h2 className="text-lg font-semibold">
                                    {item?.testname}
                                </h2>
                                <div className="flex items-center mt-1">
                                    <span className="text-lg font-bold">4.0</span>
                                    <div className="ml-2 flex">
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-yellow-500 text-lg">&#9733;</span>
                                        <span className="text-gray-300 text-lg">&#9733;</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 font-semibold mt-2">Include  {item?.nooftest} Tests</p>
                                <ul className="text-gray-500 text-sm mt-1">
                                    <li>{item?.name}</li>
                                    <li>{item?.tests?.[0]}</li>
                                    <li>{item?.tests?.[1]}</li>
                                </ul>
                                <p className="text-black font-medium mt-1 cursor-pointer">+More</p>
                                <p className="text-blue-400 text-sm mt-2 line-through">M.R.P <span className="text-blue-600 font-bold">{item?.price}</span></p>
                                <p className="text-red-600 text-xl font-bold">Price {discountCal(item?.price, item?.discount)}</p>
                                <p className="text-green-600 text-sm font-medium">You Save ${savePrice(item?.price, discountCal(item?.price, item?.discount))}</p>
                                <div className="bg-red-100 text-red-600 px-2 py-1 mt-2 rounded-md inline-block font-semibold text-sm border border-red-400">
                                    {item?.discount}% OFF
                                </div>
                                <button className="w-full mx-auto bg-green-600 text-white font-bold py-2 rounded-lg mt-4 hover:bg-green-700 transition" onClick={() => router.push(`/test/${item?.url}`)}>
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-purple-800 text-white py-6 px-6 flex flex-col md:flex-row items-center justify-between w-full">
                <div className="text-center md:text-left mx-auto">
                    <span className="text-yellow-400 font-bold text-lg md:text-[50px]">
                        Up to 75% Off
                    </span>{" "}
                    <span className="text-lg m-5">On Lab Test and Health Package</span>
                </div>
                <a
                    href="#"
                    className="bg-green-500 text-white font-bold px-4 py-2 rounded-md text-sm md:text-base hover:bg-green-600 transition mt-2 md:mt-0"
                >
                    BOOK NOW
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left pb-10 mt-6">
                <div className="bg-white rounded-lg p-5 border-[1.5px]">
                    <Image
                        src={IMAGES.CLINICCORNER1}
                        alt="Clinic Corner"
                        width={200}
                        height={200}
                        className="w-[100%] h-56 object-cover"
                    />
                    <p className="mt-6 font-bold text-md h-10">What You Need to Know About Blood Testing</p>
                    <p className='text-sm mt-4'>Blood tests are used to measure or examine cells, chemicals,
                        proteins, or other substances in the blood.
                        Blood testing, also known as blood work,
                        is one of the most common types of lab tests.
                        Blood work is often included as part of a regular checkup.</p>
                    <div className="flex justify-center items-center font-bold mt-7 pb-0">
                        <span className="text-right text-blue-500">Read More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-6 font-bold text-blue-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-5 border-[1.5px]">
                    <Image
                        src={IMAGES.CLINICCORNER2}
                        alt="Clinic Corner"
                        width={200}
                        height={200}
                        className="w-[100%] h-56 object-cover"
                    />
                    <p className="mt-6 font-bold text-md h-10">What You Need to Know About Blood Testing</p>
                    <p className='text-sm mt-4'>Blood tests are used to measure or examine cells, chemicals,
                        proteins, or other substances in the blood.
                        Blood testing, also known as blood work,
                        is one of the most common types of lab tests.
                        Blood work is often included as part of a regular checkup.</p>
                    <div className="flex justify-center items-center font-bold mt-7 pb-0">
                        <span className="text-right text-blue-500">Read More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-6 font-bold text-blue-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-5 border-[1.5px]">
                    <Image
                        src={IMAGES.CLINICCORNER3}
                        alt="Clinic Corner"
                        width={200}
                        height={200}
                        className="w-[100%] h-56 object-cover"
                    />
                    <p className="mt-6 font-bold text-md h-10">What You Need to Know About Blood Testing</p>
                    <p className='text-sm mt-4'>Blood tests are used to measure or examine cells, chemicals,
                        proteins, or other substances in the blood.
                        Blood testing, also known as blood work,
                        is one of the most common types of lab tests.
                        Blood work is often included as part of a regular checkup.</p>
                    <div className="flex justify-center items-center font-bold mt-7 pb-0">
                        <span className="text-right text-blue-500">Read More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-6 font-bold text-blue-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-5 border-[1.5px]">
                    <Image
                        src={IMAGES.CLINICCORNER4}
                        alt="Clinic Corner"
                        width={200}
                        height={200}
                        className="w-[100%] h-56 object-cover"
                    />
                    <p className="mt-6 font-bold text-md h-10">What You Need to Know About Blood Testing</p>
                    <p className='text-sm mt-4'>Blood tests are used to measure or examine cells, chemicals,
                        proteins, or other substances in the blood.
                        Blood testing, also known as blood work,
                        is one of the most common types of lab tests.
                        Blood work is often included as part of a regular checkup.</p>
                    <div className="flex justify-center items-center font-bold mt-7 pb-0">
                        <span className="text-right text-blue-500">Read More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-6 font-bold text-blue-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <CustomerSaying />
            <FeedbackCard />
        </div>
    )
}

export default LabTest;