
import React, { useEffect, useState } from "react";
import {
  Heart,
  Smartphone,
  CreditCard,
  Landmark,
  VerifiedIcon,
} from "lucide-react";
import { FaArrowRight, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { viewOneCampaignAPI } from "../../services/allAPI";
import { useParams } from 'react-router-dom';
import serverURL from "../../services/serverURL";


function FundriserViewCampaign() {
  // const [openWithdrawModal, setOpenWithdrawModal] = useState(false)
  const[campaign,setCampaign]=useState()
  console.log(campaign);
  
 
  const { id } = useParams()
  useEffect(()=>{
    viewOneCampaign(id)
  },[id])

    const viewOneCampaign=async(id)=>{
      const token=sessionStorage.getItem("token")
          if(!token){
              toast.warning("please login")
          }
          const reqHeader={
              'Authorization':`Bearer ${token}`
          }
          try{
            const result= await viewOneCampaignAPI(id,reqHeader)
            if(result.status===200){
              setCampaign(result.data)
              
            }
            else{
              toast.warning("soemthing went wrong")
            }

          }catch(err){
            toast.warning(err?.response?.data)

          }
   }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {campaign &&
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl space-y-6">
        {/* Back Button */}
        <Link
          to="/fundriser/my-campaigns"
          className="inline-flex items-center gap-2 text-gray-600 font-medium px-4 py-3 border border-gray-500"
        >
          <FaArrowRight className="rotate-180" /> Back
        </Link>

        {/* Title & Category */}
        <div className="space-y-2 text-center">
          <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full">
            {campaign?.category}
          </span>
          <h1 className="text-2xl font-semibold text-orange-600">
            {campaign?.title}
          </h1>
          <p className="text-gray-500">
            Beneficiary: <span className="font-medium">{campaign?.beneficiary}</span>
          </p>
        </div>

        {/* Main Image */}
        <img
          src={`${serverURL}/uploads/${campaign?.image}`}
          alt={campaign.title}
          className="w-full rounded-lg object-cover max-h-64 mx-auto"
        />

        {/* Description */}
        <div className="text-gray-700">
          <h2 className="font-semibold text-lg mb-2">About the Campaign</h2>
          <p>{campaign?.longDescription}</p>
        </div>

        {/* Documents */}
        {campaign.documents?.length > 0 && (
          <div>
            <h3 className="font-medium mb-1">Documents</h3>
            <ul className="list-disc list-inside text-blue-600">
              {campaign.documents.map((doc, idx) => (
                <li key={idx}>
                  <a
                    href={`${serverURL}/uploads/${doc}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {doc}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Request Promotion Button */}
        <div className="text-center">
          <button className="bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-orange-700">
            Request For Promotion
          </button>
        </div>
      </div>}

      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </div>
  )
}

export default FundriserViewCampaign