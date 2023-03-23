import Banner from "components/Movie/Banner";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/Footer";

export default function Handle() {
  return (
    <div className="position-relative">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}
