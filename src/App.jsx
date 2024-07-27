import React, { useState } from "react";
import "./App.css";


const CarouselComponent = () => {
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
    <div className="relative w-full h-full max-w-xs mx-auto flex flex-col justify-center overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="overflow-hidden flex-1 flex items-center justify-center">
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
      <div className="flex justify-center mt-4">
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
      <button className="mt-4 p-2 bg-blue-500 text-white w-full rounded-lg shadow-md">
        Static Button
      </button>
    </div>
  );
};

const FormValidationComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validateEmail = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(e.target.value));
  };

  const validatePassword = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.value.length >= 6);
  };

  return (
    <div className="max-w-xs mx-auto flex flex-col justify-center h-full overflow-hidden rounded-lg shadow-lg bg-white p-4">
      <div className="flex justify-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="Profile"
          className="w-16 h-16 rounded-full shadow-md"
        />
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <div>
        <input
          value={email}
          onChange={validateEmail}
          type="email"
          placeholder="Email"
          className={`w-full p-2 border rounded mb-4 ${
            email ? (emailValid ? "border-green-500" : "border-red-500") : ""
          }`}
        />
      </div>
      <div>
        <input
          value={password}
          onChange={validatePassword}
          type="password"
          placeholder="Password"
          className={`w-full p-2 border rounded mb-4 ${
            password
              ? passwordValid
                ? "border-green-500"
                : "border-red-500"
              : ""
          }`}
        />
      </div>
      <button className="p-2 bg-blue-500 text-white w-full rounded-lg shadow-md mt-4">
        Submit
      </button>
    </div>
  );
};


const ScrollableContentComponent = () => {
  const images = [
    "https://randomuser.me/api/portraits/men/4.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/5.jpg",
    "https://randomuser.me/api/portraits/men/6.jpg",
  ];

  return (
    <div className="max-w-xs mx-auto flex flex-col justify-center h-full overflow-hidden rounded-lg shadow-lg bg-white p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Gallery</h2>
      <div className="flex overflow-x-auto mb-4 hide-scrollbar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="w-16 h-16 rounded-full flex-shrink-0 mx-2"
          />
        ))}
      </div>
      <div className="h-64 overflow-y-auto hide-scrollbar">
        {[...Array(10)].map((_, n) => (
          <div key={n} className="h-40 bg-gray-200 mb-4"></div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4 h-screen overflow-hidden bg-gray-100">
      <div className="w-full md:flex-1 max-w-xs h-full">
        <CarouselComponent />
      </div>
      <div className="w-full md:flex-1 max-w-xs h-full">
        <FormValidationComponent />
      </div>
      <div className="w-full md:flex-1 max-w-xs h-full">
        <ScrollableContentComponent />
      </div>
    </div>
  );
}

export default App;
