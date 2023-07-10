import React, { useState, useEffect } from 'react';
import styles from '../styles/carousel.module.css';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselContainer}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className={styles.carouselSlide}>
          <div className={styles.carouselItem}>
            <h3>Your Ultimate Recipe Companion!</h3>
            <p>Discover the joy of culinary creativity with Quick Dish, the perfect recipe application designed to make your cooking experience quick, easy, and incredibly satisfying. Whether you're a seasoned chef or a kitchen novice, Quick Dish is here to inspire, guide, and elevate your culinary adventures.</p>
          </div>
          <div className={styles.carouselItem}>
            <h3>Create and Publish Your Masterpieces</h3>
            <p>Unleash your inner chef by creating your very own recipes with Quick Dish. Our intuitive recipe editor allows you to effortlessly add ingredients, write clear instructions, and even include mouthwatering photos. Share your culinary triumphs with the world by publishing your recipes on our platform, where fellow food enthusiasts can explore, recreate, and applaud your creations.</p>
          </div>
          <div className={styles.carouselItem}>
            <h3>Search and Discover</h3>
            <p>Looking for new and exciting dishes to try? Quick Dish is your gateway to an extensive collection of delectable recipes from around the globe. Our smart search feature enables you to explore recipes based on specific ingredients, cuisines, dietary preferences, or cooking methods. From traditional family favorites to innovative culinary delights, Quick Dish has something to satisfy every palate.</p>
          </div>
        </div>
      </div>
      <button className={styles.carouselPrev} onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className={styles.carouselNext} onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
  );
}
