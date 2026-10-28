
import React, { useEffect, useState } from "react";
import Card from "./components/Card.jsx";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
        const response = await fetch("https://api.github.com/users");
        const information = await response.json();
        setData(information);
      }

    getData();
  }, []);

  return (
   <div className="github-users-grid">
      {data.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;