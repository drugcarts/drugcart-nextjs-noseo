"use client";
import HealtharticleCard from "@/components/footer/HealtharticleCard";
import { GetArticleService } from "@/services/articleService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HealthArticle = () => {
  return (
    <HealtharticleCard />
  )
}

export default HealthArticle;