"use client";
import Image from "next/image";
import ImageFooter from "../../components/assets/footer/illustration_7.png";
import { motion } from "framer-motion";
export default function Footer() {
  const footer = [
    "About",
    "Services",
    "Therapists",
    "Resources",
    "Contact",
    "Instagram",
    "Facebook",
    "YouTube",
    "LinkedIn",
    "Terms of use",
    "Privacy Policy",
  ];
  return (
    <section className="text-[#00373E] container mx-auto flex md:flex-row flex-col justify-around items-center pb-1 gap-5 overflow-hidden">
      {/* parent Section One */}
      <motion.div
        layout
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: "easeOut",
          delay: 0.2,
        }}
        className="flex justify-around flex-col  bg-white rounded-4xl shadow-lg p-8 md:max-w-1/2 w-full h-96 md:order-1 order-2"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
          Solus
        </h1>
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-10 justify-around">
          {footer.map((e, index) => (
            <span key={index} className="text-xl">
              {e}
            </span>
          ))}
        </div>
        <p className="text-lg md:text-xl text-gray-500">
          © [2025] Solus. All rights reserved.
        </p>
      </motion.div>
      {/* parent Section Tow */}

      <motion.div
        layout
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: "easeOut",
          delay: 0.2,
        }}
        className="md:max-w-1/2 w-full bg-[#00373E] rounded-4xl shadow-lg py-8 text-white flex flex-col items-center justify-center h-96  md:order-2 order-1"
      >
        <div className="flex justify-between ">
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide pr-28 pl-5 w-1/2 p-3"
            style={{ lineHeight: "1.6em" }}
          >
            Find Support, Guidance, and Balance.
          </h1>
          <Image src={ImageFooter} alt="ImageFooter" className="max-w-1/2  " />
        </div>
        <button
          className=" bg-white rounded-3xl md:px-7 md:py-3 px-5 py-2 my-3 md:my-5 font-bold hover:shadow-md hover:shadow-[#00373E] duration-300 ease-out cursor-pointer hover:scale-110 
            w-[80%] text-[#00373E] text-center
            "
        >
          Find Support now
        </button>
      </motion.div>
    </section>
  );
}
