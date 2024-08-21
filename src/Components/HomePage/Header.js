export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-8 p-8 bg-black text-white ">
      <section>
        <button className="font-eduVic">Atilla K.</button>
      </section>
      <section className="flex flex-row justify-between gap-8">
        <a
          href="https://atillakoz.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="font-eduVic">About</button>
        </a>
        <button className="font-eduVic">Projects</button>
      </section>
    </div>
  );
}
