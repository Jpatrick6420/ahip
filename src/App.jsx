import { useState } from "react";
import "./App.css";
import questions from "./data/medicare_parts_data";
import Output from "./Components/Output";
import Nav from "./Components/Nav";

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
    <>
      <Nav />
      <main className="px-4 lg:px-8 bg-blue-200 min-h-[100dvh]">
        <h1 className="text-2xl text-black font-bold text-center pt-2">
          AHIP 2024
        </h1>
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
        <Output query={query} />
      </main>
    </>
  );
}

export default App;
