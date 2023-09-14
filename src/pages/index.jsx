import Header from "@/components/Headers";
import { Inter } from "next/font/google";
import MovieList from "./MoviesList";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div>
      <Header />
      <h1 className="text-7xl text-red-500 m-10">Movies</h1>
    </div>
    <div>
        <MovieList />
      </div>
    </>
  );
}
