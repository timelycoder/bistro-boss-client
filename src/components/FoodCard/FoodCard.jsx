import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt="Food" className="rounded-xl" />
      </figure>
      <div className="card-body  flex flex-col items-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-400 mt-4 border-0 border-b-4 border-orange-500">
            ${price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
