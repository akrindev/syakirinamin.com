import Navbar from "@/components/Navbar";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <main className='w-full max-w-4xl mx-auto relative z-10'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
