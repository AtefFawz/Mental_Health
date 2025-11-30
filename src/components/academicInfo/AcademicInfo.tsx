import Image from "next/image";
// Images
import instituteLogo from "../../components/assets/otherImage/instituteLogo.jpeg";
import instituteBuilding from "../../components/assets/otherImage/instituteBuilding.jpeg";

const AcademicInfo = () => {
  return (
    <section className="bg-gray-50 py-10 rounded-2xl w-full px-4">
      <div className="container mx-auto ">
        {/* Card Container */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Info Section */}
          <div className="w-full md:w-1/2 p-2 md:p-12 text-left">
            {/* Logo */}
            <div className="flex justify-start mb-6">
              <Image
                src={instituteLogo}
                alt="Raya Institute Logo"
                className="w-20 h-20 object-cover rounded-full"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Field Training Project
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              The <span className="font-bold text-green-700">Solus</span>{" "}
              platform was developed as the primary output for the
              <span className="font-semibold text-gray-800">
                {" "}
                Field Training Program
              </span>{" "}
              at
              <span className="font-semibold text-gray-800">
                {" "}
                Raya Higher Institute for Management and Foreign Trade
              </span>
              . It demonstrates practical skills in Full-Stack Web Development
              using modern technologies.
            </p>

            {/* Student Details Card */}
            <div className="bg-gray-50 p-2 lg:p-3 w-full rounded-xl border border-gray-200 ">
              <h3 className="text-green-700 font-bold uppercase text-xs tracking-wider mb-3 border-b border-gray-200 pb-2">
                Project Details
              </h3>
              <ul className="space-y-3 md:text-sm text-xs text-gray-700 min-w-full">
                <li className="flex items-center">
                  <span className="font-extrabold w-32 lg:text-[16px]">
                    Student Name:
                  </span>
                  <span className="lg:font-bold">Atef Fawzy Khalaf Oraby</span>
                </li>
                <li className="flex items-center">
                  <span className="font-bold w-36">Training Track:</span>
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold">
                    Web Development
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="lg:font-extrabold font-bold w-32 lg:text-[16px]">
                    Department:
                  </span>
                  <span className="lg:font-bold text-nowrap text-xs">
                    Information Systems (IS)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="lg:font-extrabold font-bold w-32 lg:text-[16px]">
                    Level:
                  </span>
                  <span className="lg:font-bold">Level 4</span>
                </li>
                <li className="flex items-center">
                  <span className="lg:font-extrabold w-32 font-bold lg:text-[16px]">
                    Supervised By:
                  </span>
                  <span className="lg:font-bold">Dr.Hadeer Hamdy</span>
                </li>
                <li>
                  <span className="flex items-center">
                    <span className="lg:font-extrabold w-32 font-bold lg:text-[16px]">
                      Email:
                    </span>
                    <a
                      href="mailto:eng.atef.fawzy@gmail.com"
                      className="lg:font-bold"
                    >
                      eng.atef.fawzy@gmail.com
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Image Section (Building) */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative p-2 rounded-2xl overflow-hidden">
            <Image
              src={instituteBuilding}
              alt="Raya Institute Building"
              className="w-full h-full object-cover rounded-2xl hover:scale-150 transition-transform duration-300 cursor-pointer "
            />
            <div className="absolute inset-0 bg-gray-900/20 rounded-2xl "></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicInfo;
