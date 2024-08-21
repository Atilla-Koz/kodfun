import Footer from '../Components/HomePage/Footer';
import Header from '../Components/HomePage/Header';
import Hero from '../Components/HomePage/Hero';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screenz w-full overflow-x-hidden bg-Back bg-cover bg-center h-screen">
      <Header />
      <Hero />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}
