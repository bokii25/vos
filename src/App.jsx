import './index.css'
import { Info } from 'lucide-react'
import { Content } from './components/Content'
import { Routes, Route } from 'react-router-dom'
import { Windows } from './components/Windows' 
import { Linux } from './components/Linux'
import { Macos } from './components/Macos'
import { Staos } from './components/Staos'
import { Statistika } from './components/Statistika'
import { OSajtu } from './components/Osajtu'

import { Analytics } from '@vercel/analytics/react'

function App() {

  return (


    <div className="app">
      <div className="responsivemw">
        <p className="responsivem"> <Info /> Sajt ne podrzava vece <br /> tablete i kompjutere!</p>
      </div>
      
    <div className="appt">

    <Routes>

      <Route path='/' element={<Content />} />
      <Route path='/Windows' element={<Windows />} />
      <Route path='/Linux' element={<Linux />} />
      <Route path='/Macos' element={<Macos/>} />
      <Route path='/sta-je-os' element={<Staos/>} />
      <Route path='/statistika' element={<Statistika/>} />
      <Route path='/o-sajtu' element={<OSajtu/>} />

    </Routes>

    </div>

    <Analytics />
    </div>
  )
}

export default App
