import Image from "next/image";
export default function DataEngineeringPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="jai-container">
          <small>DATA ENGINEERING</small>
          <h1>Modern Data Engineering & Analytics Solutions</h1>
          <p>
            Transform raw data into actionable insights with scalable data
            platforms, ETL pipelines, analytics solutions, and cloud-native
            data architectures.
          </p>
        </div>
      </section>

      <section className="home-section">
  <div className="jai-container">
    <Image
      src="/images/service-data.jpg"
      alt="Data Engineering Services"
      width={1200}
      height={520}
      className="service-hero-image"
    />
  </div>
</section>

      <section className="home-section">
        <div className="jai-container">
          <div className="section-title">
            <small>DATA SOLUTIONS</small>
            <h2>Build Reliable Data Platforms</h2>
            <p>
              We help organizations collect, process, analyze, and leverage
              data for smarter business decisions and operational excellence.
            </p>
          </div>

          <div className="cards-grid">
            <div className="clean-card">
              <h3>ETL & Data Pipelines</h3>
              <p>
                Design and build scalable ETL pipelines for data integration,
                transformation, and movement across systems.
              </p>
            </div>

            <div className="clean-card">
              <h3>Cloud Data Platforms</h3>
              <p>
                Build modern data lakes, warehouses, and analytics platforms
                using cloud-native technologies.
              </p>
            </div>

            <div className="clean-card">
              <h3>Business Intelligence</h3>
              <p>
                Create dashboards, reporting solutions, and analytics tools
                that provide actionable business insights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}