"use client";
import { useParams } from "next/navigation";
import ProductView from "@/components/ProductDetailsCard/ProductView";

const ProductPage = () => {
  const params = useParams();
  const productUrl = params?.url;

  return <ProductView url={productUrl} />;
};

export default ProductPage;
