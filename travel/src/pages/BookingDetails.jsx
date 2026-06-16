import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Star, AlertTriangle, Phone } from "lucide-react";
import { destinations } from "../data/destinations";
import { nationalPackages, internationalPackages } from "../data/packages";

const allItems = [...destinations, ...nationalPackages, ...internationalPackages];
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfcscmnav1hbV9HaQzRt11x8yGybcz_4zko2FNjz5XdMtSV7g/viewform?usp=header";

export default function BookingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = allItems.find((d) => d.id === id);

  if (!item) {
    return (
      <div className="booking-wrapper" style={{ textAlign: "center", padding: "60px 16px" }}>
        <h1>Item not found</h1>
        <button className="confirm-btn" style={{ maxWidth: 220, margin: "16px auto" }} onClick={() => navigate("/")}>
          Back to home
        </button>
      </div>
    );
  }

  return (
    <div className="booking-wrapper">
      <div className="booking-grid">
        <div className="booking-image">
          <img src={item.img} alt={item.name} />
          <div className="booking-title">
            <h1><MapPin size={20} /> {item.name}</h1>
            {item.rating && <div className="booking-rating"><Star size={18} fill="currentColor" /> {item.rating}</div>}
          </div>
          <p className="booking-desc">{item.desc}</p>
        </div>

        <div className="booking-form">
          <h2>Book this trip</h2>

          <div className="maintenance-notice">
            <AlertTriangle size={20} />
            <div>
              <p className="maintenance-title">Website under maintenance</p>
              <p>
                We apologize for the inconvenience. Our online booking system is currently under maintenance.
                Please fill out the Google Form below to submit your booking request. Our team will contact you
                shortly to confirm your booking.
              </p>
              <p className="maintenance-phone"><Phone size={14} /> For urgent assistance, call +91 93437 43640</p>
            </div>
          </div>

          <div className="price-total">
            <span>Price per person</span><span>Rs {item.price}</span>
          </div>

          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="confirm-btn" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>
            Submit booking request via Google Form
          </a>
        </div>
      </div>
    </div>
  );
}