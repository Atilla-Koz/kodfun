import ecom from '../../assets/ecom.png';
import pizza from '../../assets/pizza.png';
import port from '../../assets/port.png';
import val from '../../assets/val.png';

export default function HeroP() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-12 w-full bg-white font-eduVic">
      <h1 className="text-4xl font-bold">Projects</h1>

      <a
        href="https://e-commerce-website-tau-seven.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-3/4"
      >
        <section className="flex flex-col items-center gap-4">
          <h4 className="text-2xl font-semibold">E-Commerce</h4>
          <img
            src={ecom}
            alt="E-Commerce Project"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
      </a>

      <a
        href="https://atillakoz.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-3/4"
      >
        <section className="flex flex-col items-center gap-4">
          <h4 className="text-2xl font-semibold">Portfolio</h4>
          <img
            src={port}
            alt="Portfolio Project"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
      </a>
      <a
        href="https://soft-gecko-f582bb.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-3/4"
      >
        <section className="flex flex-col items-center gap-4">
          <h4 className="text-2xl font-semibold">Pizza Form</h4>
          <img
            src={pizza}
            alt="Pizza Form Project"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
      </a>

      <a
        href="https://my-valentine-nu.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-3/4"
      >
        <section className="flex flex-col items-center gap-4">
          <h4 className="text-2xl font-semibold">Valentine</h4>
          <img
            src={val}
            alt="Valentine Project"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>
      </a>
    </div>
  );
}
