import NavBar from "./navBar/NavBar";
import HeroSection from "./heroSection/HeroSection";
import Register from "./register/Register";
import Schedule from "./schedule/Schedule";
import Celebrations from "./celebration/Celebrations";
import Stay from "./stay/Stay";
import Contributions from "./contributions/Contributions";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Register />
      <Schedule />
      <Celebrations />
      <Stay />
      <Contributions />
    </>
  );
}
