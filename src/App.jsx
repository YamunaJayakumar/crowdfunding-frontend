import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from './User/Pages/Home'

import Login from "./Auth/Login"
import Register from "./Auth/Register"
import FundriserDashboard from "./Fundriser/Pages/FundriserDashboard"
import CreateCampaign from './Fundriser/Pages/CreateCampaign'
import CampaignDetails from "./User/Pages/CampaignDetails"
import ViewCampaign from "./User/Pages/ViewCampaign"
import FundriserProfile from "./Fundriser/Pages/FundriserProfile"
import FundriserMyCampaigns from "./Fundriser/Pages/FundriserMyCampaigns"
import FundriserViewCampaign from "./Fundriser/Pages/FundriserViewCampaign"
import AdminDashBoard from "./Admin/Pages/AdminDashBoard"




export default function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Register/>}/>

      <Route path={'/fundriser-dashboard'} element={<FundriserDashboard/>}/>
      <Route path={'/fundraiser/create-campaign'} element={<CreateCampaign/>}/>
      <Route path={'/fundraiser/profile'} element={<FundriserProfile/>}/>
      <Route path={'/fundriser/my-campaigns'} element={<FundriserMyCampaigns/>}/>
      <Route path={'/fundriser/view-campaign'} element={<FundriserViewCampaign/>}/>

      <Route path={'/admin-dashboard'} element={<AdminDashBoard/>}/>


      <Route path={'/campaign-details'} element={<CampaignDetails/>}/>
      <Route path={'/view-campaign'} element={<ViewCampaign/>}/>

    </Routes>
    
    </>
  )
}
