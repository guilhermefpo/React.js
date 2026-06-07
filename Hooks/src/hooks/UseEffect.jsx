import React, { useState, useEffect } from "react";

function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("Tipo alterado para:", resourceType);
  }, [resourceType]);

  const changeResourceType = (type) => {
    setResourceType(type);
  };

  return (
    <div>
      <h1>{resourceType}</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>
          Comentários
        </button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  );
}

export default UseEffect;
