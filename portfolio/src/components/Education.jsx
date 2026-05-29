import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.Tech in Computer Science",
    place: "Techno Main Salt Lake",
    year: "2021 - 2025",
    marks: "CGPA: 8.6",
    achievement:
      "Built AI Healthcare System and multiple full stack projects.",
  },
  {
    title: "Higher Secondary (HS)",
    place: "Khanyadihi P.K H.S School",
    year: "2020 - 2021",
    marks: "96.6%",
    achievement:
      "Strong academic performance in Science stream.",
  },
  {
    title: "Madhyamik",
    place: "Khanyadihi P.K H.S School",
    year: "2020",
    marks: "91.14%",
    achievement:
      "Achieved excellent academic performance.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12 text-cyan-400"
      >
        Education
      </motion.h2>

      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-900 p-6 rounded-2xl border border-cyan-500"
          >
            <h3 className="text-2xl font-semibold">
              {edu.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {edu.place} | {edu.year}
            </p>

            <p className="text-cyan-400 mt-3 font-semibold">
              {edu.marks}
            </p>

            <p className="text-gray-300 mt-4">
              {edu.achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;