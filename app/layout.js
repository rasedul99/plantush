import Header from "@components/Header/Header";
import Navbar from "@components/Navbar/Navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Plantush",
  description: "Plants Are The Beauty Of Our Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
