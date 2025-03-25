// App.jsx
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
  return (
    <div className="flex">
      <Sidebar /> 
      
      {/* Main content area that changes based on route */}
      <div className="flex-1 ">
        <Routes>
          <Route path="/" element={<Home />} />
       
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;