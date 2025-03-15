"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "../cards/NewsCard";
import MainLoader from "../loaders/MainLoader";
import { useProviderContext } from "@/context/Provider";

const SerachPageSection = ({ searchQuery }) => {
  console.log("🚀 ~ SerachPageSection ~ searchQuery:", searchQuery);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useProviderContext();
  const fetchNews = async () => {
    try {
      setLoading(true);
      const apikey = process.env.NEXT_PUBLIC_GNEWS_API;
      console.log("🚀 ~ fetchNews ~ apikey:", apikey);
      //   const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=pk&max=100&apikey=${apikey}`;
      const url = `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apikey}`;
      const result = await fetch(url);
      const data = await result.json();
      console.log("data serach", data);
      setNews(data.articles);
      //   setLoading(false);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      {loading ? (
        <MainLoader />
      ) : (
        <div>
          {user?.name && <h1>{user.name}</h1>}
          <h1>new api</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item, index) => {
              return <NewsCard key={index} article={item} />;
            })}
          </div>
          {/* <NewsCard title={} description={} content={} url={} image={} publishedAt={} source={}/> */}
        </div>
      )}
    </div>
  );
};

export default SerachPageSection;
