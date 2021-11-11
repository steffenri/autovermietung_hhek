import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const apiPath = "http://localhost:8080";
  const [body, setBody] = useState("");
  const [result, setResult] = useState({ body: "", data: {} });
  console.log(result && result);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  const postReq = () => {
    fetch(`http://localhost:8080/api/test`, requestOptions)
      .then((response) => {
        console.log("this is the response:", response);
        setResult({ body: response.json() }, ...result.data);
      })
      .then((data) => {
        console.log("this is data:", data);
        setResult(...result.body, { data: data.id });
      });
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
            <br />
            <input
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Text"
            ></input>
            <br />
            <button onClick={() => postReq()}>Send Post</button>
          </div>
        </body>
      </header>
    </div>
  );
}

export default App;
