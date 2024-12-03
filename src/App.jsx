import AfterInstall from './AfterInstall'
import './App.css'
import { HashRouter, Routes, Route } from "react-router";

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/after-install" element={<AfterInstall />} />
      </Routes>
    </HashRouter>
  )
}

export default App
