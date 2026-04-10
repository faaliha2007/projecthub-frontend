import { useState } from "react";

function AddProject({ addProject }) {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    tag: "",
    file: null,
  });

  const handleSubmit = () => {
    if (!form.title || !form.desc) {
      alert("Please fill all fields!");
      return;
    }

    let fileURL = "";

    if (form.file) {
      fileURL = URL.createObjectURL(form.file);
    }

    const newProject = {
      id: Date.now(),
      title: form.title,
      desc: form.desc,
      tag: form.tag,
      file: fileURL,
    };

    const oldProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    const updatedProjects = [newProject, ...oldProjects];

    localStorage.setItem(
      "projects",
      JSON.stringify(updatedProjects)
    );

    addProject(newProject);

    setForm({
      title: "",
      desc: "",
      tag: "",
      file: null,
    });
  };

  return (
    <div className="bg-white/10 p-6 rounded-2xl text-white">
      <h2 className="text-xl mb-4">Add Project</h2>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
        className="w-full p-2 mb-2 rounded text-black"
      />

      <input
        placeholder="Description"
        value={form.desc}
        onChange={(e) =>
          setForm({ ...form, desc: e.target.value })
        }
        className="w-full p-2 mb-2 rounded text-black"
      />

      <input
        placeholder="Tech"
        value={form.tag}
        onChange={(e) =>
          setForm({ ...form, tag: e.target.value })
        }
        className="w-full p-2 mb-2 rounded text-black"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setForm({ ...form, file: e.target.files[0] })
        }
        className="mb-3 w-full text-sm text-white 
        file:mr-4 file:py-2 file:px-4 
        file:rounded-full file:border-0 
        file:text-sm file:font-semibold 
        file:bg-pink-400 file:text-white 
        hover:file:bg-pink-500 
        cursor-pointer"
      />

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-pink-400 rounded hover:bg-pink-500 transition"
      >
        Add
      </button>
    </div>
  );
}

export default AddProject;