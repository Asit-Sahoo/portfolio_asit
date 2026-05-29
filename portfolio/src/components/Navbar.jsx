const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        Asit Sahoo
      </h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#home" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#education" className="hover:text-cyan-400">Education</a>
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;