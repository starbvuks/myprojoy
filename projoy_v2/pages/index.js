import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import Landing2 from "../components/Landing/Landing2";

export default function Home() {
  return (
    <div className="w-full h-full bg-orange">
      <div className="h-screen">
        <Navbar />
        <Landing />
      </div>
      <Landing2 />
    </div>
  );
}
