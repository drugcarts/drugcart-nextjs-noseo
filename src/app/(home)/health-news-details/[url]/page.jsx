"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { GetHealthNewsUrlService } from '@/services/heathNewsService';
import { useEffect } from 'react';

const DailyNewsDetails = () => {
  const { healthNewsUrl } = useSelector((state) => state.healthNewsData)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetHealthNewsUrlService(params?.url))
  }, [params?.url])

  return (
    <section className="max-w-7xl mt-3 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 uppercase p-3">{healthNewsUrl?.title}</h2>
      <hr className='mb-6' />
      <div className="space-y-4 p-3" dangerouslySetInnerHTML={{ __html: healthNewsUrl?.description }} />
    </section>
  )
}

export default DailyNewsDetails
