import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <body>
          <div className="main">
            <h1>Autovermietung Belesh 123</h1>
            <p>Gib einen Namen ein, um einen einfachen Get Request zu testen</p>
            <form>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              ></input>
            </form>
            <br />
            <a
              href={`http://localhost:8080/hello/${name}`}
              style={{ color: "white" }}
            >
              get request testen
            </a>
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
