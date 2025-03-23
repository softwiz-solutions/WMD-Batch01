"use client"
import React, { useEffect, useState } from "react";
import NewsCard from "../cards/NewsCard";
import MainLoader from "../loaders/MainLoader";

const BusinessPageSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchNews = async () => {
    try {
      setLoading(true);
      const apikey = process.env.NEXT_PUBLIC_GNEWS_API;
      console.log("🚀 ~ fetchNews ~ apikey:", apikey)
      //   const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=pk&max=100&apikey=${apikey}`;
      const url = `https://gnews.io/api/v4/top-headlines?category=business&apikey=${apikey}`;
      const result = await fetch(url);
      const data = await result.json();
      console.log("data business", data);
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
          <h1>new api</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((item, index) => {
              return <NewsCard key={index} article={item}  />;
            })}
          </div>
          {/* <NewsCard title={} description={} content={} url={} image={} publishedAt={} source={}/> */}
        </div>
      )}
    </div>
  );
};

export default BusinessPageSection;
