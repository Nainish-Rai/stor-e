import { Button } from "@/components/ui/button";
import Image from "next/image";
type Props = {};

function HeroSection({}: Props) {
  return (
    <section className="flex h-screen z-0 w-full max-w-7xl xl:mx-auto   py-4">
      {/* left section */}
      <div className="w-1/2 flex flex-col items-start mx-4 gap-4 justify-center -mt-32 ">
        <h2 className=" text-7xl font-bold ">
          Embrace Your <br /> SGSITS Identity
        </h2>
        <p className="font-medium text-xl">
          Discover and Flaunt Campus Spirit with our Exclusive Merchandise!
        </p>
        <Button
          size={"lg"}
          className="rounded-full w-48 h-14 text-xl mt-8 bg-red-500"
        >
          Shop Now
        </Button>
      </div>
      {/* right section */}
      <div className="flex justify-center items-center w-1/2 h-full">
        <div className="w-72  h-96 rounded-2xl overflow-hidden relative -mt-20">
          <Image
            src={
              "https://img.freepik.com/premium-photo/guy-model-appearance-black-clothes-poses-gray-studio-background-male-fashion-portrait_257482-1465.jpg"
            }
            fill
            alt="imagehero"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
