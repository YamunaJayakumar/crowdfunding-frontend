import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './Pages/public/Home'
import Footer from "./components/common/Footer"
import Login from "./Auth/Login"
import Register from "./Auth/Register"
import FundriserDashboard from "./FundRiser/FundriserDashboard"
import CreateCampaign from "./FundRiser/CreateCampaign"
import CampaignDetails from "./Pages/public/CampaignDetails"
import ViewCampaign from "./Pages/public/ViewCampaign"
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
