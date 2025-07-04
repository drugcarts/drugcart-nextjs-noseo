"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import { useEffect, useState } from 'react';
import { GetHealthTipService } from '@/services/HealthTipService';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Pagination, Typography } from '@mui/material';

const DailyHealthTips = () => {
    const { healthTipList } = useSelector((state) => state.healthTipData);
    const router = useRouter();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [articleImages, setArticleImages] = useState({});
    const [articlePContent, setArticlePContent] = useState({});

    useEffect(() => {
        dispatch(GetHealthTipService(page, 12));
    }, [page]);

    useEffect(() => {
        if (healthTipList?.health_tips?.length > 0) {
            const extractedImages = {};
            const extractedPContent = {};

            healthTipList.health_tips.forEach((item, index) => {
                if (item.description) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(item.description, "text/html");

                    const imgTags = doc.querySelectorAll("img");
                    const imgSources = Array.from(imgTags).map((img) => img.src);
                    extractedImages[index] = imgSources.length > 0 ? imgSources[0] : null;

                    const pElements = doc.querySelectorAll("ul");
                    extractedPContent[index] = Array.from(pElements)
                        .map((p) => p.outerHTML)
                        .join("");
                }
            });

            setArticleImages(extractedImages);
            setArticlePContent(extractedPContent);
        }
    }, [healthTipList]);

    const dailyhealthClick = (url) => {
        router.push(`/daily-health-tips-details/${url}`)
    }

    console.log('healthTipList', healthTipList);

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div>
                <h2 className="text-lg font-semibold text-gray-800 my-4 ps-4 md:ps-0">Daily Health Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                    {healthTipList?.health_tips?.map((item, i) => (
                        <div
                            key={i}
                            className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                            onClick={() => dailyhealthClick(item?.url)}>
                            <div className="flex place-items-start">
                                {articleImages[i] ? (
                                    <img src={articleImages[i]} alt="Video Thumbnail" className="w-24 h-24 object-cover" />
                                ) : (
                                    <img src={IMAGES.NO_IMAGE} alt="No Image" className="w-24 h-24 object-cover" />
                                )}
                                <div className="ml-4 text-start">
                                    <h3 className="font-bold text-sm my-1">
                                        {item?.name}
                                    </h3>
                                    <div className="rich-content-card text-xs" dangerouslySetInnerHTML={{
                                        __html: articlePContent[i]?.length > 100
                                            ? articlePContent[i].slice(0, 120) + "..."
                                            : articlePContent[i] || "<p>No description available</p>"
                                    }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography fontFamily={"Poppins"}>Showing {page}-{10} of {healthTipList?.pagination?.totalItems} entries</Typography>
                    <Pagination
                        size="large"
                        count={healthTipList?.pagination?.totalPages}
                        page={page}
                        color="secondary"
                        onChange={(_, value) => setPage(value)}
                    />
                </Box>
                {/* <h2 className="text-lg font-semibold text-gray-800 my-6 ps-4 md:ps-0">Popular Health Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                    <div className="border border-gray-300 p-3 rounded-lg">
                        <div className="flex place-items-start">
                            <Image
                                src={IMAGES.HACKS1}
                                alt="Health hacks"
                                className="w-24 h-24 object-cover"
                            />
                            <div className="ml-4 text-start">
                                <h3 className="font-bold text-sm">
                                    Cold Milk
                                </h3>
                                <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                    <li>Significance</li>
                                    <li>Usage of Cold Milk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 p-3 rounded-lg">
                        <div className="flex place-items-start">
                            <Image
                                src={IMAGES.TURMERIC}
                                alt="Health hacks"
                                className="w-24 h-24 object-cover"
                            />
                            <div className="ml-4 text-start">
                                <h3 className="font-bold text-sm">
                                    Turmeric Health Tips
                                </h3>
                                <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                    <li>Significance</li>
                                    <li>Usage of Turmeric </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <h2 className="text-lg font-semibold text-gray-800 my-4 ps-4 md:ps-0">Recommended Health Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                    <div className="border border-gray-300 p-3 rounded-lg">
                        <div className="flex place-items-start">
                            <Image
                                src={IMAGES.HACKS1}
                                alt="Health hacks"
                                className="w-24 h-24 object-cover"
                            />
                            <div className="ml-4 text-start">
                                <h3 className="font-bold text-sm">
                                    Cold Milk
                                </h3>
                                <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                    <li>Significance</li>
                                    <li>Usage of Cold Milk</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-300 p-3 rounded-lg">
                        <div className="flex place-items-start">
                            <Image
                                src={IMAGES.TURMERIC}
                                alt="Health hacks"
                                className="w-24 h-24 object-cover"
                            />
                            <div className="ml-4 text-start">
                                <h3 className="font-bold text-sm">
                                    Turmeric Health Tips
                                </h3>
                                <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                    <li>Significance</li>
                                    <li>Usage of Turmeric </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default DailyHealthTips