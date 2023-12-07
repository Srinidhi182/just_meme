import "@/styles/globals.css";

// internal import
import { Navbar, Footer } from "../../components/componentindex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default MyApp;
