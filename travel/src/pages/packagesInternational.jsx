import PackageCard from "../components/PackageCard";
import { internationalPackages } from "../data/packages";

export default function PackagesInternational() {
  return (
    <section className="section">
      <h2>International packages</h2>
      <div className="destinations-grid">
        {internationalPackages.map((p) => (
          <PackageCard key={p.id} pkg={p} />
        ))}
      </div>
    </section>
  );
}