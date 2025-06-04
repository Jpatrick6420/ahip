function Nav() {
  return (
    <nav className="bg-black w-48  py-2">
      <ul>
        <li className="cursor-pointer text-blue-300 hover:text-sky-700 hover:bg-gray-200  px-1">
          Plan A
        </li>
        <li className="cursor-pointer text-blue-300 hover:text-sky-700 hover:bg-gray-200 px-1">
          Plan B
        </li>
        <li className="cursor-pointer text-blue-300 hover:text-sky-700 hover:bg-gray-200 px-1">
          Medigap
        </li>
        <li className="cursor-pointer text-blue-300 hover:text-sky-700 hover:bg-gray-200 px-1">
          Medicare Advantage
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
