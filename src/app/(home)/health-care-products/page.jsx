"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "@/components/common/images";
import Helpful from "@/components/ProductDetailsCard/Helpful";
import OtcProduct from "@/components/ProductDetailsCard/OtcProduct";
import ProductCategoryCard from "@/components/ProductDetailsCard/ProductCategoryCard";
import { GetProductCatsService } from "@/services/productService";
import ProductCard from "@/components/ProductDetailsCard/ProductCard";

const HealthCareProducts = () => {
  const pathname = usePathname();
  const params = useParams();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showNo, setShowNo] = useState(10);
  const dispatch = useDispatch();
  let pathSegments = pathname.split("/").filter(Boolean);
  pathSegments = pathSegments.map((segment) => segment.replace(/-/g, " "));
  const { categoryProducts } = useSelector((state) => state.productData);

  useEffect(() => {
    // dispatch(GetProductCatsService(page, showNo, params?.url, search));
    dispatch(GetProductCatsService(1, 10, "treatments", search));
  }, [page, showNo, search]);

  console.log(categoryProducts, "URL");
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <Image
        priority
        src={IMAGES.AYURVEDICBNNR}
        alt="Ayush Banner"
        className="w-[100%] h-[450px] rounded-lg"
      />
      <div className="flex py-2">
        <div className="w-[20%] m-3 max-h-auto">
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#35A24D] text-white">
            Ayush
          </h2>
          <div className="bg-[#FFEDF2] text-sm mb-10">
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.AYUSH}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Ayush</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.SIDDHA}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Siddha</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.UNANI}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Unani</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.HOMEOPATHY}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Homeopathy</h2>
            </div>
          </div>
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#b7064b] text-white">
            Health Store
          </h2>
          <div className="bg-[#D8EECA] text-sm">
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.PERSONALCARE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Personal Care</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.SUPPLEMENTS}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Fitness Supplements</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.HEALTHCARE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Health Care Products</h2>
            </div>
          </div>

          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] mt-10 bg-gray-700 text-white">
            Health Health Device
          </h2>
          <div className="bg-[#EBEBEB] text-sm">
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.BLOODPRESSURE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Blood Pressure Monitor</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.BLOODTEST}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Blood Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.COVIDTEST}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Covid Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.GLUCOMETER}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Diabetes Monitor</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.HIV}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">HIV Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.PREGNANCY}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Pregnancy Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.PULSE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Pulse Oximeter</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.NEBULIZER}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Nebulier Machines</h2>
            </div>
          </div>
          <div className="text-center bg-[#35A24D] p-2 mt-10 border-b-2 px-4">
            <h2 className="text-xl text-white font-bold ps-7">
              Filter By Company
            </h2>
          </div>
          <div className="items-center justify-start gap-2 border-[1.5px] mb-10">
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Revyur beauty care india pvt ltd
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Blossom kochhar aroma magic
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Sriveda sattva pvt ltd
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Vlcc health care ltd
            </h2>
            <h2 className="text-md font-bold p-2 px-4">Dabur india ltd</h2>
          </div>
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] mt-10 bg-[#4C4C95] text-white">
            Price Range
          </h2>
          <div className="items-center justify-start gap-2 border-[1.5px] mb-10">
            <h2 className="text-md font-bold p-2 border-b-2 px-4">Price</h2>
          </div>
          <Helpful />
          <OtcProduct />
        </div>
        <div className="w-[80%]">
          <div className="flex justify-between items-center bg-green-600 text-white font-semibold p-3 my-3">
            <span className="text-lg capitalize">
              {pathSegments[0]} Product
            </span>
            <button className="text-sm flex items-center hover:underline">
              View All
            </button>
          </div>
          <div className="bg-[#F0F4FF]">
            <ProductCard data={categoryProducts?.catproducts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCareProducts;
