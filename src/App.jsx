import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Show from './components/Show'

function App() {
  const [shows, setShows] = useState([])

  useEffect (()=>{
    const func = async ()=>{
      try {
        const data  = await fetch("https://api.tvmaze.com/search/shows?q=all")
        data.json().then((data)=>{
          setShows(data)
        }).catch((err)=>{
          console.log("Fetching Problem")
        })
      } catch (error) {
        console.log("catch error")
      }
    }
    func()
  },[])

  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
    <Route path='/' element={<Home shows = {shows}/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/show/:id" element={<Show shows = {shows}/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
