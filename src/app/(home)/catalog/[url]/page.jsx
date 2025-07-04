"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { IMAGES } from "@/components/common/images";
import { GetSubCategoryUrlService } from "@/services/subCategoryService";
import CategoryCard from "@/components/common/CategoryCard";
import { useParams, useRouter } from "next/navigation";

const Catalog = () => {
  const { subCategoryUrl } = useSelector((state) => state.subCategoryData)
  const params = useParams()
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(GetSubCategoryUrlService(params?.url))
  }, [params?.url])

  const subCategroyClick = (cat_url) => {
    router.push(`/generic-index/${cat_url}`)
  }


  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="py-2 text-xl font-bold">
          <h2>List of Medicine in {subCategoryUrl[0]?.cat_name}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 py-4">
          {subCategoryUrl && subCategoryUrl.map((sub, i) => (
            <CategoryCard
              onClick={() => subCategroyClick(sub?.url)}
              title={sub?.subcat_name}
              imageAlt={sub?.cat_name}
              imagUrl={sub?.cat_img}
              key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Catalog;
