import { useState, useEffect } from "react";
import HeroSlider from "../components/HeroSlider";
import DestinationSlider from "../components/DestinationSlider";
import LocationMap from "../components/LocationMap";
import { indiaDestinations, worldDestinations, destinations } from "../data/destinations";
import { Helmet } from "react-helmet-async";
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Home() {
  const [popularMix, setPopularMix] = useState(() => shuffle(destinations).slice(0, 7));

  useEffect(() => {
    const interval = setInterval(() => {
      setPopularMix(shuffle(destinations).slice(0, 7));
    }, 5 * 60 * 1000); // every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Vista Verve Holidays</title>
      </Helmet>
      <HeroSlider />

      <section className="section">
        <h2>Explore India</h2>
        <DestinationSlider
          items={indiaDestinations}
          exploreLink="/destinations/india"
          exploreLabel="Explore more of India"
        />
      </section>

      <section className="section">
        <h2>World Explore</h2>
        <DestinationSlider
          items={worldDestinations}
          exploreLink="/destinations/world"
          exploreLabel="Explore the world"
        />
      </section>

      <section className="section">
        <h2>Popular destinations</h2>
        <DestinationSlider
          items={popularMix}
          exploreLink="/destinations/india"
          exploreLabel="Explore all destinations"
        />
      </section>

      <LocationMap />
    
    </div>
  );
}