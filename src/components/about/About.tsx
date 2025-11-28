"use client";
import Image from "next/image";
import Frame from "../../components/assets/about/Frame.png";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="About" className="container mx-auto relative">
      <div className=" flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-8 w-full ">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" flex flex-col justify-start items-start md:w-1/2 lg:w-1/2 lg:px-20 md:px-2 order-2 md:order-1 px-4"
        >
          <span className="text-3 font-light text-[#00373E] absolute md:top-20  hidden">
            HOW IT WORKS
          </span>
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl text-[#00373E] ">
            We Help You Prioritize Your Mental Health
          </h1>
          <p className=" md:text-lg lg:text-xl text-[#00373E]  py-5">
            Browse therapists, book a session, and start your healing journey
            with trusted professionals.
          </p>
          <motion.button
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            className=" bg-[#00373E] text-white rounded-3xl md:px-7 md:py-3 md:my-8 px-5 py-2 my-5 font-bold hover:shadow-md hover:shadow-[#00373E]  cursor-pointer  duration-300 ease-out text-nowrap"
          >
            Find a Therapist
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 "
        >
          <Image
            src={Frame}
            alt="Frame"
            className="min-20 md:w-sm md-h-md lg:w-lg w-lg   overflow-hidden"
          />
        </motion.div>
      </div>
    </section>
  );
}
