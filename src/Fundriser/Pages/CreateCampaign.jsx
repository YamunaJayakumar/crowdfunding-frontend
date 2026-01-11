import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { createCampaignAPI, editCampaignAPI } from "../../services/allAPI";

function CreateCampaign() {
  const{id}=useParams()
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const[previewDocs,setPreviewDocs]=useState([])
  useEffect(()=>{
    if(id){
      fetchCampaign()
    }
  },[])
  
  const [campaign, setCampaign] = useState({
    title: "",
    category: "",
    location: "",
    beneficiary: "",
    shortDescription: "",
    longDescription: "",
    goalAmount: "",
    minDonation: "",
    endDate: "",
    image: null,      // first file input
    documents: [],   // second file input (multiple)
  });
  console.log(campaign);
  

  

  const fetchCampaign=async()=>{
     const token = sessionStorage.getItem("token");
    const reqHeader = {
      'Authorization': `Bearer ${token}`,
    };
      const result = await editCampaignAPI(id,reqHeader);
      if(result.status==200){
         setCampaign({
        title: result.data.title,
        category: result.data.category,
        location: result.data.location,
        beneficiary: result.data.beneficiary,
        shortDescription: result.data.shortDescription,
        longDescription: result.data.longDescription,
        goalAmount: result.data.goalAmount,
        minDonation: result.data.minDonation,
        endDate: result.data.endDate?.slice(0, 10),
        image: null,        // keep null unless user uploads new
        documents: [],     // same here
      });
    }
    else{
      console.log(result)
      toast.warning("something went wrong")
        
      

      }


  }
  

  const handleDocumentUpload=(e)=>{
    const files=Array.from(e.target.files)
    setCampaign(prev=>({
      ...prev,documents:[...prev.documents,...files]

    }))
    const filenames=files.map(file=>file.name)
    setPreviewDocs(prev=>[...prev,...filenames])

  }
  const handleImgupload=(e)=>{
    const file=e.target.files[0]//only one file
    setCampaign(prev=>({...prev,image:file}))
    

  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {title,category,location,beneficiary,shortDescription,longDescription,goalAmount,minDonation,endDate,image,documents}=campaign
    if(!title|| !category || !location || !beneficiary || !shortDescription|| !longDescription|| !goalAmount|| !minDonation  ||!endDate || !image || documents.length==0||!verified){
      toast.info("please fill the form")
     
    }
    else{
      // toast.success("api call")
      const token=sessionStorage.getItem("token")
      if(token){
        //headers
        const reqHeader={
          'Authorization':`Bearer ${token}`
        }
        //body
        const reqBody=new FormData()
        reqBody.append("title",title)
        reqBody.append("category",category)
        reqBody.append("location",location)
        reqBody.append("beneficiary", beneficiary)
        reqBody.append("shortDescription", shortDescription)
        reqBody.append("longDescription", longDescription)
        reqBody.append("goalAmount", goalAmount)
        reqBody.append("minDonation", minDonation)
        reqBody.append("endDate", endDate)
        reqBody.append("image", image)
        documents.forEach((doc)=>
        reqBody.append('documents',doc))

        
          const result =await createCampaignAPI(reqBody,reqHeader)
          if(result.status === 200){
            toast.success("campaign created successfully")
            setTimeout(()=>{
              navigate('/fundriser/my-campaigns')
              

            },1000)
          }
          else if(result.status == 401){
            toast.warning(result.response.data)
          }
          handleRestorm()
      }
      else{
        toast.error("something went wrong")
      }
    
     
    }

  }
  const handleRestorm=()=>{
    setCampaign({ title: "",
    category: "",
    location: "",
    beneficiary: "",
    shortDescription: "",
    longDescription: "",
    goalAmount: "",
    minDonation: "",
    endDate: "",
    image: null,      // first file input
    documents: [],})
    setPreviewDocs("")


  }

  return (
    <div className="min-h-screen  p-6 flex justify-center">
      <div className="w-full max-w-7xl">

        {/* HEADER */}
        <header className="mb-8  bg-linear-to-r from-orange-400 to-orange-600 rounded-2xl p-6 text-white">
          <h1 className="text-3xl font-semibold">Create New Campaign</h1>
          <p className="text-orange-100 mt-1">
            Fill out the details below to start your fundraising journey.
          </p>
        </header>

        {/* FORM */}
        <form className="space-y-8">

          {/* CAMPAIGN DETAILS */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Campaign Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
              value={campaign.title}
              onChange={e=>setCampaign({...campaign,title:e.target.value})}
                type="text"
                placeholder="Campaign Title"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <select
              value={campaign.category}
              onChange={(e)=>setCampaign({...campaign,category:e.target.value})}
               className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
                <option>Select Category</option>
                <option>Health</option>
                <option>Education</option>
                <option>Environment</option>
              </select>

              <input
              value={campaign.location}
              onChange={e=>setCampaign({...campaign,location:e.target.value})}
                type="text"
                placeholder="Location"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
              value={campaign.beneficiary}
              onChange={e=>setCampaign({...campaign,beneficiary:e.target.value})}
                type="text"
                placeholder="Beneficiary Name"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>

            <textarea
            value={campaign.shortDescription}
              onChange={e=>setCampaign({...campaign,shortDescription:e.target.value})}

              placeholder="Short description (max 150 characters)"
              className="border border-orange-500 rounded-lg px-4 py-2 w-full mt-4 focus:ring-2 focus:ring-orange-400 outline-none"
              rows="3"
            />
          </section>

          {/* FUNDING DETAILS */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Funding Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
               value={campaign.goalAmount}
              onChange={e=>setCampaign({...campaign,goalAmount:e.target.value})}

                type="number"
                placeholder="Target Amount (₹)"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
               value={campaign.endDate}
              onChange={e=>setCampaign({...campaign,endDate:e.target.value})}

                type="date"
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />

              <input
               value={campaign. minDonation}
              onChange={e=>setCampaign({...campaign, minDonation:e.target.value})}

                type="number"
                placeholder="Minimum Donation "
                className="border border-orange-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
              />
            </div>
          </section>

          {/* STORY & MEDIA */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">
              Story & Media
            </h2>

            <textarea
             value={campaign.longDescription}
              onChange={e=>setCampaign({...campaign,longDescription:e.target.value})}

              placeholder="Tell your story in detail..."
              rows="6"
              className="border border-orange-500 rounded-lg px-4 py-2 w-full mb-4 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
             <label htmlFor="imgupload" className="cursor-pointer">
                <input
                id="imgupload"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleImgupload}
                  className="border border-orange-500 rounded-lg px-4 py-2"
                />
               
             </label>
              {/* Documents Upload */}
              <input
                type="file"
                multiple                 // allow multiple selection
                onChange={handleDocumentUpload}
                className="border border-orange-500 rounded-lg px-4 py-2"
              />

              {/* Optional Preview */}
              <div className="mt-2">
                {previewDocs.map((name, index) => (
                  <p key={index} className="text-sm text-gray-600">{name}</p>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Upload  documents to build trust with donors.
            </p>
          </section>

          {/* VERIFICATION */}
          <section className="bg-white p-6 rounded-xl shadow">
            <label className="flex items-start gap-3">
              <input
              checked={verified}
              onChange={e=>setVerified(e.target.checked)}
                type="checkbox"
                className=" border border-orange-500 mt-1 accent-orange-500"
              />
              <span className="text-sm text-gray-600">
                I confirm that all the information provided is genuine and accurate.
              </span>
            </label>
          </section>

          {/* ACTION BUTTONS */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/fundriser/my-campaigns")}
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
            onClick={handleSubmit}
              className="bg-linear-to-br from-orange-400 to-orange-600 text-white px-8 py-2 rounded-lg hover:opacity-90"
            >
              Submit for Review
            </button>
          </div>

          <p className="text-sm text-gray-500 text-right">
            Campaigns go live after admin verification.
          </p>
        </form>
      </div>
      <ToastContainer
              position="top-center"
              autoClose={3000}
              theme="colored"
            />
    </div>
  );
}

export default CreateCampaign;
