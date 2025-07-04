import React, { useState } from 'react'
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

function CategoryCard({ imagUrl, imageAlt, title, onClick }) {
    const CategoryImage = ({ width, height, className }) => {
        const primaryImage = imagUrl
            ? `https://assets2.drugcarts.com/category/thumb/${imagUrl}`
            : null;

        const fallbackImage = imagUrl
            ? `https://drugcarts-nextjs.s3.ap-south-1.amazonaws.com/category/thumb/${imagUrl}`
            : null;

        const [imgSrc, setImgSrc] = useState(primaryImage || IMAGES.NO_IMAGE);

        const handleError = () => {
            if (imgSrc !== fallbackImage && fallbackImage) {
                setImgSrc(fallbackImage);
            } else {
                setImgSrc(IMAGES.NO_IMAGE);
            }
        };

        return (
            <Image
                priority
                src={imgSrc}
                alt={imageAlt || 'Category Image'}
                width={width}
                height={height}
                className={className}
                onError={handleError}
            />
        );
    };
    return (
        <div className="bg-bgshop rounded-lg p-4 cursor-pointer" onClick={onClick}>
            <p className="text-center">
                {/* <Image
                    width={100}
                    height={100}
                    src={imagUrl}
                    alt={imageAlt}
                    className={`mb-3 mx-auto object-cover ${imagUrl ? "bg-bgcancer" : "bg-white"} rounded-full p-2`}
                /> */}
                <CategoryImage imagUrl={imagUrl} width={100} height={100} className={`mb-3 mx-auto object-cover ${imagUrl ? "bg-bgcancer" : "bg-white"} rounded-full p-2 w-24 h-24`} />
                <span>{title}</span>
            </p>
        </div>
    )
}

export default CategoryCard;