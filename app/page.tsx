import ButtonAnimatedGradient from "@/components/button";
import TopBar from "@/components/icons/topBar";
import ZIcon from "@/components/icons/zLogo";
import Image from "next/image";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen overflow-hidden flex items-center justify-center relative">
      {/* Glassmorphic background */}
      <div className="absolute top-0 left-0 h-screen w-screen z-10 bg-black bg-opacity-80 backdrop-filter backdrop-blur-md"></div>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 z-20 opacity-15 w-screen h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9073F2] to-[#00000000]"></div>

      {/* Gradient overlay */}
      <div className="absolute -top-[50%] md:-top-[62%] left-0 z-20 opacity-10 w-screen h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-[#00000000] to-[#00000000]"></div>

      {/* Logo watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 opacity-80">
        <ZIcon
          parentClassName="w-[400px] h-[406px] md:w-[700px] md:h-[708px]"
          width={700}
          height={708}
        />
      </div>

      {/* Top bar design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex justify-center items-start text-white h-12 md:h-20 w-2/12 lg:w-[400px]">
        <div className="relative">
          <TopBar
            className="text-black/30"
            parentClassName="w-[360px] md:w-[480px] h-[60px] md:h-[80px]"
            width={480}
            height={80}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]">
            <Image
              src="/images/zolo-inc-logo.png"
              alt="Zolo Inc Logo"
              className="w-[140px] h-[28px] md:w-[240px] md:h-[48px]"
              width={240}
              height={32}
            />
          </div>
        </div>
      </div>

      <main className="flex flex-col items-center justify-center z-30 px-5 text-white text-md md:text-xl text-center pb-20 md:pb-0">
        <Image
          className="mb-4"
          src="/images/animated_fire.png"
          alt="Animated Fire"
          width={100}
          height={100}
        />
        <p className="mb-2 md:mb-4">WE&apos;RE STILL</p>
        {/* <p className="mb-12 text-6xl">Cooking Our Website</p> */}
        <p className="mb-5 md:mb-9 text-[28px] md:text-7xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#439cfb] to-[#f187fb]">
          Cooking Our Website
        </p>
        <p className="mb-2 md:mb-5 text-sm md:text-xl">
          We are going to launch our website very soon
        </p>
        <p className="text-sm md:text-xl">Stay Tuned</p>
      </main>
      <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 p-20 flex items-center space-x-5">
        <ButtonAnimatedGradient
          className="group"
          link="https://www.linkedin.com/company/zoloinc/"
        >
          <BsLinkedin
            className="text-gray-400 group-hover:text-white transition-colors duration-300"
            size={20}
          />
        </ButtonAnimatedGradient>
        <ButtonAnimatedGradient
          className="group"
          link="https://www.facebook.com/profile.php?id=61568294908346"
        >
          <BsFacebook
            className="text-gray-400 group-hover:text-white transition-colors duration-300"
            size={20}
          />
        </ButtonAnimatedGradient>
        <ButtonAnimatedGradient
          className="group"
          link="mailto:contact@zoloinc.com"
        >
          <IoMail
            className="text-gray-400 group-hover:text-white transition-colors duration-300"
            size={20}
          />
        </ButtonAnimatedGradient>
      </footer>
    </div>
  );
}
