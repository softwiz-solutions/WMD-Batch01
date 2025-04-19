import React from "react";

const MainButton = ({ title, onClick = () => {}, isLoading, isValid }) => {
  return <button className="bg-red-400 px-4 " onClick={onClick}>{title}</button>;
};

export default MainButton;
