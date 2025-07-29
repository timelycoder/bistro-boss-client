import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center w-3/12 mx-auto py-4">
      <p className="text-yellow-500 mb-2">--- {subHeading} ---</p>
      <p className="text-3xl uppercase border-y-4 py-5">{heading}</p>
    </div>
  );
};

export default SectionTitle;
