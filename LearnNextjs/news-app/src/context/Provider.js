"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext(undefined);

export const Provider = ({ children }) => {
  const APIURL = process.env.NEXT_PUBLIC_API;

  const router = useRouter();
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
    // console.log(
    //   "🚀 ~ handleFavClick ~ articleAlreadyExist:",
    //   articleAlreadyExist
    // );
    if (!articleAlreadyExist)
      setFavNews((prevState) => [...prevState, article]);
  };
  const handleFavDeleteClick = (index) => {
    let deltedArray = [...favNews];
    deltedArray.splice(index, 1);
    setFavNews(deltedArray);
    // let filteredArticle=favNews.filter((item)=>item.id != id);
    // setFavNews(filteredArticle);
  };
  const handleFetchUser = async () => {
    try {
      const userData = localStorage.getItem("user");
      const parsedUserData = JSON.parse(userData);

      if (!parsedUserData) {
        router.push("/login");
        return;
      }

      const response = await fetch(`${APIURL}/auth/fetch-current-user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${parsedUserData.token}`,
        },
      });
      const data = await response.json();
      console.log("🚀 ~ handleFetchUser ~ data:", data);
      if (data.success) {
        setUser(data.data.user);
        setIsUserLogined(true);
      } else {
        localStorage.removeItem("user");
        setIsUserLogined(false);
        router.push("/login");
      }
    } catch (error) {
      console.log("🚀 ~ handleFetchUser ~ error:", error);
    }
  };


  const handleLogout=()=>{
    localStorage.removeItem("user");
    setIsUserLogined(false);
    setUser({})
    router.push("/login");
    // history.push("/login");
  }
  useEffect(() => {
    handleFetchUser();
  }, []);




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
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProviderContext = () => {
  return useContext(Context);
};
