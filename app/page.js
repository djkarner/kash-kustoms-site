import Image from "next/image";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "60px 20px" }}>
      <Image
        src="/logo.png"
        alt="Kash Kustoms Logo"
        width={250}
        height={250}
        priority
      />

      <h1 style={{ fontSize: "3rem", marginTop: "20px" }}>
        <span style={{ color: "#ffffff" }}>Kash </span>
        <span style={{ color: "#d4af37" }}>Kustoms</span>
      </h1>

      <p style={{ color: "#cccccc", fontSize: "1.2rem" }}>
        Auto • Residential • Commercial • Marine Window Tinting
      </p>
    </main>
  );
}
