"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext(undefined);

export const Provider = ({ children }) => {
  const [favNews, setFavNews] = useState([]);
  const [user, setUser] = useState({
  
    email: "",
  });
  const [isUserLogined, setIsUserLogined] = useState(false);
  const handleArticleExist = (article) => {
    let articleAlreadyExist = favNews.filter(
      (item) => item.title == article.title
    );
    return articleAlreadyExist.length;
  };
  const handleFavClick = (article) => {
    // console.log("🚀 ~ handleFavClick ~ article:", article);
    // console.log("🚀 ~ handleFavClick ~ favNews:", favNews);
    // let articleAlreadyExist = favNews.filter(
    //   (item) => item.title == article.title
    // );
    let articleAlreadyExist = handleArticleExist(article);
    console.log("🚀 ~ handleFavClick ~ articleAlreadyExist:", articleAlreadyExist)

    if (!articleAlreadyExist )
      setFavNews((prevState) => [...prevState, article]);
  };
  const handleFavDeleteClick = (index) => {
    let deltedArray = [...favNews];
    deltedArray.splice(index, 1);
    setFavNews(deltedArray);
    // let filteredArticle=favNews.filter((item)=>item.id != id);
    // setFavNews(filteredArticle);
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        isUserLogined,
        setIsUserLogined,
        favNews,
        setFavNews,
        handleFavClick,
        handleFavDeleteClick,
        handleArticleExist,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProviderContext = () => {
  return useContext(Context);
};
