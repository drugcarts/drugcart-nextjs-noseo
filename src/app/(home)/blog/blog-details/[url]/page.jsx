"use client";
import Image from "next/image";
import BlogCard from "@/components/home-page/blogCard";
import { IMAGES } from "@/components/common/images";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetBlogUrlService } from "@/services/blogService";
import { useParams } from "next/navigation";

const BlogDetail = () => {
  const { blogUrl } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();
  const params = useParams()

  useEffect(() => {
    dispatch(GetBlogUrlService(params?.url));
  }, [params?.url]);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          <div className="w-full flex-none">
            <h1 className="font-bold text-xl md:text-2xl my-2 p-3">
              {blogUrl?.blogname}
            </h1>
            <div className="space-y-2 p-3" dangerouslySetInnerHTML={{ __html: blogUrl.description }} />
          </div>
          {/* <div className="w-[20%] flex-none">
            <h1 className="font-bold text-xl md:text-xl">Home Remedies</h1>
            <div className="bg-[#F3F8FC] p-3 rounded-md">
              <Image
                src={IMAGES.BLOGIMAGE}
                alt="Blog Medicine"
                className="h-44 object-cover"
              />
              <h2>Gargling Salt Water</h2>
              <p>
                Salt water gargling benefits throat and oral health.  May
                provide relief from sore throat, canker sores, and respiratory
                infections.  May promote dental health by preventing gum
                diseases and dental plaque.  May help maintain natural pH levels
                and reduce allergy symptoms.  Easy and safe home remedy for
                adults and children.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
