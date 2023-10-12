// App.js
import './App.css';
// import Navbar from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import Main from './routes/Main';
import Header from './routes/Header';
import Profile from './routes/Profile';
import Projects from './routes/Projects';
import Skills from './routes/Skills';
import Contacts from './routes/Contacts';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
        <Route path='/video1' element={<Video1/>}/>
      </Routes>
      
    </div>);
}

export default App;