import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Programs from '../components/Programs';
import Support from '../components/Support';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Programs />
      <Support />
      <Footer />
    </div>
  );
} 