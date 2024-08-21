import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-8 p-8 bg-black text-white ">
      <section>
        <button className="font-eduVic">Atilla K.</button>
      </section>
      <section className="flex flex-row justify-between gap-8">
        <Link to="/">
          <button className="font-eduVic">Home</button>
        </Link>
        <a
          href="https://atillakoz.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="font-eduVic">About</button>
        </a>
        <Link to="/Projects">
          <button className="font-eduVic">Projects</button>
        </Link>
      </section>
    </div>
  );
}
