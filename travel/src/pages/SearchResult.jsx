import { useSearchParams, Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import { destinations } from "../data/destinations";
import { nationalPackages, internationalPackages } from "../data/packages";
import { Helmet } from "react-helmet-async";
const allPackages = [...nationalPackages, ...internationalPackages];

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = (params.get("to") || "").toLowerCase().trim();

  const matchedDestinations = destinations.filter((d) =>
    d.name.toLowerCase().includes(query)
  );

  const matchedPackages = allPackages.filter((p) =>
    p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
  );

  const hasResults = matchedDestinations.length > 0 || matchedPackages.length > 0;

  return (
    <section className="section">
      <Helmet>
        <title>Your Destination</title>
      </Helmet>
      <h2>Search results for "{params.get("to")}"</h2>

      {!hasResults && (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <p>No matches found. Try a different destination name.</p>
          <Link to="/" className="confirm-btn" style={{ display: "inline-block", marginTop: "16px", maxWidth: "200px" }}>
            Back to home
          </Link>
        </div>
      )}

      {matchedDestinations.length > 0 && (
        <>
          <h2 style={{ marginTop: "24px" }}>Destinations</h2>
          <div className="destinations-grid">
            {matchedDestinations.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </>
      )}

      {matchedPackages.length > 0 && (
        <>
          <h2 style={{ marginTop: "24px" }}>Packages</h2>
          <div className="destinations-grid">
            {matchedPackages.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}