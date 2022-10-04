import { useState } from "react";
import React from "react";
import "../styles/App.css";
const App = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let arr = text.trim().split(" ");
    if (arr === "") {
      arr = [];
    }
    setCount(arr.length);
  }, [text]);

  return (
    <div id="main">
      <textarea
        maxLength="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>
        Number of Words: <span>{count}</span>
      </p>
    </div>
  );
};

export default App;
