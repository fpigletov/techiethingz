import "./globals.css";

import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: "Format Archive",
  description: "A curated marketplace for digital design assets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
