import AfterInstall from './AfterInstall'
import './App.css'
import Rate from './Rate'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/after-install" element={<AfterInstall />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
