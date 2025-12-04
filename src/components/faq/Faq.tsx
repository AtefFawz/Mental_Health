"use client";
import Image from "next/image";
import FaqImage from "../../components/assets/Faq/faq.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { motion } from "framer-motion";
export default function Faq() {
  const array = [
    "How do I book a therapy session?",
    "Are online sessions available?",
    "What’s the difference between therapy and coaching?",
    "Do I need a subscription to access services?",
    "Can I switch therapists if I don’t feel the right connection?",
    "Is my information and session history kept confidential?",
  ];
  const parent = { visible: { transition: { staggerChildren: 0.5 } } };
  const child = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <section className="text-[#00373E] container mx-auto mt-10 md:mt-25 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider lg:my-9 my-5">
        Frequently Asked Questions
      </h1>
      <div className="flex md:flex-row flex-col gap-5 lg:gap-10">
        <div className="flex flex-col justify-around gap-x-6 w-full md:w-1/2">
          <p className="text-lg md:text-xl ">
            {" "}
            Find answers to common questions about our services, therapy, and
            mental well-being.
          </p>
          <Image src={FaqImage} alt="FaqImage" className="h-full" />
        </div>
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col justify-around md:gap-x-7 gap-y-5 
        md:max-w-1/2 w-full "
        >
          {array.map((e, index) => (
            <motion.div
              variants={child}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 100 }}
              whileTap={{ scale: 0.94 }}
              whileHover={{ scale: 0.96 }}
              key={index}
              className="bg-white py-5 px-7 rounded-4xl min-w-full cursor-pointer"
            >
              <h3 className="font-bold text-lg md:text-xl lg:2xl flex justify-between items-center ">
                {e}
                <div className="bg-[#F7F6F4] rounded-full p-2 hover:scale-120 duration-300 ease-out cursor-pointer hover:rotate-90">
                  <AddCircleIcon style={{ fontSize: "2.5rem" }} />
                </div>
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
