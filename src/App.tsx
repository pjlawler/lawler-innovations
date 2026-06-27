import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Software from "./pages/Software"
import Aviation from "./pages/Aviation"
import About from "./pages/About"
import "./App.css"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/aviation" element={<Aviation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
