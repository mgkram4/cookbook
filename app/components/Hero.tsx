"use client";

import Image from "next/image";
import faye from "public/faye.png";
import { Player } from "@lottiefiles/react-lottie-player"; // Adjust the path based on your project structure

const Hero = () => {
  return (
    <div className="flex items-center justify-center m-8">
      <div className="hero  rounded-md">
        <div className="hero-content flex-col lg:flex-row">
          <Player
            autoplay
            loop
            src="/cooking1.json"
            style={{
              width: "300px",
              height: "300px",
            }}
          />
          <div>
            <h1 className="text-5xl font-bold ">Welcome to Benfatis Book!</h1>
            <p className="py-6">
              A collection of dishes derived from classic Italian roots of
              Sicily, from modern dishes influenced by the likes of Gordon
              Ramsay, Bobby Flay, and so much more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
