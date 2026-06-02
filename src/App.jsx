import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Toaster } from './component/ui/toaster.jsx'

import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
