import { useState } from "react";

export default function Post() {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    setPosts([...posts, { text: postText }]);
    setPostText("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Create Post</h2>

      <textarea
        className="border p-2 w-full mt-2"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />

      <button 
        className="bg-green-600 text-white p-2 rounded mt-2"
        onClick={handlePost}
      >
        Post
      </button>

      <div className="mt-4">
        {posts.map((p, i) => (
          <div key={i} className="border p-2 mt-2 rounded">
            {p.text}
          </div>
        ))}
      </div>
    </div>
  );
}
