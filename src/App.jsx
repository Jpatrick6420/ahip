import { useState } from "react";
import "./App.css";
import questions from "./data/medicare_parts_data";

function App() {
  const [query, setQuery] = useState(questions);
  const [currentQuery, setCurrentQuery] = useState("");
  const clearQuery = () => {
    setQuery(questions);
    setCurrentQuery("");
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentQuery(value);
    const currentState = questions.filter((item) =>
      item.question.toLowerCase().includes(value.toLowerCase())
    );
    setQuery(currentState);
  };
  return (
    <main className="px-2 bg-blue-200">
      <div className="flex justify-center gap-2 items-center pt-4">
        <label className="text-black font-bold">Search</label>
        <input
          type="text"
          className="border-2 border-black text-black bg-white"
          onChange={(e) => handleChange(e)}
          value={currentQuery}
        />
        <button
          className="bg-blue-500 px-1 py-0.5 rounded-sm font-bold hover:bg-blue-800"
          onClick={clearQuery}
        >
          clear
        </button>
      </div>
      <section>
        <ul>
          {query.map((item, index) => {
            return (
              <li
                key={index}
                className="text-xs border-1 border-black my-2 p-1 bg-white"
              >
                <p className="text-black">{item.question}</p>
                <p className="text-blue-500 pt-1">{item.answer}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
