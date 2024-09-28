import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import HeaderImg from '../../assets/j1.jpg';
import HeaderImg1 from '../../assets/4.jpeg';
import HeaderImg2 from '../../assets/j2.jpg';
import HeaderImg3 from '../../assets/46.jpg';
import HeaderImg4 from '../../assets/j3.jpg';
import HeaderImg5 from '../../assets/supimg.jpeg';



const Header = () => {
  const slides = [
    { img: HeaderImg },
    { img: HeaderImg1 },
    { img: HeaderImg2 },
    { img: HeaderImg3 },
    { img: HeaderImg4 },
    { img: HeaderImg5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto pb-10 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, slideIndex) => (
          <div key={slideIndex}onClick={() => goToSlide(slideIndex)}className='text-2xl cursor-pointer'>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
