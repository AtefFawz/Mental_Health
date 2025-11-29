"use client";
import { useRef, useEffect, useState } from "react";
import "./navbar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  // Logic for Navbar
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id: string | null = sec.getAttribute("id");
        if (top >= offset && top < offset + height && id) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section One From Navbar
  const data = ["Home", "About", "Services"];

  //   Extracting the names and creating links
  const extract = data.map((item, ind) => {
    return (
      <a
        key={ind}
        href={`#${item}`}
        className={`font-medium text-xl md:text-lg lg:text-xl ${
          active === item
            ? "text-blue-500 font-bold border-b-2"
            : "text-gray-600"
        }`}
      >
        {item}
      </a>
    );
  });

  // Section Two From Navbar

  const nav2 = ["Therapists", "Resources", "Contact"];

  const extract2 = nav2.map((item, ind) => {
    return (
      <a
        key={ind}
        href={`#${item}`}
        className={`font-medium text-xl md:text-lg lg:text-xl ${
          active === item
            ? "text-blue-500 font-bold border-b-2"
            : "text-gray-600"
        }`}
      >
        {item}
      </a>
    );
  });

  const navRef = useRef<HTMLDivElement | null>(null);
  function showNavbar() {
    navRef.current?.classList.toggle("showNav");
  }

  return (
    <div className="overflow-hidden md:px-3 lg:px-4 md:py-7 bg-[#f3eded] rounded-full container mx-auto w-full fixed top-0 left-0 right-0 z-50 md:mt-5 mt-2">
      <div className="hidden md:block px-5  py-3 rounded-full ">
        <header className="flex flex-row justify-between max-w-full gap-x-5 lg:gap-x-10 items-center  ">
          <nav className="flex flex-row justify-around min-w-fit gap-x-3 lg:gap-x-16 flex-none">
            {extract}
          </nav>
          <h1 className="shrink text-2xl lg-text-3xl font-extrabold">Solus</h1>
          <nav className="flex flex-row justify-evenly min-w-fit flex-none gap-x-3 lg:gap-x-16  ">
            {extract2}
          </nav>
        </header>
      </div>
      {/* Navbar Tow */}
      <header className="md:hidden max-w-full pb-5 z-10 ">
        <nav
          className="md:hidden px-5 pt-5 flex justify-between items-center"
          onClick={showNavbar}
          id="menu"
        >
          <DensityMediumIcon />
          <h1 className=" text-2xl lg-text-3xl font-extrabold">Solus</h1>
        </nav>

        <nav
          ref={navRef}
          id="navhide"
          className="flex flex-col gap-10 items-start px-5  "
        >
          <div ref={navRef} onClick={showNavbar} id="close">
            <CloseIcon />
          </div>
          {extract}
          {extract2}
        </nav>
      </header>
    </div>
  );
}
