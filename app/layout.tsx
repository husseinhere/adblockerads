import "./globals.css";

export const metadata = {
  title: "AdBlockerAds",
  description: "Encourage your users to block ads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>AdBlockerAds.com</h1>
        {children}
      </body>
    </html>
  );
}
