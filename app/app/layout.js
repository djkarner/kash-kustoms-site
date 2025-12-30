export const metadata = {
  title: "Kash Kustoms",
  description: "Custom automotive styling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
