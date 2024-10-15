import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          At Mouthful Magic, we believe every meal should be a celebration. 
          Our chefs craft each dish with love, ensuring a burst of flavors 
          in every bite. Experience the joy of dining, where every moment is 
          a delightful journey of taste and aroma.
        </p>
        <p>
          We source the finest ingredients to create dishes that not only 
          satisfy your cravings but also nourish your soul. Join us, and 
          let's create memorable moments together over exquisite meals!
        </p>
        <p className="italic text-lg text-center">
          *खुशबू से महकता है ये ख्वाबों का जहाँ,<br />
          हर निवाले में छुपा है प्यार का सफ़र यहाँ।<br />
          जुड़ें दिल से दिल, यहाँ हर मंज़िल है खास,<br />
          मौज का लुत्फ उठाएं, मुँह में लजीज़ खाने का एहसास।*
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;

