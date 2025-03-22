"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext(undefined);

export const Provider = ({ children }) => {
  const [favNews, setFavNews] = useState([]);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const [isUserLogined, setIsUserLogined] = useState(false);
  const handleFavClick = (article) => {
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProviderContext = () => {
  return useContext(Context);
};
