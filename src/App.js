import 'assets/css/App.css'
import Home from 'pages/Home'
import Advice from 'pages/Advice'
import StatePreview from 'pages/StatePreview'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="advice" element={<Advice />} />
        <Route path="preview" element={<StatePreview />} />
      </Routes>
    </div>
  )
}

export default App
