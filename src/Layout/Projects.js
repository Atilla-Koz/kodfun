import Footer from '../Components/HomePage/Footer';
import Header from '../Components/HomePage/Header';
import HeroP from '../Components/Projects/HeroP';

export default function Projects() {
  return (
    <div className="flex flex-col gap-24 w-full h-screen">
      <Header />
      <div className="">
        <HeroP />
        <Footer />
      </div>
    </div>
  );
}
