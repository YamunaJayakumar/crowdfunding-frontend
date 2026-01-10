import React, { useEffect, useState } from 'react';
import AdminHeader from '../Compontents/AdminHeader';
import AdminSidebar from '../Compontents/AdminSidebar';
import { FaCross } from 'react-icons/fa';
import { CircleX, ClosedCaptionIcon } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { approveCampaignAPI, getPendingCampaignAPI } from '../../services/allAPI';
import serverURL from '../../services/serverURL';

function FundriserApproval() {
    const [campaigns,setCampaigns]=useState()
    const [selectedCampaign, setSelectedCampaign] = useState(null);
   
    useEffect(()=>{
        fetchPendingCampaign()
    },[])
    

    const fetchPendingCampaign=async()=>{
        const token=sessionStorage.getItem("token")
        const reqHeader ={
            'Authorization':`Bearer ${token}`
        }
        try{
            const result =await getPendingCampaignAPI(reqHeader)
            console.log(result.data)
            if(result.status==200){
                setCampaigns(result.data)
            }
            else{
                toast.warning("fetching campaign failed")
            }

        }catch(err){
            console.log(err)
            toast.warning("something went wrong")

        }



    }

    const apporveCamapign =async(id)=>{
        const token=sessionStorage.getItem("token")
        const reqHeader ={
            'Authorization':`Bearer ${token}`
        }
        try{
            const result=await approveCampaignAPI(id,reqHeader)
            if(result.status ==200){
                toast.success("campaign approved")
                //remove the approved campaign
                setCampaigns(prev =>
        prev.filter(campaign => campaign._id !== id)
      );
            }
            else{
                console.log(result.data)
                toast.error("approval failed")
            }
        }catch(err){
            console.log(err)
            toast.warning("something went wrong")
        }


    }

    


    return (
        <div>
            <AdminHeader />
            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <AdminSidebar />
                </div>
                <div className="col-span-4 p-6">
                    

                    {/* Campaign Cards */}
                    <div className="grid gap-4">
                        {campaigns?.length>0?
                        campaigns.map((campaign, index) =>(
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                            >
                                <div>
                                    <h3 className="font-bold text-lg">{campaign.title}</h3>
                                    <p className="text-gray-500 text-sm">{campaign.category}</p>
                                    
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-semibold">Target:</span> {campaign.goalAmount}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        <span className="font-semibold">Created On:</span> {campaign.createdAt}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setSelectedCampaign(campaign)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                                    >
                                        View
                                    </button>
                                    <button onClick={()=>apporveCamapign(campaign._id)}

                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
                                    >
                                        Approve
                                    </button>
                                </div>
                            </div>
                        )): <p>loading....</p>
                        }
                    </div>
                    {/* Modal */}
                    {selectedCampaign && (
                        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center ">
                            <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
                                <button
                                    onClick={() => setSelectedCampaign(null)}
                                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-lg font-bold "
                                >
                                    <CircleX size={26} />
                                </button>

                                <h2 className="text-2xl font-bold mb-2">{selectedCampaign.title}</h2>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Organizer:</span> {selectedCampaign.organizer}
                                </p>
                                {/* Main Image */}
                                    <img
                                        src={`${serverURL}/uploads/${selectedCampaign.image}`}
                                        alt="Campaign"
                                        className="w-100 h-50 rounded-xl  object-cover"
                                    />
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Beneficiary:</span> {selectedCampaign.beneficiary}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Category:</span> {selectedCampaign.category}
                                </p>
                                <p className="text-gray-600 mb-1">
                                    <span className="font-semibold">Target:</span> {selectedCampaign.goalAmount}
                                </p>


                                <div className="mb-4">
                                    <p className="font-semibold mb-1">Story:</p>
                                    <p className="text-gray-600">{selectedCampaign.longDescription}</p>
                                </div>

                                {selectedCampaign.documents?.length > 0 && (
                                    <div className="mb-4">
                                        <p className="font-semibold mb-1">Documents:</p>
                                        <ul className="list-disc ml-5">
                                            {selectedCampaign.documents.map((doc, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        href={`${serverURL}/uploads/${doc}`}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-blue-600 underline"
                                                    >
                                                        {doc}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer
                                        position="top-center"
                                        autoClose={3000}
                                        theme="colored"
                                      />
        </div>

    );
}

export default FundriserApproval;
