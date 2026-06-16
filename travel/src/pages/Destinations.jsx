import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

export default function Destinations() {
  return (
    <section className="section">
      <h2>All destinations</h2>
      <div className="destinations-grid">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}