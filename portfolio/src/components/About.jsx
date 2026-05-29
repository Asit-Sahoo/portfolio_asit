const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20"
    >
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        About Me
      </h2>

      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800">
        <p className="text-gray-300 leading-8 text-lg">
          I am a passionate Data Engineer and software engineer and full stack
          developer with strong knowledge in c++, Python,
          SQL, Azure Cloud, PySpark, Databricks, ADF, AI, Frontend and Backend development.
          I enjoy solving complex problems and building
          scalable applications with modern technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div>
            <h3 className="text-cyan-400 font-semibold">
              Name:
            </h3>
            <p>Asit Sahoo</p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold">
              Email:
            </h3>
            <p>asitsahoo3921@gmail.com</p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold">
              Phone:
            </h3>
            <p>+91 9907801493</p>
          </div>

          <div>
            <h3 className="text-cyan-400 font-semibold">
              Location:
            </h3>
            <p>India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;