import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const images = [
    "https://images.pexels.com/photos/30720435/pexels-photo-30720435/free-photo-of-scenic-beachfront-in-monterosso-al-mare-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30164391/pexels-photo-30164391/free-photo-of-charming-bicycle-against-white-facade-with-blue-accents.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20732726/pexels-photo-20732726/free-photo-of-waves-in-disturbed-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  const [currenIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false);

  const handleNext = () => {
    //To achieve autoslide functionality used (prev) => function
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    //   if (currenIndex === images.length - 1) {
    //     setCurrentIndex(0);
    //   } else {
    //     setCurrentIndex(currenIndex + 1);
    //   }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    //   if (currenIndex === 0) {
    //     setCurrentIndex(images.length - 1);
    //   } else {
    //     setCurrentIndex(currenIndex - 1);
    //   }
  };

  const handleAutoSlide = () => {
    setAutoSlide(!autoSlide);
  };

  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(handleNext, 1000);
    }
    return () => clearInterval(interval);
  }, [autoSlide]);

  return (
    <div style={{ textAlign: "center" }}>
      <img src={images[currenIndex]} width="700px" height="400px" style={{}} />
      <div>
        <button onClick={handlePrev}>◀️</button>
        <button onClick={handleNext}>▶️</button>
      </div>
      <button onClick={handleAutoSlide}>
        {!autoSlide ? "Start Auto Slide" : "Stop Auto Slide"}
      </button>
    </div>
  );
};

export default ImageCarousel;
