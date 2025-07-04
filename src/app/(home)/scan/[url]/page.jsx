"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { GetScanUrlService } from '@/services/scanService';
import { useEffect } from "react";
import { useParams } from "next/navigation";

const ScanDetails = () => {
    const { scanUrl } = useSelector((state) => state.scanData)
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetScanUrlService(params.url))
    }, [params.url])

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex">
                <div className="w-full md:w-1/2 p-2">
                    <h1 className="text-md md:text-xl font-bold">{scanUrl?.scantestname}</h1>
                    <div className="rounded-lg p-6">
                        <img src={scanUrl?.scanImage ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/scan/${scanUrl?.scanImage}` : "/assets/no_image.png"} alt="Pet Scan" className="w-full mx-auto" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2 border-[1.5px]">
                    <div className="relative overflow-x-auto mt-6">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
                            <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th colSpan={3} className="px-6 py-3">
                                        {scanUrl?.scantestname} Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4 w-[150px]">Test Name</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">{scanUrl?.scantestname}</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4">Test Code</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">{scanUrl?.testcode}</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4">Category</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">{scanUrl?.category}</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4">Area</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">{scanUrl?.areas}</td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td colSpan={3} className="px-6 py-4">
                                        <div className="rich-content space-y-4" dangerouslySetInnerHTML={{ __html: scanUrl?.description }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="px-6 py-4">
                                        <Link href="/scan-booking/petctscan">
                                            <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>Book Now</button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ScanDetails