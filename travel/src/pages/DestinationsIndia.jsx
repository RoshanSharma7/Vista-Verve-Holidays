import DestinationCard from "../components/DestinationCard";
import { indiaDestinations } from "../data/destinations";

export default function DestinationsIndia() {
  return (
    <section className="section">
      <h2>Destinations in India</h2>
      <div className="destinations-grid">
        {indiaDestinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}