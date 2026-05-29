const Timeline = () => {
  return (
    <section className="py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-14">
          Education & Experience
        </h1>

        <div className="space-y-8">

          <div className="bg-[#111] p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-pink-500">
              B.Tech CSE
            </h2>

            <p className="text-gray-400 mt-2">
              Techno Main Salt Lake
            </p>

            <p className="mt-2">
              CGPA: 9+
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-pink-500">
              Competitive Programming
            </h2>

            <p className="text-gray-400 mt-2">
              HackerRank 5⭐ in C, C++, Python
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Timeline;