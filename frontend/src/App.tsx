import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Jobs from "./components/Jobs"
import About from "./components/About"
import Contact from "./components/Contact"
import Dashboard from "./components/dashboard/Dashboard"
import Footer from "./components/Footer"

function App() {
  return(
    <>
      <Navbar/>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="*" element={<h1 className="text-5xl mb-96">404 Page not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
