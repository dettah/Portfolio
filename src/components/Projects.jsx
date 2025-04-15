import Switchive from '../assets/switchive.png'
import Starrik from '../assets/Starrik.png'
import Lumine from '../assets/Luminai.png'


export default function Projects() {
  const projects = [
    { name: "Switchive Mobile Top-up", img: Switchive, link: "https://switchhive-fronted.vercel.app/" },
    { name: "Starrik", img: Starrik, link: "https://starrik.com/" },
    { name: "Customer Churn App", img: Lumine, link: "#" },
  ];
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map(project => (
          <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" className="group relative">
            <img src={project.img} alt={project.name} className="rounded-lg shadow-lg w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-lg font-semibold">{project.name}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}



// export default function Projects() {
//   const projects = [
//     { name: "AI Grader", img: "https://via.placeholder.com/300", link: "#" },
//     { name: "Logistics App", img: "https://via.placeholder.com/300", link: "#" },
//     { name: "Customer Churn App", img: "https://via.placeholder.com/300", link: "#" },
//   ];
//   return (
//     <section id="projects" className="py-20 px-6 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold mb-8">My Projects</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {projects.map(project => (
//           <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer" className="group relative">
//             <img src={project.img} alt={project.name} className="rounded-lg shadow-lg" />
//             <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//               <span className="text-white text-lg">{project.name}</span>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }
