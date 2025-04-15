import { FaHtml5, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "ReactJS", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(skill => (
          <div key={skill.name} className="bg-white rounded-lg p-4 shadow-md w-28 flex flex-col items-center">
            <div className="mb-2">{skill.icon}</div>
            <div className="text-base font-semibold">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}



// const skills = [
//   { name: "HTML5", icon: "🌐" },
//   { name: "ReactJS", icon: "⚛️" },
//   { name: "Tailwind CSS", icon: "💨" },
//   { name: "Python", icon: "🐍" },
//   { name: "Git", icon: "🔧" },
//   { name: "AI/ML", icon: "🤖" },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 px-6 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         {skills.map(skill => (
//           <div key={skill.name} className="bg-white rounded-lg p-4 shadow-md w-28 flex flex-col items-center">
//             <div className="text-3xl mb-2">{skill.icon}</div>
//             <div className="text-base font-semibold">{skill.name}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

