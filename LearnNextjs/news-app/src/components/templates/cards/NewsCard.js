import Link from "next/link";

export default function NewsCard({
  article,
  onFavClick = () => {},
  onFavDelete = () => {},
  showFavIcon = true,
  showDelete = false,
}) {
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
          {showFavIcon && (
            <svg
              onClick={onFavClick}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
          {showDelete && (
            <svg
              onClick={onFavDelete}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          )}
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
