import React, { useState } from "react"
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
import MyWithdrawals from "./Fundriser/Pages/MyWithdrawals"
import AdminDashBoard from "./Admin/Pages/AdminDashBoard"
import AdminProfile from "./Admin/Pages/AdminProfile"
import FundriserApproval from "./Admin/Pages/FundriserApproval"
import WithdrawalApproval from "./Admin/Pages/WithdrawalApproval"
import AdminCampaignAnalytics from "./Admin/Pages/AdminCampaignAnalytics"
import Pnf from "./components/Pnf"
import AdminDonationhistory from "./Admin/Pages/AdminDonationhistory"
import PaymentSuccess from "./User/Pages/PaymentSuccess"
import PayementFailure from "./User/Pages/PayementFailure"
import MyDonations from "./Fundriser/Pages/MyDonations"
// import Loader from "./components/Loader"







export default function App() {
  //  const [loading,setLoading]=useState(true)
  // setTimeout(()=>{
  //   setLoading(false)
  // },3750)
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path={'/'} element={<Home/>}/> */}
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/campaigns/acive/all'} element={<CampaignDetails/>}/>
      <Route path={'campaign/view/:id'} element={<ViewCampaign/>}/>
      <Route path={'/user/payement-success'} element={<PaymentSuccess/>}/>
      <Route path={'/user/payement-error'} element={<PayementFailure/>}/>
      <Route path={'/user/:id'} element={<PayementFailure/>}/>

      <Route path={'/fundriser/dashboard'} element={<FundriserDashboard/>}/>
      <Route path={'/fundraiser/create-campaign'} element={<CreateCampaign/>}/>
      <Route path={'/fundraiser/campaign/:id/edit'} element={<CreateCampaign/>}/>
      <Route path={'/fundraiser/:id/edit'} element={<FundriserProfile/>}/>
      <Route path={'/fundriser/my-campaigns'} element={<FundriserMyCampaigns/>}/>
      <Route path={'/fundraiser/campaign/:id/view'} element={<FundriserViewCampaign/>}/>
      <Route path={'/fundraiser/withdrawals'} element={<MyWithdrawals/>}/>



      <Route path={'/admin/dashboard'} element={<AdminDashBoard/>}/>
      <Route path={'/admin/profile'} element={<AdminProfile/>}/>
      <Route path={'/admin/fund-approval'} element={<FundriserApproval/>}/>
      <Route path={'/admin/withdrawal-approval'} element={<WithdrawalApproval/>}/>
      <Route path={'/admin/campaign-analytics'} element={<AdminCampaignAnalytics/>}/>
      <Route path={'/admin/donations/history'} element={<AdminDonationhistory/>}/>

      <Route path={'/*'} element={<Pnf/>}/>
    </Routes>
    
    </>
  )
}
