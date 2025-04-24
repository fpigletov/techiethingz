import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

import Menu from "@/components/Menu/Menu";

export const metadata = {
  title: "Format Archive",
  description: "A curated marketplace for digital design assets.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <Menu />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
