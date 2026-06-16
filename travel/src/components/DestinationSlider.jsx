import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaGlobeAmericas } from "react-icons/fa";
import DestinationCard from "./DestinationCard";

export default function DestinationSlider({ items, exploreLink, exploreLabel }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-container">
      <button className="slider-nav left" onClick={() => scroll(-1)} aria-label="Scroll left">
        <FaChevronLeft />
      </button>

      <div className="slider-track" ref={trackRef}>
        {items.slice(0, 7).map((d) => (
          <div className="slider-item" key={d.id}>
            <DestinationCard destination={d} />
          </div>
        ))}

        <div className="slider-item">
          <Link to={exploreLink} className="explore-card">
            <FaGlobeAmericas size={36} />
            <p>{exploreLabel}</p>
          </Link>
        </div>
      </div>

      <button className="slider-nav right" onClick={() => scroll(1)} aria-label="Scroll right">
        <FaChevronRight />
      </button>
    </div>
  );
}