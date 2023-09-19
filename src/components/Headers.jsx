import Link from "next/link";
import React from "react";

const Headers = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center">
        <p className="text-red-600 text-5xl mx-10">Movies</p>
        <nav className="md:mt-0 mt-4">
          <ul className="flex flex-col md:flex-row space-x-4 md:space-x-8 md:text-base text-sm text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/addmovies">Add Movies</Link>
            </li>
            <li>
              <Link href="/directors">Directors</Link>
            </li>
            <li>
              <Link href="/directors/adddirector">Add Directors</Link>
            </li>
            <li>
              <Link href="/assigndirectors">Assign Directors</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Headers;
