"use client";
import Link from 'next/link';
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { GetPageBannerUrlService } from "@/services/pageBannerService";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Promotion = () => {
    const { pageBannerUrl } = useSelector((state) => state.pageBannerData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPageBannerUrlService("lab"))
    }, [])

    return (
        <section className="max-w-7xl mx-auto mt-3">
            <Image
                priority
                src={pageBannerUrl?.image ? `https://assets1.drugcarts.com/admincolor/homepage/pagebanner/${pageBannerUrl?.image}` : IMAGES.NO_IMAGE}
                alt="Ayush Banner"
                className="w-[100%] h-[300px] rounded-xl"
                width={500}
                height={100}
            />
            <div className='bg-[#FFEAE4] p-4 mt-4 text-center'>
                <h2 className='text-md md:text-xl font-bold text-[#FF3D00] my-3'>WHO IS RESPONSIBLE FOR HEALTH PROMOTION AND EDUCATION?</h2>
                <p>Changes in the nation’s healthcare reimbursement model over the last five years that encourage higher-quality and lower-cost value-based care have helped to spur an increase in preventative medicine by incentivizing medical practices and healthcare organizations. Unfortunately, the COVID-19 pandemic has stymied some of these efforts and muddied survey and outcome data. Many projected Healthy People 2020 goals were not met, and the Healthy People 2030 goals have been adjusted to make up for this lack of progress </p>
                <button className='bg-[#35A24D] p-2 mx-auto text-white my-4'>Book Now For Healthcare</button>

            </div>
        </section>
    )
}

export default Promotion