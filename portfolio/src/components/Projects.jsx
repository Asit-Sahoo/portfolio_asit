const projects = [
  {
    title: "MERN Booking App",
    image: "/Booking.png",
    link: "https://mern-booking-app-z2yv.onrender.com",
  },
  {
    title: "Calculator",
    image: "/calculator.png",
    link: "https://asit-sahoo.github.io/calcualtor/",
  },
  {
    title: "Weather App",
    image: "/weather.jpg",
    link: "https://asit-sahoo.github.io/weather/",
  },
  {
    title: "AI Chatbot",
    image: "/chat.jpeg",
    link: "https://asit-sahoo-mygpt.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">

      <h1 className="text-4xl font-bold text-center mb-14">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:scale-105 duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-semibold">
                {project.title}
              </h2>

              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 text-pink-500"
              >
                Live Demo →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;