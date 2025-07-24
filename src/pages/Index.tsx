import MatrixRain from '@/components/MatrixRain';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MatrixRain />
      <main className="relative z-10">
        <Hero />
        <Solutions />
        <Projects />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
