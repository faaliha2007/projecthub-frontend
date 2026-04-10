import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects =
      JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  const totalProjects = projects.length;
  const trendingProjects = projects.slice(0, 3);

  return (
    <div className="p-6 text-white">

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          👋 Welcome Faali
        </h1>
        <p className="opacity-70">
          Discover amazing student projects 🚀
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/20">
          <h2 className="text-xl font-bold">{totalProjects}</h2>
          <p className="text-sm opacity-70">Projects</p>
        </div>

        <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/20">
          <h2 className="text-xl font-bold">{trendingProjects.length}</h2>
          <p className="text-sm opacity-70">Trending</p>
        </div>

        <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center border border-white/20">
          <h2 className="text-xl font-bold">⭐</h2>
          <p className="text-sm opacity-70">Saved</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">
          🔥 Trending Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trendingProjects.length === 0 && (
            <p className="opacity-70">No trending projects yet 😭</p>
          )}

          {trendingProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 rounded-xl shadow-lg"
            >
              <h3 className="font-bold">{project.title}</h3>
              <p className="text-sm opacity-90">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          ❤️‍🔥 All Projects
        </h2>

        <div className="flex flex-col gap-4">
          {projects.length === 0 && (
            <p className="opacity-70">No projects yet 🤯</p>
          )}

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20 shadow-md hover:scale-[1.02] transition"
            >
              <h3 className="text-lg font-bold">
                {project.title}
              </h3>

              <p className="opacity-70">
                {project.desc}
              </p>

              <div className="flex gap-4 mt-3 text-sm">
                <button className="hover:text-pink-400 transition">
                  ❤️ Like
                </button>

                <button className="hover:text-yellow-400 transition">
                  ⭐ Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}