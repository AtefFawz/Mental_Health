"use client";
import { motion } from "framer-motion";
export default function Resources() {
  const arrayOfResources = [
    {
      title: "Articles & Guides",
      description:
        "Practical tips on stress management, mindfulness, and emotional resilience.",
      btn: "Explore",
      bg_btn: "#EFC01D",
      color_btn: "#ffff",
      initial: { opacity: 0, x: -200 },
      whileInView: { opacity: 1, x: 0 },
    },
    {
      title: "Meditation & Relaxation",
      description:
        "Audio sessions for guided meditation and deep breathing exercises.",
      btn: "Explore",
      bg_btn: "#4CCBBB",
      color_btn: "#ffff",
      initial: { opacity: 0, scale: 0 },
      whileInView: { opacity: 1, scale: 1 },
    },
    {
      title: "Webinars & Workshops",
      description:
        "Live and recorded sessions with mental health professionals.",
      btn: "Explore",
      bg_btn: "#F39CAC",
      color_btn: "#ffff",
      initial: { opacity: 0, x: 200 },
      whileInView: { opacity: 1, x: 1 },
    },
  ];
  return (
    <section
      id="Resources"
      className="text-[#00373E] container mx-auto md:px-2 lg:px-0 px-0 "
    >
      <motion.section
        layout
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 1 }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: "linear",
          delay: 0.2,
        }}
        className="flex flex-col gap-4 justify-evenly pb-20  text-center items-center"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider  lg:max-w-full max-w-70">
          Resources for Your Well-being
        </h1>
        <p className="max-w-96 text-lg md:text-xl ">
          Explore expert insights, self-care guides, and tools to support your
          mental health.
        </p>
      </motion.section>
      <section className="flex md:flex-row flex-col gap-6 md:gap-3 justify-center items-center">
        {/* Cards Container */}
        {arrayOfResources.map((resource, index) => (
          <motion.div
            layout
            initial={resource.initial}
            whileInView={resource.whileInView}
            transition={{
              duration: 1,
              type: "tween",
              ease: "easeInOut",
              delay: 0.2,
            }}
            key={index}
            className="bg-white p-10 rounded-4xl shadow-md mb-6 flex flex-col justify-evenly max-w-full gap-5 md:h-96 h-70 items-center md:w-1/3 w-full"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide">
              {resource.title}
            </h1>
            <p className="text-lg md:text-xl">{resource.description}</p>
            <motion.button
              whileTap={{ scale: 0.93 }}
              className="py-4 px-5 rounded-4xl md:w-50 w-40 font-extrabold text-xl cursor-pointer hover:shadow-md duration-300 ease-out hover:scale-110 text-nowrap"
              style={{
                backgroundColor: resource.bg_btn,
                color: resource.color_btn,
              }}
            >
              {resource.btn}{" "}
            </motion.button>
          </motion.div>
        ))}
      </section>
    </section>
  );
}
