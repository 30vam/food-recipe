import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import RecipeDetails from "./pages/RecipeDetails";

// Default layout that exists in all pages
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="recipes/:id" element={<RecipeDetails />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
