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
      <div className="bg-[#121212] py-5">
        <Container>
          <div className="flex justify-between text-white">
            <SideBar />
            <div className="h-auto w-[75%] bg-[#1e1e1f] rounded-2xl ">
              <Header />
              <div className="p-4">
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