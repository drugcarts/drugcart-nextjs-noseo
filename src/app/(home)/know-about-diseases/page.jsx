"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import { GetDiseasesService } from '@/services/diseasesService';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box, Pagination, Typography } from '@mui/material';

const KnowDiseases = () => {
    const { diseasesList } = useSelector((state) => state.diseasesData);
    const router = useRouter();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [articleImages, setArticleImages] = useState({});
    const [articlePContent, setArticlePContent] = useState({});

    useEffect(() => {
        dispatch(GetDiseasesService(page, 20));
    }, [page]);

    useEffect(() => {
        if (diseasesList?.diseases_list?.length > 0) {
            const extractedImages = {};
            const extractedPContent = {};

            diseasesList.diseases_list.forEach((item, index) => {
                if (item.about) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(item.about, "text/html");

                    const imgTags = doc.querySelectorAll("img");
                    const imgSources = Array.from(imgTags).map((img) => img.src);
                    extractedImages[index] = imgSources.length > 0 ? imgSources[0] : null;

                    const origindoc = parser.parseFromString(item.diagnostic, "text/html");
                    const pElements = origindoc.querySelectorAll("li");
                    extractedPContent[index] = Array.from(pElements)
                        .map((p) => p.outerHTML)
                        .join("");
                }
            });

            setArticleImages(extractedImages);
            setArticlePContent(extractedPContent);
        }
    }, [diseasesList]);

    const diseasesClick = (url) => {
        router.push(`/diseases/${url}`)
    }

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <h2 className='text-md md:text-xl font-bold m-3'>List Of Medical Conditons A to Z</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-0 gap-3">
                {diseasesList?.diseases_list?.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                        onClick={() => diseasesClick(item?.url)}>
                        <div className="flex place-items-start">
                            <Image
                                src={articleImages[i] ? articleImages[i] : IMAGES.NO_IMAGE}
                                alt="Health hacks"
                                width={200}
                                height={200}
                                className="w-24 h-24 object-cover"
                            />
                            <div className="ml-4 text-start">
                                <h3 className="font-bold text-sm">
                                    {item?.name}
                                </h3>
                                <div
                                    className="rich-content-card text-xs"
                                    dangerouslySetInnerHTML={{
                                        __html: articlePContent[i]?.length > 100
                                            ? articlePContent[i].slice(0, 100) + "..."
                                            : articlePContent[i] || "<p>No description available</p>"
                                    }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontFamily={"Poppins"}>Showing {page}-{10} of {diseasesList?.pagination?.totalItems} entries</Typography>
                <Pagination
                    size="large"
                    count={diseasesList?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </section>
    )
}

export default KnowDiseases;