import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ article }) {
  console.log("🚀 ~ NewsCard ~ article:", article);
  return (
    <div className="max-w-md bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <img
        src={article.image ? article.image : "/assest/images/newsImg.jpg"}
        alt={article.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {article.title}
        </h2>
        <p className="text-gray-600 text-sm mb-3">{article.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>📰 {article.source.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        <Link
          href={article.url}
          target="_blank"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

// Usage Example
// import NewsCard from "./components/NewsCard";
// <NewsCard article={yourNewsData} />
