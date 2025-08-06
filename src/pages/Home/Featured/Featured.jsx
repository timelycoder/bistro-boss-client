import React from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";
import { Link } from "react-router-dom";

const Featured = ({ title }) => {
  console.log(title);
  return (
    <section className="feature-item text-white  bg-fixed my-9 ">
      <div className="bg-slate-950 bg-opacity-40 pt-9 ">
        <SectionTitle
          subHeading={"check it out"}
          heading={"from our menu"}
        ></SectionTitle>
        <div className="flex justify-center items-center py-16 px-24 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="ml-6">
            <p className="uppercase text-2xl mb-3">March 20, 2023</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Link to={`/order/${title}`}>
              <button className="btn btn-outline  mt-4 border-0 border-b-4">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
