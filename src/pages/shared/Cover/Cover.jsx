import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div className="hero min-h-[700px]">
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md uppercase">
              <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
              <p className="mb-5">Would you like to try a dish</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
