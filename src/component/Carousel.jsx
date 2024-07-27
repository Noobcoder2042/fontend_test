import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      content: "Slide 1 Content",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 1,
      content: "Slide 2 Content",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      content: "Slide 3 Content",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full max-w-xs mx-auto flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="overflow-hidden flex-1 flex items-center justify-center hide-scrollbar">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className="flex transition-transform duration-300"
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <div className="p-4 bg-gray-200 h-64 flex items-center justify-center flex-col">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="mb-4 rounded-lg shadow-md"
                />
                <p className="text-lg font-semibold">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        {slides.map((slide) => (
          <span
            key={slide.id}
            onClick={() => goToSlide(slide.id)}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
              currentSlide === slide.id ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
      <button className="p-2 bg-blue-500 text-white w-full rounded-lg shadow-md mt-4">
        Button
      </button>
    </div>
  );
};

export default Carousel;
