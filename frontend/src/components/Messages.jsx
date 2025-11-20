import { useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([
    { from: "UserA", text: "Hello!" },
    { from: "You", text: "Hi, how can I help?" }
  ]);
  
  const [newMsg, setNewMsg] = useState("");

  const sendMessage = () => {
    setMessages([...messages, { from: "You", text: newMsg }]);
    setNewMsg("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Messages</h2>

      <div className="border p-2 h-40 overflow-auto mt-2">
        {messages.map((m, i) => (
          <div key={i} className="p-1">
            <b>{m.from}:</b> {m.text}
          </div>
        ))}
      </div>

      <input 
        className="border mt-2 p-2 w-full"
        placeholder="Type a message..."
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
      />

      <button 
        onClick={sendMessage}
        className="bg-blue-600 text-white p-2 rounded mt-2"
      >
        Send
      </button>
    </div>
  );
}