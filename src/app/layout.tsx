import "./styles/style.css";
import "./styles/flaticon.css";
import "./styles/icomoon.css";
import "./styles/aos.css";
import "./styles/ionicons.min.css";
import "./styles/magnific-popup.css";
import "./styles/owl.theme.default.min.css";
import "./styles/animate.css";
import "./styles/open-iconic-bootstrap.min.css";
import "./styles/Font/FontAwesome/all.min.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppChat } from "./components/WhatsAppChat";

export const metadata: Metadata = {
  title: "Sure Smart Career Counseling",
  description: "Sure Smart career counseling ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,,500,600,700"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header />
        {children}
        <WhatsAppChat />
        <Footer />
        <script src="/js/jquery-3.3.1.js"></script>
        <script src="/js/bootstrap-4.1.3.js"></script>
      </body>
    </html>
  );
}
