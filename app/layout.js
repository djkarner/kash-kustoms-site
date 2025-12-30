export const metadata = {
  title: "Kash Kustoms",
  description: "Auto, Residential, Commercial & Marine Window Tinting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
