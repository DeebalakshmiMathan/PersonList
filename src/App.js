import "./styles.css";
import data from "./data";
import List from "./List";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}> Clear All</button>
      </section>
    </main>
  );
}
