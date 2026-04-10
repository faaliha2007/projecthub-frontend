import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddProject from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import Profile from "./components/Profile";

import { auth, db } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [authPage, setAuthPage] = useState("login");

  const [projects, setProjects] = useState([]);
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    pic: "",
  });

  const [editing, setEditing] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    signOut(auth);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);

        const ref = doc(db, "profile", u.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setProfile(snap.data());

        const saved =
          JSON.parse(localStorage.getItem("projects")) || [];
        setProjects(saved);

      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return authPage === "login" ? (
      <Login switchToSignup={() => setAuthPage("signup")} />
    ) : (
      <Signup switchToLogin={() => setAuthPage("login")} />
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
      <Sidebar setPage={setPage} />

      <div className="flex-1 p-6 text-white">
        
        {page === "home" && <Home />}

        {page === "add" && (
          <AddProject
            addProject={(newProject) =>
              setProjects((prev) => [newProject, ...prev])
            }
          />
        )}

        {page === "view" && (
          <ProjectList
            projects={projects}
            search={search}
            setSearch={setSearch}
          />
        )}

        {page === "profile" && (
          <Profile
            profile={profile}
            setProfile={setProfile}
            editing={editing}
            setEditing={setEditing}
            projects={projects}
          />
        )}

      </div>
    </div>
  );
}

export default App;