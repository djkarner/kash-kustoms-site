export default function Home() {
  return (
    <main
      style={{
        padding: "60px",
        maxWidth: "1100px",
        margin: "0 auto",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: "90px" }}>
        <h1
          style={{
            fontSize: "3.2rem",
            marginBottom: "12px",
            letterSpacing: "1px",
            fontWeight: "700",
          }}
        >
          <span style={{ color: "#ffffff" }}>Kash </span>
          <span style={{ color: "#d4af37", fontWeight: "800" }}>
            Kustoms
          </span>
        </h1>

        <p style={{ fontSize: "1.2rem", color: "#cccccc" }}>
          Auto • Residential • Commercial • Marine Window Tinting
        </p>

        <p
          style={{
            marginTop: "22px",
            maxWidth: "620px",
            lineHeight: "1.6",
            color: "#e0e0e0",
          }}
        >
          Professional installation with premium films including dyed, carbon,
          and ceramic options. All work backed by a lifetime warranty.
          Appointment-only service.
        </p>
      </section>

      {/* SERVICES */}
      <section>
        <h2
          style={{
            marginBottom: "35px",
            color: "#d4af37",
            letterSpacing: "0.5px",
          }}
        >
          Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
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
                padding: "22px",
                borderRadius: "10px",
                backgroundColor: "#0a0a0a",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{service}</h3>
              <p style={{ color: "#aaaaaa", fontSize: "0.95rem" }}>
                Entry-level dyed film, carbon, and premium ceramic options
                available.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
