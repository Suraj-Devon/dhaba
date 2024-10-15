import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <img
          className="rounded-full w-24 h-24 md:w-32 md:h-32 border-4 border-gray-300 mb-4"
          src={props.img}
          alt={props.name}
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{props.name}</h3>
        <p className="text-gray-600 italic text-sm md:text-base px-4">
          {props.review}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

