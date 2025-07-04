"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Box, Pagination, Typography } from "@mui/material";
import { GetHealthNewsService, GetLatestHealthNewsService } from "@/services/heathNewsService";
import { DateFormat } from "@/utils/dateFormat";

const HealthNews = () => {
  const { healthNewsList, healthLatestNews } = useSelector((state) => state.healthNewsData);
  const router = useRouter();
  const dispatch = useDispatch();
  const [articleImages, setArticleImages] = useState({});
  const [articleOneImages, setArticleOneImages] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(GetLatestHealthNewsService());
    dispatch(GetHealthNewsService(page, 12));
  }, [page]);

  const extractData = (articles) => {
    const images = {};
    const ulContent = {};

    articles?.forEach((article, index) => {
      if (!article.description) return;
      const parser = new DOMParser();
      const doc = parser.parseFromString(article.description, "text/html");

      const img = doc.querySelector("img");
      images[index] = img?.src || null;

      const uls = doc.querySelectorAll("ul");
      const html = Array.from(uls).map((ul) => ul.outerHTML).join("");
      ulContent[index] = html;
    });

    return { images, ulContent };
  };

  useEffect(() => {
    if (healthNewsList?.health_news?.length > 0) {
      const { images } = extractData(healthNewsList.health_news);
      setArticleImages(images);
    }
    if (healthLatestNews?.health_news?.length > 0) {
      const { images } = extractData(healthLatestNews.health_news);
      setArticleOneImages(images);
    }
  }, [healthNewsList, healthLatestNews]);

  const handleNewsClick = (url) => {
    router.push(`/health-news-details/${url}`);
  };

  const getImage = (imgSrc) => {
    if (!imgSrc || imgSrc.endsWith(".svg") || imgSrc.startsWith("data:image")) {
      return "/assets/no_image.png";
    }
    return imgSrc;
  };

  return (
    <section className="max-w-7xl mt-3 mx-auto">
      <div className="flex flex-wrap">
        <div
          className="w-full md:w-4/6 cursor-pointer"
          onClick={() => handleNewsClick(healthLatestNews?.health_news?.[0]?.url)}
        >
          <img
            src={getImage(articleOneImages[0])}
            alt="Main Article"
            className="w-full h-96 rounded p-4 object-cover mx-auto"
          />
          <p className="p-3 text-md font-semibold">{healthLatestNews?.health_news?.[0]?.title}</p>
        </div>

        <div className="w-full md:w-2/6 p-3">
          <h3 className="text-sm md:text-xl font-bold mb-4">Latest News</h3>
          {healthLatestNews?.health_news?.slice(0, 3).map((article, i) => (
            <div
              key={i}
              className="flex items-start mb-3 cursor-pointer"
              onClick={() => handleNewsClick(article.url)}
            >
              <img
                src={getImage(articleOneImages[i])}
                alt={`Thumbnail ${i}`}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4 text-start">
                <h3 className="font-bold text-sm">{article.title}</h3>
                <p className="mt-2 text-xs text-gray-500">{DateFormat(article.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-md md:text-xl font-bold m-3">All Health News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 md:px-0">
        {healthNewsList?.health_news?.map((article, i) => (
          <div
            key={i}
            className="bg-[#F8F8F8] p-3 rounded cursor-pointer"
            onClick={() => handleNewsClick(article.url)}
          >
            <div className="flex items-start">
              <img
                src={getImage(articleImages[i])}
                alt={`Article ${i}`}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="ml-4 text-start">
                <h3 className="font-bold text-sm">{article.title}</h3>
                <p className="mt-2 text-xs text-gray-500">{DateFormat(article.date)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Box className="mt-4 flex justify-between items-center px-4 md:px-0">
        <Typography fontFamily="Poppins" fontSize="14px">
          Showing {healthNewsList?.pagination?.currentPage} - 6 of {healthNewsList?.pagination?.totalItems} entries
        </Typography>
        <Pagination
          size="large"
          count={healthNewsList?.pagination?.totalPages || 1}
          page={page}
          color="secondary"
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </section>
  );
};

export default HealthNews;
