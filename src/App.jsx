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
      <div className="bg-[#121212] py-5 ">
        <Container className="flex-none lg:flex lg:justify-between space-x-5 text-white">
          {/* Side Ear start  */}
          <SideBar className={""} />
          {/* <Side Bar End  */}
          {/* Main Part start  */}
          <div className="w-full lg:w-[73%] h-auto bg-[#1e1e1f] rounded-2xl overflow-hidden ">
            <Header />
            <div className="p-4 ">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/project" element={<Project />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
          {/* Main Part End  */}
        </Container>
      </div>


    </BrowserRouter>
  );
}

export default App;