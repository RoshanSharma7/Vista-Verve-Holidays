import PackageCard from "../components/PackageCard";
import { internationalPackages } from "../data/packages";
import { Helmet } from "react-helmet-async";
export default function PackagesInternational() {
  return (
    <section className="section">
      <Helmet>
        <title>International Packages</title>
      </Helmet>
      <h2>International packages</h2>
      <div className="destinations-grid">
        {internationalPackages.map((p) => (
          <PackageCard key={p.id} pkg={p} />
        ))}
      </div>
    </section>
  );
}