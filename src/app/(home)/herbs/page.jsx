"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import { GetHerbsService } from '@/services/herbsService';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Box, Pagination, Typography } from '@mui/material';

const Herbs = () => {
    const { herbsList } = useSelector((state) => state.herbsData);
    const router = useRouter();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [articleImages, setArticleImages] = useState({});
    const [articlePContent, setArticlePContent] = useState({});

    useEffect(() => {
        dispatch(GetHerbsService(page, 12));
    }, [page]);

    useEffect(() => {
        if (herbsList?.herbs_list?.length > 0) {
            const extractedImages = {};
            const extractedPContent = {};

            herbsList.herbs_list.forEach((item, index) => {
                if (item.description) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(item.description, "text/html");

                    const imgTags = doc.querySelectorAll("img");
                    const imgSources = Array.from(imgTags).map((img) => img.src);
                    extractedImages[index] = imgSources.length > 0 ? imgSources[0] : null;

                    const origindoc = parser.parseFromString(item.faq, "text/html");
                    const pElements = origindoc.querySelectorAll("ul");
                    extractedPContent[index] = Array.from(pElements)
                        .map((p) => p.outerHTML)
                        .join("");
                }
            });

            setArticleImages(extractedImages);
            setArticlePContent(extractedPContent);
        }
    }, [herbsList]);

    const herbsClick = (url) => {
        router.push(`/herbs-details/${url}`)
    }

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-0 gap-3">
                {herbsList?.herbs_list?.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                        onClick={() => herbsClick(item?.url)}>
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
                                    {item?.title}
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
                <Typography fontFamily={"Poppins"}>Showing {page}-{10} of {herbsList?.pagination?.totalItems} entries</Typography>
                <Pagination
                    size="large"
                    count={herbsList?.pagination?.totalPages}
                    page={page}
                    color="secondary"
                    onChange={(_, value) => setPage(value)}
                />
            </Box>
        </section>
    )
}

export default Herbs;