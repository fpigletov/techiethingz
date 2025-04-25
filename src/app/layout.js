import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import ClientLayout from "@/client-layout";

export const metadata = {
  title: "Format Archive",
  description: "A curated marketplace for digital design assets.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
