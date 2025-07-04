"use client";
import Image from "next/image";
import BlogCard from "@/components/home-page/blogCard";
import { IMAGES } from "@/components/common/images";
import Link from "next/link";
import { GetBlogService, GetLatestBlogService, GetTrandingBlogService } from "@/services/blogService";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";

const Blog = () => {
  const { blogList, blogLatest, blogTranding } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(GetLatestBlogService());
    dispatch(GetTrandingBlogService());
  }, []);

  useEffect(() => {
    dispatch(GetBlogService(page, 9));
  }, [page]);

  const scrollToSection = () => {
    const element = document.getElementById("description");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Image
          src={IMAGES.BLOGBANNER}
          alt="Blog Banner"
          className="h-86 w-[100%]"
        />
        <div className="py-5">
          <h1 className="font-bold text-xl md:text-2xl p-5">Lastest Blog</h1>
          <BlogCard blogData={blogLatest?.blogs} />
          {blogTranding?.blogs?.length > 0 && (
            <>
              <h1 className="font-bold text-xl md:text-2xl p-5">Trending Today</h1>
              <BlogCard blogData={blogTranding?.blogs} />
            </>
          )}
          <h1 className="font-bold text-xl md:text-2xl p-5" id="description">All Blogs</h1>
          <BlogCard blogData={blogList?.blogs} />
          <Box sx={{ my: 2, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography fontFamily={"Poppins"}>Showing {page}-{10} of {blogList?.pagination?.totalItems} entries</Typography>
            <Pagination
              size="large"
              count={blogList?.pagination?.totalPages}
              page={page}
              color="secondary"
              onChange={(_, value) => {
                setPage(value)
                 scrollToSection();
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Blog;
