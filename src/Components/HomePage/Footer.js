export default function Footer() {
  return (
    <div className="flex flex-row justify-between gap-8 p-8 bg-black text-white w-full">
      <a
        href="https://github.com/Atilla-Koz"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <button className="font-eduVic">GitHub</button>
      </a>
      <a
        href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <button className="font-eduVic">Linkedin</button>
      </a>
      <a
        href="https://www.instagram.com/atillakz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <button className="font-eduVic">Instagram</button>
      </a>
    </div>
  );
}
