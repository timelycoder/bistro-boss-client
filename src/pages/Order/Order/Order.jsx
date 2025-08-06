import React, { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);
  //   const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Order Food</title>
      </Helmet>
      <Cover img={orderImg} title={"order food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad </Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
