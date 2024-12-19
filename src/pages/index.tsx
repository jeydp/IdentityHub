import { Athiti, Sora } from "next/font/google";
import Header from "@/components/Header/Header";
import ServiceSection from "@/pages/ServiceSection/Services";
import HeroBanner from "./HeroBanner/HeroBanner";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";

const soro = Sora({
  variable: "--font-soro",
  subsets: ["latin"],
});

const athiti = Athiti({
  variable: "--font-athiti",
  subsets: ["latin"],
  weight: "500",
});

export default function Home() {
  return (
    <div className={`${soro.variable} ${athiti.variable}`}>
      <Header />
      <HeroBanner />
      <ServiceSection />
      <Features />
      <Testimonials />
    </div>
  );
}
