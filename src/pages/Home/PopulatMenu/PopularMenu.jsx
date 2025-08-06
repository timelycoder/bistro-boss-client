// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import Category from "../Category/Category";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"popular items"}
        heading={"from our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
