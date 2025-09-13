import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}