import { useState } from "react";

export default function SaveButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button 
      onClick={() => setSaved(!saved)}
      className="p-2 border rounded"
    >
      {saved ? "Saved ✔" : "Save ☆"}
    </button>
  );
}
