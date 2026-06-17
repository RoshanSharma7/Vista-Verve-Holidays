import DestinationCard from "../components/DestinationCard";
import { worldDestinations } from "../data/destinations";
import { Helmet } from "react-helmet-async";
export default function DestinationsWorld() {
  return (
    <section className="section">
      <Helmet>
        <title>World Destination</title>
      </Helmet>
      <h2>Explore the world</h2>
      <div className="destinations-grid">
        {worldDestinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}