import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './components/layouts/SideBar';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Project from './components/pages/Project';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Header from './components/layouts/Header';
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>
      <div className="py-3 min-h-screen">
        <Container>
          <div className="flex flex-col lg:flex-row space-x-5 space-y-5 lg:gap-0 text-white">
            {/* Sidebar - Full width on mobile, fixed width on desktop */}
            <SideBar/>
            {/* Sidebar - Full width on mobile, fixed width on desktop */}
            
            {/* Main Content Area */}
            <div className="w-full lg:w-[75%] bg-[#1e1e1f] rounded-2xl overflow-hidden ">
              <Header />
              <div className="p-3 lg:p-5 ">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/project" element={<Project />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;