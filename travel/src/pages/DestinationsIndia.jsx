import DestinationCard from "../components/DestinationCard";
import { indiaDestinations } from "../data/destinations";
import { Helmet } from "react-helmet-async";
export default function DestinationsIndia() {
  return (
    <section className="section">
      <Helmet>
        <title>India Destination</title>
      </Helmet>
      <h2>Destinations in India</h2>
      <div className="destinations-grid">
        {indiaDestinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  );
}