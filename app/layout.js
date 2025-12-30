export const metadata = {
  title: "Kash Kustoms Tinting",
  description: "Auto, Residential, Commercial & Marine Window Tinting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}

