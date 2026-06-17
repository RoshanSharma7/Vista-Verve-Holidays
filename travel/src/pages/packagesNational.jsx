import PackageCard from "../components/PackageCard";
import { nationalPackages } from "../data/packages";
import { Helmet } from "react-helmet-async";
export default function PackagesNational() {
  return (
    <section className="section">
      <Helmet>
        <title>National Package</title>
      </Helmet>
      <h2>National packages</h2>
      <div className="destinations-grid">
        {nationalPackages.map((p) => (
          <PackageCard key={p.id} pkg={p} />
        ))}
      </div>
    </section>
  );
}