import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Projects';
import ProjectPage from './components/Project_page';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
          <Route path='projectPage' element={<ProjectPage/>}/>
      </Routes>
    </>
  );
}

export default App;
