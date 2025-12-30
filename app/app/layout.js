export const metadata = {
  title: "Kash Kustoms Tinting",
  description: "Premium window tinting for auto, residential, commercial, and marine."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
