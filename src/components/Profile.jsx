import { useEffect } from "react";

function Profile({ profile, setProfile, editing, setEditing }) {

 
  useEffect(() => {
    const saved = localStorage.getItem("profile");

    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, [setProfile]);

  // 🖼️ IMAGE UPLOAD (LOCAL PREVIEW)
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setProfile((prev) => ({ ...prev, pic: imageURL }));
  };


  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setEditing(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl text-center shadow-lg border border-white/20 w-80 mx-auto mt-10">

     
      <img
        src={profile?.pic || "https://via.placeholder.com/100"}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-400 object-cover"
      />

      {editing && (
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="mb-3 w-full text-sm text-white 
          file:mr-4 file:py-2 file:px-4 
          file:rounded-full file:border-0 
          file:text-sm file:font-semibold 
          file:bg-pink-400 file:text-white 
          hover:file:bg-pink-500 
          cursor-pointer"
        />
      )}

      {editing ? (
        <>
         
          <input
            value={profile?.name || ""}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
            className="w-full p-2 mb-2 rounded text-black"
            placeholder="Name"
          />

        
          <input
            value={profile?.bio || ""}
            onChange={(e) =>
              setProfile({ ...profile, bio: e.target.value })
            }
            className="w-full p-2 mb-3 rounded text-black"
            placeholder="Bio"
          />

        
          <button
            onClick={handleSave}
            className="bg-pink-400 w-full py-2 rounded text-white font-semibold hover:bg-pink-500 transition"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-white">
            {profile?.name || "Your Name"}
          </h2>

          <p className="opacity-70 text-white">
            {profile?.bio || "Your Bio"}
          </p>

      
          <button
            onClick={() => setEditing(true)}
            className="mt-3 w-full bg-pink-400 py-2 rounded text-white font-semibold hover:bg-pink-500 transition"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Profile;
