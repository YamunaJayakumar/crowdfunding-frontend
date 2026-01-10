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
import AdminProfile from "./Admin/Pages/AdminProfile"
import FundriserApproval from "./Admin/Pages/FundriserApproval"
import WithdrawalApproval from "./Admin/Pages/WithdrawalApproval"
import AdminCampaignAnalytics from "./Admin/Pages/AdminCampaignAnalytics"
import Pnf from "./components/Pnf"
import AdminDonationhistory from "./Admin/Pages/AdminDonationhistory"






export default function App() {
  return (
    <>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/campaign-details'} element={<CampaignDetails/>}/>
      <Route path={'/view-campaign'} element={<ViewCampaign/>}/>

      <Route path={'/fundriser/dashboard'} element={<FundriserDashboard/>}/>
      <Route path={'/fundraiser/create-campaign'} element={<CreateCampaign/>}/>
      <Route path={'/fundraiser/campaign/:id/edit'} element={<CreateCampaign/>}/>
      <Route path={'/fundraiser/:id/edit'} element={<FundriserProfile/>}/>
      <Route path={'/fundriser/my-campaigns'} element={<FundriserMyCampaigns/>}/>
      <Route path={'//fundraiser/campaign/:id/view'} element={<FundriserViewCampaign/>}/>

      <Route path={'/admin/dashboard'} element={<AdminDashBoard/>}/>
      <Route path={'/admin/profile'} element={<AdminProfile/>}/>
      <Route path={'/admin/fund-approval'} element={<FundriserApproval/>}/>
      <Route path={'/admin/withdrawal-approval'} element={<WithdrawalApproval/>}/>
      <Route path={'/admin/campaign-analytics'} element={<AdminCampaignAnalytics/>}/>
      <Route path={'/admin/donation-history'} element={<AdminDonationhistory/>}/>

      <Route path={'/*'} element={<Pnf/>}/>
    </Routes>
    
    </>
  )
}
