import PackageCard from "../components/PackageCard";
import { nationalPackages } from "../data/packages";

export default function PackagesNational() {
  return (
    <section className="section">
      <h2>National packages</h2>
      <div className="destinations-grid">
        {nationalPackages.map((p) => (
          <PackageCard key={p.id} pkg={p} />
        ))}
      </div>
    </section>
  );
}