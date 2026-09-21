import './index.css'
import { Content } from './components/Content'
import { Routes, Route } from 'react-router-dom'
import { Windows } from './components/Windows' 
import { Linux } from './components/Linux'
import { Macos } from './components/Macos'
import { Staos } from './components/Staos'

function App() {

  return (

    <div className="app">

       <Routes>

      <Route path='/' element={<Content />} />
      <Route path='/Windows' element={<Windows />} />
      <Route path='/Linux' element={<Linux />} />
      <Route path='/Macos' element={<Macos/>} />
      <Route path='/sta-je-os' element={<Staos/>} />

    </Routes>

    </div>
  )
}

export default App
