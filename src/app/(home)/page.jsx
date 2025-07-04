"use client";
import { useEffect } from "react";
import Slider from "@/components/layout/Slider";
import TopCategory from "@/components/home-page/topCategory";
import TrandingProduct from "@/components/home-page/trandingProduct";
import BannerGroup from "@/components/home-page/bannerGroup";
import ServiceGroup from "@/components/home-page/serviceGroup";
import FeaturedPackage from "@/components/home-page/featuredPackage";
import HealthHacks from "@/components/home-page/healthHacks";
import ShopbyCategory from "@/components/home-page/shopbyCategory";
import FameSection from "@/components/home-page/fameSection";
import BlogCard from "@/components/home-page/blogCard";
import Feedback from "@/components/home-page/feedback";
import CustomerSaying from "@/components/home-page/CustomerSaying";
import { useDispatch, useSelector } from "react-redux";
import { getProfileService } from "@/services/profileService";
import { getCartService } from "@/services/cartService";
import FeedbackCard from "@/components/home-page/FeedbackCard";
import { GetBlogService } from "@/services/blogService";

const Home = () => {
  const { profile } = useSelector((state) => state.profileData);
  const { blogList } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("Intentional Delay");
  //   }, 2000);
  // })

  useEffect(() => {
    // dispatch(getProfileService());
    //  dispatch(getCartService())
    dispatch(GetBlogService(1, 3));
  }, []);
  console.log(profile);

  return (
    <main className="p-2">
      <Slider />
      <section className="px-10 mt-4">
        <div className="p-2 bg-gray-100 font-bold mb-4">
          <h1>Shop of Categories</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          <TopCategory />
        </div>
      </section>
      <TrandingProduct />
      <BannerGroup />
      <ServiceGroup />
      <FeaturedPackage />
      <HealthHacks />
      <ShopbyCategory />
      <FameSection />
      <section className="px-10 mt-10">
        <div className="bg-bgblog rounded-md px-5 md:px-10">
          <h1 className="font-bold text-xl md:text-2xl p-5">Our Latest Blog</h1>
          <BlogCard blogData={blogList?.blogs} />
        </div>
      </section>
      <FeedbackCard />
      <CustomerSaying />
    </main>
  );
};

export default Home;
