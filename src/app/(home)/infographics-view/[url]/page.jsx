"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";
import { GetInfoGraphicsUrlService } from '@/services/infoGraphicsService';
import { useEffect } from 'react';

const InfographicsView = () => {
    const { infoGraphicsUrl } = useSelector((state) => state.infoGraphicssData)
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetInfoGraphicsUrlService(params?.url))
    }, [params?.url])

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <h2 className="text-lg font-semibold text-gray-800 uppercase p-3">{infoGraphicsUrl?.title}</h2>
            <hr className='mb-6' />
            <Image
                src={infoGraphicsUrl?.thuming ? `https://assets2.drugcarts.com/admincolor/homepage/infogra/${infoGraphicsUrl?.thuming}` : IMAGES.NO_IMAGE}
                alt={infoGraphicsUrl?.thumbalt || ""}
                width={200}
                height={200}
                className="w-[50%] object-cover mx-auto"
            />
            <p className='text-sm md:text-md py-6 p-3'>{infoGraphicsUrl?.title}</p>
        </section>
    )
}

export default InfographicsView;
