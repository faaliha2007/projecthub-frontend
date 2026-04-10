

export default function ProjectList({ projects, search, setSearch }) {


  const safeProjects = Array.isArray(projects) ? projects : [];

 
  const filtered = safeProjects.filter((p) => {
    const text = search.toLowerCase().trim();

    return (
      (p.title || "").toLowerCase().includes(text) ||
      (p.tag || "").toLowerCase().includes(text)
    );
  });

  return (
    <div className="w-full">

     
      <div className="relative w-full mb-6">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search projects by title or tech..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl 
          bg-white/20 backdrop-blur-md 
          text-white placeholder-gray-200 
          border border-white/20 
          focus:ring-2 focus:ring-pink-300 
          outline-none transition"
        />
      </div>

    
      {filtered.length === 0 && (
        <p className="text-white/70 text-center mt-10">
          No projects found 😢
        </p>
      )}

   
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 p-5 rounded-2xl 
            border border-white/20 backdrop-blur 
            hover:scale-[1.03] transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-1">
              {p.title || "No Title"}
            </h3>

            <p className="text-xs text-pink-300 mb-2">
              #{p.tag || "general"}
            </p>

            <p className="text-white/70 text-sm mb-3">
              {p.desc || "No Description"}
            </p>

            {p.file && (
              <img
                src={p.file}
                alt="project"
                className="w-full h-40 object-cover rounded-xl"
              />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
