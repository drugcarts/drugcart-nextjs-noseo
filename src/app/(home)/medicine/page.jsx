"use client"
import { IMAGES } from "@/components/common/images";
import { GetCategoryService, GetLetterCategoryService } from "@/services/categoryService";
import { Box, Pagination, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPageBannerUrlService } from "@/services/pageBannerService";

const Medicine = () => {
  const { pageBannerUrl } = useSelector((state) => state.pageBannerData)
  const router = useRouter();
  const { firstLetter, categories } = useSelector((state) => state.categoryData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    dispatch(GetPageBannerUrlService("medicine"))
    dispatch(GetLetterCategoryService(page, 18, selectedLetter));
  }, [page, selectedLetter]);

  const categroyClick = (cat_url) => {
    router.push(`/catalog/${cat_url}`)
  }

  const CategoryImage = ({ category, width, height, className }) => {
    const primaryImage = category?.cat_img
      ? `https://assets2.drugcarts.com/category/thumb/${category?.cat_img}`
      : null;

    const fallbackImage = category?.cat_img
      ? `https://drugcarts-nextjs.s3.ap-south-1.amazonaws.com/category/thumb/${category.cat_img}`
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
        alt={category?.category_name || 'Category Image'}
        width={width}
        height={height}
        className={className}
        onError={handleError}
      />
    );
  };

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <Image
          priority
          src={pageBannerUrl?.image ? `https://assets1.drugcarts.com/admincolor/homepage/pagebanner/${pageBannerUrl?.image}` : IMAGES.NO_IMAGE}
          alt="Ayush Banner"
          className="w-[100%] h-[200px] rounded-xl"
          width={500}
          height={100}
        />
        <div className="py-2 text-xl font-bold px-2 md:px-0">
          <h2>A - Z Order Medicine</h2>
          <div className="flex flex-wrap justify-center gap-2 my-4">
            {alphabet.map((letter, i) => (
              <button
                className={`${selectedLetter === letter ? "bg-[#B7084B]" : "bg-[#35A24D]"} px-2 text-white rounded-md`}
                key={i}
                onClick={() => {
                  setSelectedLetter(letter);
                  setPage(1)
                }}
              >
                {letter}
              </button>
            ))}
            <button
              className={`${selectedLetter === "" ? "bg-[#B7084B]" : "bg-[#35A24D]"} px-2 text-white rounded-md`}
              onClick={() => {
                setSelectedLetter("")
                setPage(1)
              }}
            >
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pb-20 px-2 md:px-0">
          {firstLetter?.categories &&
            firstLetter?.categories?.map((category, i) => (
              <div
                className="bg-bgshop rounded-lg p-4 cursor-pointer"
                key={i}
                onClick={() => categroyClick(category?.url)}
              >
                <p className="text-center">
                  {/* <Image
                    width={100}
                    height={100}
                    src={category?.cat_img ? `https://assets2.drugcarts.com/category/thumb/${category?.cat_img}` : IMAGES.NO_IMAGE}
                    alt={category?.category_name}
                    className={`mb-3 mx-auto object-cover ${category?.cat_img ? "bg-bgcancer" : "bg-white"} rounded-full p-2`}
                  /> */}
                   <CategoryImage  category={category} width={100} height={100} className={`mb-3 mx-auto object-cover ${category?.cat_img ? "bg-bgcancer" : "bg-white"} rounded-full p-2 w-24 h-24`}/>
                  <span className="capitalize">{category?.category_name}</span>
                </p>
              </div>
            ))}
        </div>
        <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center', }}>
          <Typography fontFamily={"Poppins"}>Showing 1-{10} of {firstLetter?.pagination?.totalItems} entries</Typography>
          <br />
          <Pagination
            size="large"
            count={firstLetter?.pagination?.totalPages}
            page={page}
            color="secondary"
            onChange={(_, value) => setPage(value)}
          />
        </Box>
      </section>
    </>
  );
};

export default Medicine;
