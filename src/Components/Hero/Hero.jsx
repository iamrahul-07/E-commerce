import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import image1 from "../../assets/Hero/women.png";
import image2 from "../../assets/Hero/sale.png";
import image3 from "../../assets/Hero/shopping.png";

const imageList = [
  {
    id: 1,
    img: image1,
    title: "Discover unbeatable style at 40% off!",
    description:
      "Step into style with 40% off on all women’s wear. Don’t miss out — your perfect outfit is just a click away.",
  },
  {
    id: 2,
    img: image2,
    title: "Your Style Upgrade Starts Here — 60% Off All Items.",
    description:
      "Refresh your wardrobe with 60% off everything! Shop now and save big — because great style should never come full price.",
  },
  {
    id: 3,
    img: image3,
    title: "Upgrade your wardrobe — 50% off all styles for men and women!",
    description:
      "Elevate your look with 50% off everything! Shop now and save big on fashion made for everyone.",
  },
];

const Hero = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] bg-gray-100 flex justify-center items-center">
      {/* Optional Background Pattern */}
      <div className="w-[700px] h-[700px] bg-yellow-400/40 absolute rotate-45 rounded-3xl -top-1/2 right-0"></div>

      <div className="w-full px-4">
        <Slider {...sliderSettings}>
          {imageList.map((item) => (
            <div key={item.id} className="py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
                {/* Text */}
                <div className="text-center sm:text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    {item.title}
                  </h1>
                  <p className="mt-4 text-gray-700">{item.description}</p>
                  <button className="mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                    Order Now
                  </button>
                </div>

                {/* Image */}
                <div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[400px] sm:w-[500px] mx-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
