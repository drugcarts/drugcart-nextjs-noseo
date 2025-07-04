"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";
import { useEffect } from 'react';
import { GetHealthVideoUrlService } from '@/services/healthVideoService';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";

const HealthVideoDetails = () => {
    const { healthVideoUrl } = useSelector((state) => state.healthVideoData);
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetHealthVideoUrlService(params?.url))
  }, [params?.url])

  console.log('healthVideoUrl', healthVideoUrl);
  
  return (
    <section className="max-w-7xl mt-3 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 uppercase">{healthVideoUrl?.title}</h2>
      <hr className='mb-6' />
      <div  className="rich-content space-y-4" dangerouslySetInnerHTML={{ __html: healthVideoUrl?.description }} />
    </section>
  )
}

export default HealthVideoDetails