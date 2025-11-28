"use client";
import Image from "next/image";
import ImageCommunity from "../../components/assets/community/Illustration_11.png";
import { motion } from "framer-motion";
export default function Community() {
  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        type: "tween",
        ease: "easeInOut",
        delay: 0.2,
      }}
      className="container mx-auto flex justify-around gap-6 bg-[#ffff] text-[#00373E] rounded-4xl p-10 "
    >
      <div className="flex flex-col md:justify-evenly justify-around gap-8  md:w-1/2 w-1/0">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide">
          You’re Not Alone on This Journey
        </h1>
        <p className="text-lg md:text-xl">
          Connect with others, share experiences, and find encouragement in a
          safe, supportive space.
        </p>
        <motion.button
          layout
          whileTap={{ scale: 0.9 }}
          className="bg-[#00373E] text-white py-4 px-4 font-bold max-w-50 rounded-4xl hover:scale-110 duration-300 ease-out cursor-pointer hover:shadow-[#00373E]"
        >
          Join the Community
        </motion.button>
      </div>
      <Image
        src={ImageCommunity}
        alt="ImageCommunity"
        className="max-w-1/2 w-lg md:block hidden"
      />
    </motion.section>
  );
}
