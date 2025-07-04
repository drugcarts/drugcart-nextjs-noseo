"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";
import { useEffect } from 'react';
import { GetHealthTipUrlService } from '@/services/HealthTipService';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";

const HealthTipDetails = () => {
  const { healthTipUrl } = useSelector((state) => state.healthTipData);
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetHealthTipUrlService(params?.url))
  }, [params?.url])

  return (
    <section className="max-w-7xl mt-3 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 uppercase p-3">{healthTipUrl?.name}</h2>
      <hr className='mb-6' />
      <div className="rich-content space-y-4 p-3" dangerouslySetInnerHTML={{ __html: healthTipUrl?.description }} />
    </section>
  )
}

export default HealthTipDetails
