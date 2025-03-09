import SerachPageSection from "@/components/templates/pageSections/SerachPageSection";
import React from "react";

const page = ({ params }) => {
  console.log("🚀 ~ page ~ param:", params.slug);

  return (
    <div>
      <h1>{params.slug}</h1>
      <SerachPageSection searchQuery={params.slug} />
    </div>
  );
};

export default page;
