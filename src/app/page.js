import NavBar from "./navBar/NavBar";
import HeroSection from "./heroSection/HeroSection";
import Register from "./register/Register";
import Schedule from "./schedule/Schedule";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Register />
      <Schedule />
    </>
  );
}
