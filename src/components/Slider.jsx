import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Slider = () => {
  // const mySlider = sliderData;
  // const [activeSlide, setActiveSlide] = useState(1);

  // const prevSliderHandler = (id) => {
  //   if (id === 1) {
  //     setActiveSlide(mySlider.length);
  //   } else if (id > 1) {
  //     setActiveSlide(activeSlide - 1);
  //   } else {
  //     setActiveSlide(mySlider.length);
  //   }
  // };

  // const nextSliderHandler = (id) => {
  //   if (id === mySlider.length) {
  //     setActiveSlide(1);
  //   } else if (id < mySlider.length) {
  //     setActiveSlide(activeSlide + 1);
  //   } else {
  //     setActiveSlide(mySlider.length - 1);
  //   }
  // };

  return (
    <div className="w-full h-[100vh] relative flex justify-between items-center">
      {/* <div className="flex "> */}
      <div className="w-[50px] h-[50px] bg-pink-100 rounded-full flex justify-center items-center mx-auto cursor-pointer t-0 bottom-0 opacity-50">
        <FiArrowLeft />
      </div>
      <div className="h-full flex transition">
        <div className="w-[80vw] h-[100vh] flex items-center ">
          <div className="h-full flex flex-1">
            <img
              className=" h-[80%] object-cover"
              src="https://lh3.googleusercontent.com/iCypH7UJOrmnq24Rj-NSB4KT6DywXuoDOn4eFY6a-F5aYiQi7gDpWWhjj3qYgLOKMZxf8_mrdV-eBPy3n3J46l2ZmPd_43DlfDbF0AUsm-NbDUW6xNg2YzRbOJWzH00sRhlq81D6qq4P_7HH5aP8l3m32WpBKIGTm3lgoapTyFQTTUCz0PvX7IaAGEEk2q_Mikzc6G5dqum3yMe1PFEIIh0cVtzGyJLfxIiiwTKBM4y0eCxO-aRMUYNh8tK--7N-p5h5byj1P36gxGmz9W2ehgIhUOS7n34QNlqPBZF7Rb-e_Rrgx0V8odHz0BHAYnHHi8jU653JUG30wZ2OfookNlvJ7lDWh8ZS_yTbyapQgxhBUzzQTxzFX6kIxUtWn9TbVIEsTG3S0byI5HABJqekyYUFzhRi5Z5C3C_YwQM07ET29RaNvaOJfp5r0DZ7QGWuJDgksKjWGYcN_oWHZt3OE1Y9DxMYdLeg52KyhPky6ZxSLbO9EDdJHXVf6B42kOmQHr6Fo4pdOrgSKIlAnsjYXbclc4Y-JxOg6ie2NamU1hk48aw-G87UDPtvRxmcEIOxgYTVs8QLKuSrfRmoGkbtgSp980stKIq03aS4gRFFck6Q5MCtPbfdvvTQrDLxqo5vJIwUsQTlCWCbgIqwaACSgW2hC_i0YBYxC7jujcR0aMzqb5_NwLXIeG1VCKKlUi6M8fji7_n-4_9WkHdIoE2W4Dub08lubvGoUQqXfA-65fE5zLMdiCf0xwotiAxuEhQGJ54ezDK039zUQ2x8dfNKRKLJ68I1w0pr4oXDdW7QFpB5thdopPeDpAI47YLJYeI9JZNj1Weyy7FCrbtJiQ77k7NdCpjgNCKEz5Poq_LS9fg_anQGWfoPFa8qlM_5hp7qzbQok0Nn808dRPkmkSUAsvXRZyOXwCuoFoI8CA=w1250-h937-no?authuser=0"
              alt=""
            />
          </div>
          <div className="flex flex-col flex-1 p-[50px]">
            <div className=" text-7xl font-bold">제목이다</div>
            <div className=" mt-50px text-lg font-medium tracking-[3px]">
              상세설명이다
            </div>
            <button className=" p-[10px] text-[20px] bg-transparent cursor-pointer">
              사라
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50px] h-[50px] bg-pink-100 rounded-full flex justify-center items-center mx-auto cursor-pointer t-0 bottom-0 opacity-50">
        <FiArrowRight />
      </div>
    </div>
    // </div>
  );
};

export default Slider;
