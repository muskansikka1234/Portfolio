import Home from "./Pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
