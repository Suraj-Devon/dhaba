import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/review-1.jpg";
import img2 from "../assets/img/review-2.jpg";
import img3 from "../assets/img/review-3.jpg";
import img4 from "../assets/img/review-4.jpg";
import img5 from "../assets/img/review-5.jpg";
import img6 from "../assets/img/review-6.jpg";
import img7 from "../assets/img/review-7.jpg";

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-5 bg-gray-50 bg-opacity-95 z-10 relative">
      <h1 className="text-4xl font-bold text-center text-gray-800 lg:pt-8 pb-12">
        What Our Customers Are Saying
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-5">
        <ReviewCard 
          img={img1} 
          name="Lovekesh" 
          review="Mouthful Magic has truly redefined my dining experience. The food is always fresh, flavorful, and absolutely delicious! Highly recommend!"
        />
        <ReviewCard 
          img={img2} 
          name="Rachit" 
          review="Fantastic experience! Every dish has a unique flavor, and the presentation is spot on. A must-visit for food lovers!"
        />
        <ReviewCard 
          img={img3} 
          name="Piyush" 
          review="From the appetizers to the main course, everything was exquisite. You can feel the love and care put into each dish. I’ll definitely be back!"
        />
        <ReviewCard 
          img={img4} 
          name="Sagar" 
          review="The ambiance and food at Mouthful Magic make for an unforgettable dining experience. I especially loved the spicy dishes – they were out of this world!"
        />
        <ReviewCard 
          img={img5} 
          name="Sourabh" 
          review="Amazing food, great service, and a cozy atmosphere! The desserts were the highlight of my meal. A place I would recommend to all my friends."
        />
        <ReviewCard 
          img={img6} 
          name="Varun" 
          review="Every visit to Mouthful Magic leaves me wanting more! The quality of food and attention to detail are always top-notch. Perfect for family gatherings."
        />
        <ReviewCard 
          img={img7} 
          name="Sambhav" 
          review="An incredible dining experience! The flavors were rich and authentic, and the staff was very welcoming. Can’t wait to come back and try more dishes!"
        />
      </div>
    </div>
  );
};

export default Review;


