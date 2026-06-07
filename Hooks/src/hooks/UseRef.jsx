import React, { useState, useRef, useEffect } from "react";

function UseRef() {
  const [name, setName] = useState("");
  const randers = useRef(0);
  const previousName = useRef();

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  useEffect(() => {
    randers.current += 1;
  });
  return (
    <>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello! My name is {name}</p>
        <p>Randers: {randers.current}</p>
        <p>And my nane was {previousName.current}</p>
      </div>
    </>
  );
}

export default UseRef;
