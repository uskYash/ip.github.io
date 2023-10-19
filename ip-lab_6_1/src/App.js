import React from 'react'
// import Header from './components/Header'
import { Routes ,Route} from 'react-router-dom'
import About from './components/About'
import Contacts from './components/Contacts'
import Parent from './components/Parent'



export default function App() {
  return (
    <>
            <Routes>
                <Route path="/home" element={<Parent/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contacts" element={<Contacts/>}></Route>
                <Route path="/" element={<Parent/>}></Route>
            </Routes>
        </>
  )
}
