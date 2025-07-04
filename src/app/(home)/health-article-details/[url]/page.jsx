"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";
import { useEffect } from 'react';
import { GetArticleUrlService } from '@/services/articleService';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";

const HealthArticleDetails = () => {
  const { articleUrl } = useSelector((state) => state.articlesData)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetArticleUrlService(params?.url))
  }, [params?.url])

  console.log('articleUrl', articleUrl);
  
  return (
    <section className="max-w-7xl mt-3 mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 uppercase p-2">{articleUrl?.blogname}</h2>
      <hr className='mb-6' />
      <div  className="space-y-4 p-4" dangerouslySetInnerHTML={{ __html: articleUrl?.description }} />
    </section>
  )
}

export default HealthArticleDetails
