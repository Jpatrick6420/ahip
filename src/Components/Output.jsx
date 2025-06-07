function Output({ query }) {
  return (
    <section>
      <ul>
        {query.map((item, index) => {
          return (
            <li
              key={index}
              className="text-xs border-1 border-black my-2 p-1 bg-stone-50 lg:hover:scale-105 hover:cursor-pointer"
            >
              <p className="text-black">{item.question}</p>
              <p className="text-blue-500 pt-1">{item.answer}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Output;
