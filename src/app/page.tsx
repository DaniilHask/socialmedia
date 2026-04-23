import Image from "next/image";
import Banner from "./section/Banner";
import Offer from "./section/Offer";
import Advice from "./section/Adviсe";
import Static from "./section/Static";
import Media from "./section/Media";
import Reviews from "./section/Reviews";
import Contact from "./section/Contact";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Offer />
      <Advice />
      <Static />
      <Media />
      <Reviews />
      <Contact />
    </div>
  );
}
