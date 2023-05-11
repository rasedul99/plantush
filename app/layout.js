import Header from "@components/Header/Header";
import Footer from "@components/Shared/Footer";
import Navbar from "@components/Shared/Navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Plantush",
  description: "Plants Are The Beauty Of Our Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
