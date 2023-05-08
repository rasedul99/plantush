import Header from "@components/Header/Header";
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
        {children}
      </body>
    </html>
  );
}
