import React from "react";
import Cover from "../shared/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import menuImg from "../../assets/menu/menu-bg.png";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  //   const offered = menu.filter((item) => item.category === "offered");

  console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>
      <Cover img={coverImg} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading="dont miss"
        heading="today's offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title={"dessert"}
        img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
