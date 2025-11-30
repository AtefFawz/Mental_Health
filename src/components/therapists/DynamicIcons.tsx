"use client";
import dynamic from "next/dynamic";

export const ArrowBackIcon = dynamic(
  () => import("@mui/icons-material/ArrowBack"),
  { ssr: false }
);

export const ArrowForwardIcon = dynamic(
  () => import("@mui/icons-material/ArrowForward"),
  { ssr: false }
);
