import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState();

  const onSubmit = () => {
    // send post request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: body }),
    };
    fetch("http://localhost:8080/api/test", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

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
          <div className="post">
            <p>Gib Informationen ein um einen Post Request zu testen</p>
            <form>
              <input
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
              />
              <button onClick={() => onSubmit()}>post request testen</button>
            </form>
            <div className="output">{data && <div>{data}</div>}</div>
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
