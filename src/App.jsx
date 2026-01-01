import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './User/Pages/Home'
import Footer from "./components/Footer"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import FundriserDashboard from "./User/Pages/FundriserDashboard"
import CreateCampaign from "./User/Pages/CreateCampaign"
import CampaignDetails from "./User/Pages/CampaignDetails"
import ViewCampaign from "./User/Pages/ViewCampaign"
export default function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/fundriser-dashboard'} element={<FundriserDashboard/>}/>
      <Route path={'/fundraiser/create-campaign'} element={<CreateCampaign/>}/>
      <Route path={'/campaign-details'} element={<CampaignDetails/>}/>
      <Route path={'/view-campaign'} element={<ViewCampaign/>}/>

    </Routes>
    <Footer/>
    </>
  )
}
