import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import S1 from "../images/S1.jpg"
import S2 from "../images/S2.jpg"
import S3 from "../images/S3.jpg"
import S4 from "../images/S4.jpg"
const slides = [
  { img: S1, title: "Discover the world's hidden gems", subtitle: "Curated journeys to breathtaking destinations" },
  { img: S2, title: "Adventure awaits beyond the horizon", subtitle: "Mountains, deserts, and everything in between" },
  { img: S3, title: "Unwind in paradise", subtitle: "Beach escapes and luxury retreats" },
  { img: S4, title: "Explore cultures, create memories", subtitle: "Authentic experiences around the globe" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="hero-slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="hero-overlay">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button className="enquire-btn">Plan Your Trip</button>
          </div>
        </div>
      ))}

      <button className="slider-arrow left" onClick={prev}><FaChevronLeft /></button>
      <button className="slider-arrow right" onClick={next}><FaChevronRight /></button>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <span key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)}></span>
        ))}
      </div>
    </div>
  );
}