import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './Pages/public/Home'
import Footer from "./components/common/Footer"

export default function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
