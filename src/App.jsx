import AfterInstall from './AfterInstall'
import './App.css'
import Rate from './Rate'
import { HashRouter, Routes, Route } from "react-router";

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/after-install" element={<AfterInstall />} />
        <Route path="/rate" element={<Rate />} />
      </Routes>
    </HashRouter>
  )
}

export default App
