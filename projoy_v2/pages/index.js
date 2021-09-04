import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import Landing2 from "../components/Landing/Landing2";

export default function Home() {
  return (
    <div className="w-full h-full bg-primary">
      <Navbar />
      <div className="h-full bg-orangeBlob bg-local bg-no-repeat bg-cover bg-center">
        <Landing />
      </div>
        <Landing2 />
    </div>
  );
}
