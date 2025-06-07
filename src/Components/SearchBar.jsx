function SearchBar({ handleChange, clearQuery, currentQuery }) {
  return (
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
  );
}

export default SearchBar;
