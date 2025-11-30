"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Therapists.css";
import { therapistsData, arrayOfImages, obg } from "../data/Therapists";
export default function Therapists() {
  const [currentIndex, setCurrentIndex] = useState(therapistsData[0]);
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
            {obg.title}
          </h1>
          <p className=" md:text-lg lg:text-xl text-[#00373E] wrap-break-word">
            {obg.description}
          </p>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="visible"
            className="flex items-center gap-3"
          >
            {therapistsData.map((e) => {
              const Icon = e.btn;
              return (
                <motion.div
                  variants={child}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 500 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.12)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundColor: e.btnBg, color: e.btnColor }}
                  key={e.id}
                  onClick={() => setCurrentIndex(e)}
                  className={` text-xl cursor-pointer rounded-full p-2 flex items-center justify-center
                    `}
                >
                  <Icon />
                </motion.div>
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
              color: currentIndex.colorText,
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: "linear",
          delay: 0.2,
        }}
        className="flex justify-between items-center bg-white p-6 rounded-4xl"
      >
        {arrayOfImages.map((image, index) => {
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Image
                src={image}
                alt="image"
                className="md:-w-[6rem] max-w-[2.8rem] object-contain lg:max-w-36 cursor-pointer "
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
