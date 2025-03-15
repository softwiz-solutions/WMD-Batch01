"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "../cards/NewsCard";
import MainLoader from "../loaders/MainLoader";
import { useProviderContext } from "@/context/Provider";

const HomePageSection = () => {
  const { user } = useProviderContext();
  console.log("🚀 ~ HomePageSection ~ user:", user);

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchNews = async () => {
    try {
      setLoading(true);
      const apikey = process.env.NEXT_PUBLIC_GNEWS_API;
      const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=pk&max=100&apikey=${apikey}`;
      const result = await fetch(url);
      const data = await result.json();
      console.log("data", data);
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

export default HomePageSection;
// {
//     "title": "AI versus the brain and the race for general intelligence",
//     "description": "We already have an example of general intelligence, and it doesn’t look like AI.",
//     "content": "There's no question that AI systems have accomplished some impressive feats, mastering games, writing text, and generating convincing images and video. That's gotten some people talking about the possibility that we're on the cusp of AGI, or artifici... [1801 chars]",
//     "url": "https://arstechnica.com/science/2025/03/ai-versus-the-brain-and-the-race-for-general-intelligence/",
//     "image": "https://cdn.arstechnica.net/wp-content/uploads/2025/02/GettyImages-1202271610-scaled-1152x648-1741012537.jpg",
//     "publishedAt": "2025-03-03T12:00:09Z",
//     "source": {
//         "name": "Ars Technica",
//         "url": "https://arstechnica.com"
//     }
// },
