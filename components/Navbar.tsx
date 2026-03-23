export default function Navbar() {
  return (
    <nav className="fixed w-full p-6 flex justify-between backdrop-blur bg-black/40 z-50">
      <div className="font-bold">Petro Blyn</div>
      <div className="space-x-6 text-sm">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}