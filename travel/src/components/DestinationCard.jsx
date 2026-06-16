import { Link } from "react-router-dom";
import { destinations } from "../data/destinations.js";

export default function DestinationCard({ destination }) {
  return (
    <div className="card">
      <img src={destination.img} alt={destination.name} />
      <div className="card-body">
        <h3>{destination.name}</h3>
        <p>From RS {destination.price} / person</p>
        <Link to={`/booking/${destination.id}`} className="btn">View deals</Link>
      </div>
    </div>
  );
}