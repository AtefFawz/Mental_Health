"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Therapists.css";
// Images
import Sonson from "../../components/assets/therapist/sonson.png";
import Vector from "../../components/assets/therapist/Vector.png";
import baza from "../../components/assets/therapist/baza.png";
import Partners from "../../components/assets/therapist/Our Partners.png";
import medium from "../../components/assets/therapist/medium.png";
import notion from "../../components/assets/therapist/notion.png";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default function Therapists() {
  const araay = [
    {
      description:
        "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
      span: "— Anna R., 32",
      background: "#F9E6D0",
      colortext: "#00373E",
      btn: <ArrowBackIcon />,
      btnbg: "white",
      btncolor: "#00373E",
    },
    {
      description:
        "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel likeI'm prioritizing my mental well-being. ",
      span: "— Mark S., 41",
      background: "#00373E",
      colortext: "#F9E6D0",
      btn: <ArrowForwardIcon />,
      btnbg: "#00373E",
      btncolor: "white",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(araay[0]);
  const araayOfImages = [Sonson, Vector, baza, Partners, medium, notion];
  // Motion

  const parent = { visible: { transition: { staggerChildren: 0.5 } } };
  const child = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1.2 },
  };
  return (
    <>
      <section
        id="Therapists"
        className="container mx-auto mb-25 h-full flex md:flex-row flex-col justify-evenly w-full gap-10  "
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "tween",
            ease: "linear",
            delay: 0.2,
          }}
          className=" space-y-6 flex flex-col justify-evenly  md:max-w-1/2 w-full md:order-1 order-2 px-5"
        >
          <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-[#00373E] ">
            What Our Clients Are Saying
          </h1>
          <p className=" md:text-lg lg:text-xl text-[#00373E] wrap-break-word">
            Positive experiences from users who have benefited from therapy or
            wellness programs.
          </p>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="visible"
            className="flex items-center "
          >
            {araay.map((e, index) => {
              return (
                <motion.button
                  variants={child}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 500 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.12)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: e.btnbg, color: e.btncolor }}
                  key={index}
                  onClick={() => setCurrentIndex(e)}
                  className={` text-xl cursor-pointer
                    `}
                >
                  {e.btn}
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
        <div className="relative md:w-1/2 w-full md:order-2 order-1">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: "tween",
              ease: "linear",
              delay: 0.2,
            }}
            style={{
              backgroundColor: currentIndex.background,
              color: currentIndex.colortext,
            }}
            className="flex flex-col justify-evenly rounded-3xl p-10 gap-8 z-5 left-16 max-w-2xl min-h-90 max-h-90 shadow-md "
          >
            <p className="text-lg md:text-xl wrap-break-word tracking-wide">
              {currentIndex.description}
            </p>
            <span className="text-lg md:text-xl wrap-break-word font-bold">
              {currentIndex.span}
            </span>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: "linear",
          delay: 0.2,
        }}
        className="flex justify-between bg-white p-6 rounded-4xl"
      >
        {araayOfImages.map((image, index) => {
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Image
                src={image}
                alt="image"
                className="md:max-w-[6rem] max-w-[2.8rem] object-contain lg:max-w-[9rem] cursor-pointer "
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
