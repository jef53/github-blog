import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export function Router() {
  return (
    <>
      <Navbar />
      <Routes>


        <Route element={<Home />} path="/" />
        <Route element={<Post />} path="/post/:id" />
      </Routes>
    </>
  )
}