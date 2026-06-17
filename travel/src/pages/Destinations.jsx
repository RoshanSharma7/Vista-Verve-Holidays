import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import { Helmet } from "react-helmet-async";
export default function Destinations() {
  return (
    <section className="section">
      <Helmet>
        <title>Destinations cover by Us</title>
      </Helmet>
      <h2>All destinations</h2>
      <div className="destinations-grid">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}