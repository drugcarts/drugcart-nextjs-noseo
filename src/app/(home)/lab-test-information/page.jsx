"use client"
import { IMAGES } from '@/components/common/images'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetLabInfoListService } from '@/services/LabInfoService';
import { useRouter } from 'next/navigation';
import { Box, Pagination, Typography } from '@mui/material';

const LabInformation = () => {
    const { labInfoList } = useSelector((state) => state.labInfoData)
    const router = useRouter()
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetLabInfoListService(page, 8))
    }, [page])

    return (
        <div className="max-w-7xl mx-auto">
            <p className='text-[22px] mx-2 my-5 font-bold'>Lab Test information</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left my-6">
                {labInfoList && labInfoList?.lab_infos?.map((item, i) => (
                    <div className="bg-white rounded-lg p-5 border-[1.5px]" key={i}>
                        <Image
                            src={IMAGES.CLINICCORNER1}
                            alt="Clinic Corner"
                            width={200}
                            height={200}
                            className="w-[100%] h-56 object-cover"
                        />
                        <p className="mt-6 font-bold text-md h-10">{item?.title}</p>
                        <div className="flex justify-center items-center font-bold mt-7 pb-4 cursor-pointer" onClick={() => router.push(`/lab-test-profile/${item?.url}`)}>
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
                ))}
            </div>
            <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontFamily={"Poppins"}>Showing {page}-{8} of {labInfoList?.pagination?.totalItems} entries</Typography>
                <Pagination
                    size="large"
                    count={labInfoList?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => {
                        setPage(value)
                    }}
                />
            </Box>
        </div>
    )
}

export default LabInformation;