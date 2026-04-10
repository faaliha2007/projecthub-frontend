export default function Sidebar({ setPage, page }) {
  return (
    <div className="w-64 h-screen p-5 bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col">

  
      <h1 className="text-2xl font-bold text-white mb-8 text-center tracking-wide">
        🚀 PeerHub
      </h1>

    
      <div className="flex flex-col gap-3">

        <button
          onClick={() => setPage("home")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white transition duration-200 
          ${page === "home" ? "bg-pink-400 text-white shadow-lg" : "hover:bg-pink-400/30 hover:scale-105"}`}
        >
          🏠 Home
        </button>

        <button
          onClick={() => setPage("add")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white transition duration-200 
          ${page === "add" ? "bg-pink-400 text-white shadow-lg" : "hover:bg-pink-400/30 hover:scale-105"}`}
        >
          ➕ Add
        </button>

        <button
          onClick={() => setPage("view")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white transition duration-200 
          ${page === "view" ? "bg-pink-400 text-white shadow-lg" : "hover:bg-pink-400/30 hover:scale-105"}`}
        >
          📦 Projects
        </button>

        <button
          onClick={() => setPage("profile")}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-white transition duration-200 
          ${page === "profile" ? "bg-pink-400 text-white shadow-lg" : "hover:bg-pink-400/30 hover:scale-105"}`}
        >
          👤 Profile
        </button>

      </div>

      
      <div className="mt-auto pt-6 text-sm text-white/70 text-center">
        Built with ❤️ by Faali
      </div>
    </div>
  );
}
