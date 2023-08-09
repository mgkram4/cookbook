import Image from "next/image";
import faye from "public/faye.png"; // Adjust the path based on your project structure

const Hero = () => {
  return (
    <div className="flex items-center justify-center m-8">
      <div className="hero  rounded-md">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            className="m-8"
            width={120}
            height={80}
            src={faye}
            alt="Faye Image"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Benfatis Book!</h1>
            <p className="py-6">
              A colletion of dishes direveted from clasic itlain roots of sicali
              from modern dishes influeced of the likes of Gordan Ramsey, booby
              flay, and so much more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
