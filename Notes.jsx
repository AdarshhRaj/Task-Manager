import React, { useState } from "react";

export default function Notes() {
  const [note, setNote] = useState("");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <textarea
        className="w-full h-64 p-2 border rounded"
        placeholder="Write your notes here..."
        value={note}
        onChange={e => setNote(e.target.value)}
      />
    </div>
  );
}
