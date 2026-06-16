import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationMap() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setError("Location access denied. Showing default location.")
    );
  }, []);

  const lat = coords ? coords.lat : 28.6139;
  const lng = coords ? coords.lng : 77.2090;
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=12&output=embed`;

  return (
    <section className="section">
      <h2><FaMapMarkerAlt style={{ marginRight: "8px", color: "#1b4d3e" }} />Your location</h2>
      {error && <p className="map-note">{error}</p>}
      <div className="map-wrapper">
        <iframe
          title="Your current location"
          src={mapSrc}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}