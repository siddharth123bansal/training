import Link from "next/link";
import React from "react";

const Headers = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <p
          className="text-red-600 text-5xl mx-10"
          // style={{ margin: "20px", fontSize: "20px" }} 
        >
          Movies
        </p>
        <nav style={{ marginTop: "28px", fontSize: "12px" }}>
          <ul className="flex space-x-4 text-white">
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
