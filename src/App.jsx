import { useState } from "react";
import "./App.css";
import questions from "./data/medicare_parts_data";
import Output from "./Components/Output";
import Nav from "./Components/Nav";
import Title from "./Components/Title";
import SearchBar from "./Components/SearchBar";

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
        <Title title="2025 AHIP" />
        <SearchBar
          handleChange={handleChange}
          clearQuery={clearQuery}
          currentQuery={currentQuery}
        />

        <Output query={query} />
      </main>
    </>
  );
}

export default App;
