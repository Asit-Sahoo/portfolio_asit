import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-10"
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h2 className="text-2xl md:text-3xl text-gray-300">
          Hello, I'm
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold mt-3 text-cyan-400">
          Asit Sahoo
        </h1>

        <h3 className="text-2xl mt-5 text-gray-300">
          Full Stack Developer | Azure Data Engineer
        </h3>

        <p className="mt-6 text-gray-400 leading-7">
          Passionate developer skilled in React, Python, SQL,
          Azure, PySpark, Databricks, and AI-based systems.
          I love building scalable and modern applications.
        </p>

        <div className="mt-8 flex gap-5">
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-xl font-semibold transition"
          >
            Hire Me
          </a>

          <a
          href="/resume.pdf"
          download
          className="border border-cyan-400 px-7 py-3 rounded-xl hover:bg-cyan-500 transition"
          > 
          Download Resume
        </a>
        </div>

        <div className="flex gap-6 mt-8 text-3xl">
          <a
            href="https://github.com/"
            target="_blank"
          >
            <FaGithub className="hover:text-cyan-400" />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-cyan-400" />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
          >
            <FaInstagram className="hover:text-cyan-400" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-[300px] md:w-[400px] rounded-full border-4 border-cyan-500 shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;