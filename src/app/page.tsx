import HomeComponent from "../components/home/Home";
import About from "../components/about/About";
import Community from "../components/community/Community";
import Resources from "../components/resources/Resources";
import Faq from "../components/faq/Faq";
import Therapists from "../components/therapists/Therapists";
import Service from "../components/services/Service";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import AcademicInfo from "../components/academicInfo/AcademicInfo";
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <section
      className="container mx-auto px-2 md:px-4 md:space-y-25 space-y-15
      flex justify-around flex-col overflow-hidden py-10"
    >
      <HomeComponent />
      <About />
      <Service />
      <Therapists />
      <Resources />
      <Community />
      <Faq />
      <Contact />
      <AcademicInfo />

      <Footer />
    </section>
  );
}
