import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Contact Links */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Contact Me</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm">
            <a href="mailto:info@danielettah.dev" className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaEnvelope /> dettah7@gmail.com
            </a>
            <a href="tel:+2348123456789" className="flex items-center gap-2 hover:text-blue-400 transition">
              <FaPhone /> +234 708 523 9225
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/dettah" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/daniel-ettah-100722109" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Daniel Ettah. All rights reserved.
      </div>
    </footer>
  );
}



// export default function Footer() {
//   return (
//     <footer id="contact" className="bg-gray-800 text-white text-center py-6">
//       <p>Contact: info@danielettah.dev</p>
//       <p>&copy; {new Date().getFullYear()} Daniel Ettah</p>
//     </footer>
//   );
// }
