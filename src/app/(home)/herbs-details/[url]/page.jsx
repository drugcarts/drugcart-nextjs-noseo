"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";
import { useEffect } from 'react';
import { GetHerbsUrlService } from '@/services/herbsService';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from "react-redux";

const HerbsDetails = () => {
    const { herbsUrl } = useSelector((state) => state.herbsData);
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetHerbsUrlService(params?.url))
    }, [params?.url])

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            {/* <Image src={IMAGES.HERBSBANNER} alt="Herbs Details" className="w-full h-64 object-cover mx-auto" />
            <h1 className='my-4 font-bold'>ALOE VERA</h1>
            <p>It is an important medicinal plant that is used in the treatment of various ailments.
                The botanical name for Aloe vera is Aloe vera Chinensis, Aloe barbadensis Milol,
                Aloe Indica, Aloe Chinensis, which belongs to the Liliaceae family.
                It helps to improve the prebiotics and it is also good for the skin and intestines.
                It is also called Kumari
            </p> */}
            <h2 className="text-lg font-semibold text-gray-800 uppercase my-4 p-3">{herbsUrl?.title}</h2>
            <div className='bg-white py-2 p-3'>
                <h2 className='font-bold my-2 uppercase'>WHAT IS {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.description ?
                            herbsUrl?.description : "<p>No description available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>What are the other names of {herbsUrl?.title} in various languages</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.languages ?
                            herbsUrl?.languages : "<p>No languages available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>ORIGIN AND SOURCE OF {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.origin ?
                            herbsUrl?.origin : "<p>No origin available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>COMPOSITION OF {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.composition ?
                            herbsUrl?.composition : "<p>No composition available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>CHEMICAL COMPOUNDS IN {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.compounds ?
                            herbsUrl?.compounds : "<p>No compounds available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>TRADITIONAL AND MODERN VIEW OF {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.modernview ?
                            herbsUrl?.modernview : "<p>No modern view available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>DOSAGE OF {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.dosage ?
                            herbsUrl?.dosage : "<p>No dosage available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>PRECAUTIONS WHILE USING {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.precautions ?
                            herbsUrl?.precautions : "<p>No precautions available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>CONTRAINDICATIONS WHEN USING {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.contraindicate ?
                            herbsUrl?.contraindicate : "<p>No contraindicate available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>BENEFITS OF {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.benefits ?
                            herbsUrl?.benefits : "<p>No benefits available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>HOW CAN YOU ADD {herbsUrl?.title} IN YOUR DAILY LIFE?</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.dailylife ?
                            herbsUrl?.dailylife : "<p>No daily life available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>SIDE EFFECTS OF {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.sideeffects ?
                            herbsUrl?.sideeffects : "<p>No side effects available</p>"
                    }}
                />
            </div>
            <div className='bg-white py-4 p-3'>
                <h2 className='font-bold my-4 uppercase'>FREQUENTLY ASKED QUESTIONS ON {herbsUrl?.title}</h2>
                <div
                    className="rich-content-card"
                    dangerouslySetInnerHTML={{
                        __html: herbsUrl?.faq ?
                            herbsUrl?.faq : "<p>No faq available</p>"
                    }}
                />
            </div>
        </section>
    )
}

export default HerbsDetails
