import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import RecipeDetails from "./pages/RecipeDetails.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";

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
          <Route path="recipes/:recipeId" element={<RecipeDetails />}/>
          <Route path="courses/:courseId" element={<CourseDetail />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
