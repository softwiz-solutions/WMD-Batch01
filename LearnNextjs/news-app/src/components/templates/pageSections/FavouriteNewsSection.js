"use client";
import { useProviderContext } from "@/context/Provider";
import React from "react";
import NewsCard from "../cards/NewsCard";

const FavouriteNewsSection = () => {
  const { favNews, handleFavDeleteClick } = useProviderContext();
  console.log("🚀 ~ FavouriteNewsSection ~ favNews:", favNews)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favNews.map((item, index) => {
          return (
            <NewsCard
              key={index}
              article={item}
              showFavIcon={false}
              showDelete={true}
              onFavDelete={() => {
                handleFavDeleteClick(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteNewsSection;
