import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f172a] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-cyan-400">Daniel Ettah</div>

        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>

        <div className="md:hidden text-cyan-400 cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <ul className="md:hidden bg-[#0f172a] px-6 pb-6 text-gray-300 space-y-4">
          <li><a href="#home" className="block hover:text-cyan-400" onClick={toggleNav}>Home</a></li>
          <li><a href="#about" className="block hover:text-cyan-400" onClick={toggleNav}>About</a></li>
          <li><a href="#projects" className="block hover:text-cyan-400" onClick={toggleNav}>Projects</a></li>
          <li><a href="#contact" className="block hover:text-cyan-400" onClick={toggleNav}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   const toggleNav = () => setNavOpen(!navOpen);

//   return (
//     <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f172a] shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         <div className="text-2xl font-bold text-cyan-400">Daniel Ettah</div>

//         <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
//           <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
//           <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
//           <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
//           <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
//         </ul>

//         <div className="md:hidden text-cyan-400 cursor-pointer" onClick={toggleNav}>
//           {navOpen ? <X size={28} /> : <Menu size={28} />}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {navOpen && (
//         <ul className="md:hidden bg-[#0f172a] px-6 pb-6 text-gray-300 space-y-4">
//           <li><a href="#home" className="block hover:text-cyan-400" onClick={toggleNav}>Home</a></li>
//           <li><a href="#about" className="block hover:text-cyan-400" onClick={toggleNav}>About</a></li>
//           <li><a href="#projects" className="block hover:text-cyan-400" onClick={toggleNav}>Projects</a></li>
//           <li><a href="#contact" className="block hover:text-cyan-400" onClick={toggleNav}>Contact</a></li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// // export default function Navbar() {
// //   return (
// //     <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center">
// //       <h1 className="text-2xl font-bold">MyPortfolio</h1>
// //       <ul className="flex gap-4 text-sm md:text-base">
// //         <li><a href="#hero" className="hover:underline">Home</a></li>
// //         <li><a href="#skills" className="hover:underline">Skills</a></li>
// //         <li><a href="#about" className="hover:underline">About</a></li>
// //         <li><a href="#projects" className="hover:underline">Projects</a></li>
// //         <li><a href="#awards" className="hover:underline">Awards</a></li>
// //         <li><a href="#contact" className="hover:underline">Contact</a></li>
// //       </ul>
// //     </nav>
// //   );
// // }


