import DestinationCard from "../components/DestinationCard";
import { worldDestinations } from "../data/destinations";

export default function DestinationsWorld() {
  return (
    <section className="section">
      <h2>Explore the world</h2>
      <div className="destinations-grid">
        {worldDestinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}