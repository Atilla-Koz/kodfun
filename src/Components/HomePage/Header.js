export default function Header() {
  return (
    <div className="flex flex-row justify-between gap-8 p-8 bg-black text-white">
      <section>
        <button>A</button>
      </section>
      <section className="flex flex-row justify-between gap-8">
        <button>About</button>
        <button>Projects</button>
      </section>
    </div>
  );
}
