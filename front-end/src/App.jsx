import Home from "./components/Home"
import Header from "./components/layouts/Header"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
