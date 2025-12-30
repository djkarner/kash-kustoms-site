export default function Home() {
  return (
    <main style={{ padding: "60px", maxWidth: "1100px", margin: "0 auto" }}>
      
      {/* HERO */}
      <section style={{ marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
          Kash <span style={{ color: "#d4af37" }}>Kustoms</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#ccc" }}>
          Auto • Residential • Commercial • Marine Window Tinting
        </p>
        <p style={{ marginTop: "20px", maxWidth: "600px" }}>
          Professional installation, lifetime warranty, and appointment-only
          service for clients who want it done right.
        </p>
      </section>

      {/* SERVICES */}
      <section>
        <h2 style={{ marginBottom: "30px", color: "#d4af37" }}>
          Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            "Auto Tinting",
            "Residential Tinting",
            "Commercial Tinting",
            "Marine Tinting",
          ].map((service) => (
            <div
              key={service}
              style={{
                border: "1px solid #333",
                padding: "20px",
                borderRadius: "8px",
                background: "#0a0a0a",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{service}</h3>
              <p style={{ color: "#aaa", fontSize: "0.95rem" }}>
                Premium films available including dyed, carbon, and ceramic.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
