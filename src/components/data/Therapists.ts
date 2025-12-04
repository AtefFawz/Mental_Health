import React from "react";
// Images
import Sonson from "../../components/assets/therapist/sonson.png";
import Vector from "../../components/assets/therapist/Vector.png";
import baza from "../../components/assets/therapist/baza.png";
import Partners from "../../components/assets/therapist/Our Partners.png";
import medium from "../../components/assets/therapist/medium.png";
import notion from "../../components/assets/therapist/notion.png";
import { StaticImageData } from "next/image";
import { ArrowBackIcon, ArrowForwardIcon } from "../therapists/DynamicIcons";

export const arrayOfImages: StaticImageData[] = [
  Sonson,
  Vector,
  baza,
  Partners,
  medium,
  notion,
];
interface Therapist {
  id: number;
  description: string;
  span: string;
  background: string;
  colorText: string;
  btn: React.ComponentType<any>;
  btnBg: string;
  btnColor: string;
}

export const therapistsData: Therapist[] = [
  {
    id: 1,
    description:
      "Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!",
    span: "— Anna R., 32",
    background: "#F9E6D0",
    colorText: "#00373E",
    btn: ArrowBackIcon,
    btnBg: "white",
    btnColor: "#00373E",
  },
  {
    id: 2,
    description:
      "I was struggling with stress and anxiety, but the mindfulness programs on Solus have helped me regain balance. I finally feel likeI'm prioritizing my mental well-being. ",
    span: "— Mark S., 41",
    background: "#00373E",
    colorText: "#F9E6D0",
    btn: ArrowForwardIcon,
    btnBg: "#00373E",
    btnColor: "white",
  },
];
export const obg = {
  title: "What Our Clients Are Saying",
  description:
    "Positive experiences from users who have benefited from therapy or wellness programs.",
};
