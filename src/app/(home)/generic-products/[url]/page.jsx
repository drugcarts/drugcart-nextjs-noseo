"use client";
import { IMAGES } from "@/components/common/images";
import Image from "next/image";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { PostQuestionService } from '@/services/questionService';
import { useParams } from "next/navigation";
import { GetGeneticNameUrlService } from "@/services/genericService";
import { GetProductGeneticUrlService } from "@/services/productService";

const GenericProductDetail = () => {
  const { genericNameUrl } = useSelector((state) => state.genericData)
  const { productGenericUrl } = useSelector((state) => state.productData)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
    dispatch(GetGeneticNameUrlService(params.url))
    dispatch(GetProductGeneticUrlService(params.url))
  }, [params.url])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      question: "",
    },
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      await dispatch(PostQuestionService(data, resetForm))
    },
  });

  console.log(productGenericUrl);

  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex flex-wrap py-2">
        <div className="w-full md:w-[70%] m-4">
          <h2 className="text-xl uppercase py-2 font-bold">
            INFORMATION ABOUT {genericNameUrl?.generices}
          </h2>
          <div className="p-2 bg-gray-100 font-bold my-4">
            <h1 className="text-xl uppercase">Description {genericNameUrl?.generices}</h1>
          </div>
          <div className="rich-content space-y-4" dangerouslySetInnerHTML={{ __html: genericNameUrl?.description }} />
          <div className="p-2 bg-gray-100 font-bold my-4">
            <h1 className="text-xl uppercase">Uses and Benefits of {genericNameUrl?.generices}</h1>
          </div>
          <div className="rich-content space-y-4" dangerouslySetInnerHTML={{ __html: genericNameUrl?.useofbenefits }} />
          <div className="p-2 bg-gray-100 font-bold my-4">
            <h1 className="text-xl uppercase">
              Mechanism of action of {genericNameUrl?.generices}
            </h1>
          </div>
          <div className="rich-content space-y-4" dangerouslySetInnerHTML={{ __html: genericNameUrl?.mechanism }} />
        </div>
        <div className="w-full md:w-[30%] p-2 border-[1.5px]">
          <h2 className="text-xl text-center uppercase py-2 font-bold border-b-[1.5px] hidden md:block">
            AVAILABLE MEDICINE FOR {genericNameUrl?.generices}
          </h2>
          {productGenericUrl && productGenericUrl?.map((product, i) => (
            <div className="border-b-[1.5px] py-2 hidden md:block" key={i}>
              <div className="flex p-2">
                <Image
                  priority
                  src={product?.product_img ? `https://assets1.drugcarts.com/${product?.product_img}` : IMAGES.NO_IMAGE}
                  alt="alternative"
                  width={200}
                  height={200}
                  className="h-20 w-20 rounded-md"
                />
                <div className="mx-auto ml-2 w-full p-2">
                  <h3 className="text-[16px]">{product?.product_name}</h3>
                  <p className="text-[14px] text-[red] font-bold">Rs.{product?.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap justify-center items-center mt-5">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={formik.handleSubmit}>
              <h2 className="text-xl font-semibold text-center mb-4">
                Have any Question?
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  value={genericNameUrl?.generices || ""}
                  readOnly
                  className="w-full p-2 border rounded bg-gray-300 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  required
                />
                <input
                  type="number"
                  placeholder="Contact No."
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  required
                />
                <textarea
                  placeholder="Question"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400 h-24"
                  value={formik.values.question}
                  onChange={formik.handleChange("question")}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericProductDetail;
