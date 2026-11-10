import { About } from "@/features/about/About";
import { Community } from "@/features/community/Community";
import { Contact } from "@/features/contact/Contact";
import { Faq } from "@/features/faq/Faq";
import { Hero } from "@/features/hero/Hero";
import { Resources } from "@/features/resources/Resources";
import { Services } from "@/features/services/Services";
import { Testimonials } from "@/features/testimonials/Testimonials";
import { Therapists } from "@/features/therapists/Therapists";
import { Toolkit } from "@/features/toolkit/Toolkit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Toolkit />
      <Therapists />
      <Testimonials />
      <Resources />
      <Community />
      <Faq />
      <Contact />
    </>
  );
}
