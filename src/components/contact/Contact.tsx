"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { motion } from "motion/react";
import { arrayOfLinks, arrayOfObject } from "../data/arrayOfLinks";
export default function Contact() {
  // Animation For Motion
  const parent = { visible: { transition: { staggerChildren: 0.5 } } };
  const child = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1.2 },
  };

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
      id="Contact"
      className="container mx-auto text-[#00373E]"
    >
      <div className="text-center space-y-9 ">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold tracking-wider ">
          We’re Here to Support You
        </h1>
        <p className="text-lg md:text-xl">
          Whether you have questions, need help getting started, or want to
          learn more — reach out anytime.
        </p>
      </div>
      {/* Parent  */}
      <div className="flex md:flex-row flex-col justify-around bg-white  py-15 p-5 rounded-4xl mt-20">
        {/* Parent Section One */}
        <div className="md:w-1/2 w-full flex flex-col items-start gap-10">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold tracking-wider">
            Contact Details:
          </h1>
          {arrayOfObject.map((e, index) => (
            <div key={index}>
              <h1 className="text-xl md:text-2xl font-bold inline">
                {e.name}:{" "}
              </h1>
              <span className="text-lg md:text-xl cursor-pointer">
                {e.value}
              </span>
            </div>
          ))}
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="visible"
            className="flex gap-x-5 text-xl"
          >
            {arrayOfLinks.map((e, index) => {
              const Icon = e.icon;
              return (
                <motion.a
                  variants={child}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 200 }}
                  whileTap={{ scale: 0.98 }}
                  key={index}
                  whileHover={{
                    scale: 1.13,
                    boxShadow: `0px 10px 30px ${e.shadow}`,
                    color: e.textColor,
                  }}
                  style={{
                    backgroundColor: e.bg,
                  }}
                  href={e.link}
                  className="p-2 rounded-full text-center cursor-pointer "
                  target="blank"
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
          <p className="text-lg md:text-xl">
            We typically respond within 12 hours.
          </p>
        </div>
        {/* Parent Form  Section Tow*/}
        <div className="w-full md:max-w-1/2 lg:px-1 md:px-3 p-0">
          {/* Head Form  */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider py-10">
            Send Us a Message
          </h1>
          {/*Box Form */}
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 3, width: "100%" } }}
            noValidate
            autoComplete="off"
            className="flex flex-col w-full items-center justify-center bg-[#FDF7F1] px-5 rounded-4xl"
          >
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Message" variant="standard" />
            <button
              className=" bg-[#00373E] text-white rounded-3xl md:px-7 md:py-3  px-5 py-2 my-3 md:my-5 font-bold hover:shadow-md hover:shadow-[#00373E] hover:text-white duration-300 ease-out cursor-pointer hover:scale-110 
            max-w-xl
            "
            >
              Send Message
            </button>
          </Box>
        </div>
      </div>
    </motion.section>
  );
}
