import Home from "./pages/Home"
import About from "./pages/Registration"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App