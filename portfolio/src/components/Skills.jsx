const skills = [
  { name: "React", level: "90%" },
  { name: "Python", level: "85%" },
  { name: "SQL", level: "90%" },
  { name: "PySpark", level: "85%" },
  { name: "Azure", level: "80%" },
  { name: "JavaScript", level: "85%" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-14">
          Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <div key={index}>

              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="w-full bg-gray-700 h-3 rounded-full">
                <div
                  className="bg-pink-500 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;