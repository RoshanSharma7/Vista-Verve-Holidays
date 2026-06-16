import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";

export default function PackageCard({ pkg }) {
  return (
    <div className="card">
      <img src={pkg.img} alt={pkg.name} />
      <div className="card-body">
        <h3>{pkg.name}</h3>
        <p className="pkg-duration"><FaClock size={12} /> {pkg.duration}</p>
        <p>{pkg.desc}</p>
        <p className="pkg-price">From ${pkg.price} / person</p>
        <Link to={`/booking/${pkg.id}`} className="btn">Book package</Link>
      </div>
    </div>
  );
}