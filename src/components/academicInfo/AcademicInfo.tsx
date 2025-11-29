"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// Images
import instituteLogo from "../../components/assets/otherImage/instituteLogo.jpeg";
import instituteBuilding from "../../components/assets/otherImage/instituteBuilding.jpeg";

const AcademicInfo = () => {
  return (
    <section className="bg-gray-50 py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        {/* Card Container */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 text-left">
            {/* Logo */}
            <div className="flex justify-start mb-6">
              <Image
                src={instituteLogo}
                alt="Raya Institute Logo"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Academic Project
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The <span className="font-bold text-green-700">Solus</span>{" "}
              platform was designed and developed as a practical assignment for
              the
              <span className="font-semibold text-gray-800">
                {" "}
                Raya Higher Institute for Management and Foreign Trade
              </span>
              . This project aims to demonstrate the application of modern web
              technologies in supporting mental health awareness.
            </p>

            {/* Student Details Card */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <h3 className="text-green-700 font-bold uppercase text-xs tracking-wider mb-3 border-b border-gray-200 pb-2">
                Submitted By
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="font-extrabold w-32 text-[16px]">
                    Student Name:
                  </span>
                  <span className="font-bold">Atef Fawzy Khalaf Oraby</span>
                </li>
                <li className="flex items-center">
                  <span className="font-extrabold w-32 text-[16px]">
                    Department:
                  </span>
                  <span className="font-bold">
                    Management Information Systems (MIS)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-extrabold w-32 text-[16px]">
                    Level:
                  </span>
                  <span className="font-bold">Level 4</span>
                </li>
                <li className="flex items-center">
                  <span className="font-extrabold w-32 text-[16px]">
                    Supervised By:
                  </span>
                  <span className="font-bold">Dr. Hadeer Hamdy</span>
                </li>
                <li>
                  <span className="flex items-center">
                    <span className="font-extrabold w-32 text-[16px]">
                      Email:
                    </span>
                    <a
                      href="mailto:eng.atef.fawzy@gmail.com"
                      className="font-bold"
                    >
                      eng.atef.fawzy@gmail.com
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Image Section (Building) */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative  rounded-2xl overflow-hidden">
            <Image
              src={instituteBuilding}
              alt="Raya Institute Building"
              className="w-full h-full object-cover rounded-2xl hover:scale-150 transition-transform duration-300 cursor-pointer"
            />
            <div className="absolute inset-0 bg-gray-900/20  rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicInfo;
