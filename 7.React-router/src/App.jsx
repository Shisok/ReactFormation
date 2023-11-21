import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from "./components/Home"
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import UserProfile from './components/UserProfile'
import Analytics from './pages/Analyics/Analytics'
import Development from './pages/Analyics/Development'
import UIUX from './pages/Analyics/UIUX'
import CyberSecurity from './pages/Analyics/CyberSecurity'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/analytics" element={<Analytics />}>
            <Route path="/analytics/development" element={<Development />} />
            <Route path="/analytics/cybersecurity" element={<CyberSecurity />} />
            <Route path="/analytics/uiux" element={<UIUX />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
