import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Programs from "@/components/Programs";
import Stats from "@/components/Stats";
import Branches from "@/components/Branches";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import SSS from "@/components/SSS";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Programs />
        <Stats />
        <Branches />
        <Gallery />
        <Testimonials />
        <SSS />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
