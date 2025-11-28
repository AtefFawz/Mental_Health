"use client";
import Image from "next/image";
import BackImage from "../../components/assets/services//Illustration_10.png";
import BackImage2 from "../../components/assets/services/illustration_6.png";
import { motion } from "framer-motion";
export default function Service() {
  return (
    // Parent div
    <section id="Services" className="container mx-auto text-[#00373E] ">
      <motion.div
        layout
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" text-center text-[#00373E] space-y-4"
      >
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          Your Path to Well-being
        </h1>
        <p className="font-light md:text-lg">
          Discover expert guidance for a healthier mind and balanced life.
        </p>
      </motion.div>
      {/* Parent Card */}
      <motion.div
        transition={{ staggerChildren: 1, duration: 2 }}
        className="mt-16 space-y-10  md:flex md:justify-around md:items-start gap-x-5"
      >
        {/* Card One */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-around bg-[#F9E6D0] rounded-3xl max-h-80  min-h-80 md:w-1/2 shadow-md"
        >
          <div className="flex flex-col justify-items-center rounded-3xl p-5 md:p-10 gap-8 justify-evenly  ">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
              Mindfulness & Meditation
            </h1>
            <p className="font-light md:text-lg w-full tracking-wide">
              Guided meditation sessions and stress management techniques.
            </p>
            <motion.button
              layout
              whileHover={{
                scale: 1.1,
                border: "none",
                color: "white",
                backgroundColor: "#00373E",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              className="cursor-pointer hover:shadow-[#00373E] bg-transparent  rounded-3xl md:px-7 md:py-3 px-5 py-2  font-bold border-1 border-[#00373E] max-w-36 hover:shadow-md text-nowrap
              "
            >
              Learn more
            </motion.button>
          </div>
          <Image
            src={BackImage}
            alt={`${BackImage}`}
            className="block md:hidden lg:block overflow-hidden"
          />
        </motion.div>
        {/* Card Two */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" flex flex-col justify-items-center md:w-1/2 min-h-80 max-h-80 bg-[#ffff] rounded-3xl p-5 md:p-10 gap-8 justify-evenly "
        >
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl max-w-32 md:max-w-45 lg:max-w-full">
            One-on-One Therapy
          </h1>
          <p className="font-light md:text-lg lg:max-w-lg md:max-w-full max-w-80 tracking-wider">
            Virtual and in-person therapy sessions with licensed professionals.
          </p>
          <motion.button
            whileHover={{
              scale: 1.2,
              border: "none",
              color: "white",
              backgroundColor: "#00373E",
            }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: "easeInOut",
            }}
            whileTap={{ scale: 0.98 }}
            className=" bg-transparent text-[#00373E] rounded-3xl md:px-7 md:py-3 px-5 py-2 font-bold border-1 border-[#00373E] max-w-36 hover:shadow-md hover:shadow-[#00373E] cursor-pointer text-nowrap "
          >
            Learn more
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        layout
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: "linear",
          delay: 0.2,
        }}
        className="mt-16 flex justify-between bg-[#ffff] rounded-3xl w-full p-5 md:p-10 gap-8 overflow-hidden"
      >
        <div className="md:w-1/2 flex flex-col justify-items-center  md:gap-1 justify-evenly text-[#00373E] w-full gap-5">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Wellness Coaching
          </h1>
          <p className="font-light md:text-lg">
            Personalized guidance to help you build healthier habits, manage
            stress, and achieve balance in all areas of your life.
          </p>
          <p className="font-light md:text-lg">
            Our wellness coaches support you in creating sustainable routines
            for mental, emotional, and physical well-being.
          </p>
          <button className="hover:scale-110 bg-transparent text-[#00373E] rounded-3xl md:px-7 md:py-3 px-5 py-2  font-bold border-1 border-[#00373E] max-w-36 hover:shadow-md hover:shadow-[#00373E] hover:text-white duration-300 ease-out cursor-pointer hover:bg-[#00373E] text-nowrap">
            Learn more
          </button>
        </div>
        <Image
          src={BackImage2}
          alt={`${BackImage2}`}
          className=" max-w-lg w-1/2 hidden md:block overflow-hidden"
        />
      </motion.div>
    </section>
  );
}
