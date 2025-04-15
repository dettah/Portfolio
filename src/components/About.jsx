import ProfPic from '../assets/Daniel_Ettah_profile_pic.jpg'


export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
        <img
          src={ProfPic}
          alt="Daniel Ettah"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <p className="text-lg leading-relaxed max-w-xl">
          I'm <strong>Daniel Ettah</strong>, an AI engineer and front-end developer passionate about building real-world applications.
          I love learning and helping others grow through technology. Outside tech, I enjoy music and exploring cultures.
        </p>
      </div>
    </section>
  );
}



// export default function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-6">About Me</h2>
//       <p className="max-w-2xl mx-auto text-lg">
//         I'm Daniel Ettah, an AI engineer and full-stack developer with a passion for building real-world applications. 
//         I love learning and helping others grow through technology. Outside tech, I enjoy music and exploring cultures.
//       </p>
//     </section>
//   );
// }
