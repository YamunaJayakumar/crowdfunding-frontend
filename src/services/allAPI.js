import commonsAPI from "./commonsAPI.js";
import serverURL from './serverURL.js'

// -----------------unauthorised-----------------------------------------
//get all active campaigns
export const getAllActiveCampaignAPI= async (reqHeader)=>{
return await commonsAPI("GET",`${serverURL}/campaigns/acive/all`,{},reqHeader)
}
//get latest active camapigns
export const getLatestActiveCampaignAPI= async (reqHeader)=>{
return await commonsAPI("GET",`${serverURL}/campaign/latest`,{},reqHeader)
}
//get a active Campaign
export const viewActiveCampaignAPI= async (id)=>{
return await commonsAPI("GET",`${serverURL}/campaign/view/${id}`,{})
}
//make donation
export const makeDonationAPI= async (id,reqBody,reqHeader)=>{
return await commonsAPI("POST",`${serverURL}/campaign/${id}/donate`,reqBody,reqHeader)
}

//------------------------------fundraiser------------------------------------------------------------------

//register api-called bt auth when register btn clicked
export const registerAPI= async (userDetails)=>{
return await commonsAPI("POST",`${serverURL}/register`,userDetails)
}
//loginAPI-called when login btn clicked
export const loginAPI=async(userDetails)=>{
    return await commonsAPI("POST",`${serverURL}/login`,userDetails)

}
//googlelogin api-google login api :called by auth component when login using google login btn clicked
export const googleLoginAPI=async(userDetails)=>{
    return await commonsAPI("POST",`${serverURL}/google/sign-in`,userDetails)

}
//createcampaignAPI-called when submit btn clciked in createcampaign component
export const createCampaignAPI=async(reqBody,reqHeader)=>{
    return await commonsAPI("POST",`${serverURL}/fundraiser/campaign/create`,reqBody,reqHeader)

}
//view all campaign-fundraiser
export const viewAllCampaignAPI=async(reqHeader)=>{
    return await commonsAPI("GET",`${serverURL}/fundraiser/campaign/all`,{},reqHeader)

}
//view one campaign-fundraiser
export const viewOneCampaignAPI=async(id,reqHeader)=>{
     return await commonsAPI("GET",`${serverURL}/fundraiser/campaign/${id}/view`,{},reqHeader) }
//update fundraiserProfile-/fundraiser/:id/edit
export const updateFundraiserProfileAPI=async(id,reqBody,reqHeader)=>{
     return await commonsAPI("PUT",`${serverURL}/fundraiser/${id}/edit`,reqBody,reqHeader)
     }
//edit a campaign
export const editCampaignAPI=async(id,reqHeader)=>{
     return await commonsAPI("PUT",`${serverURL}/fundraiser/campaign/${id}/edit`,{},reqHeader)
     }
//delete a campaign by fundraiser
export const deleteCampaignAPI=async(id,reqHeader)=>{
     return await commonsAPI("DELETE",`${serverURL}/fundraiser/${id}`,{},reqHeader)
     }
//request withdrawal
export const requestWithdrawalAPI=async(id,reqBody,reqHeader)=>{
    return await commonsAPI("POST",`${serverURL}/withdraw/${id}/request`,reqBody,reqHeader)

}
//withdrawal status
export const WithdrawalHistoryAPI=async(id,reqHeader)=>{
    return await commonsAPI("GET",`${serverURL}/${id}/withdrawal/history`,{},reqHeader)

}
//mydonations
export const MyDonationsAPI=async(reqHeader)=>{
    return await commonsAPI("GET",`${serverURL}/donation/history`,{},reqHeader)

}
// -----------------------------------admin--------------------------------------
//admin-profile edit
export const EditAdminProfileAPI=async(reqBody,reqHeader)=>{
    return await commonsAPI("PUT",`${serverURL}/admin/profile/edit`,reqBody,reqHeader)

}
//get all campaign-admin
export const getAllCampaignAPI=async(reqHeader)=>{
    return await commonsAPI('GET', `${serverURL}/admin/campaign/all`,{},reqHeader)

}
//get all pending Campaign
export const getPendingCampaignAPI=async(reqHeader)=>{
    return await commonsAPI('GET', `${serverURL}/admin/campaign/pending`,{},reqHeader)

}
//approve campaign
export const approveCampaignAPI=async(id,reqHeader)=>{
    return await commonsAPI('PUT', `${serverURL}/admin/${id}/approve`,{},reqHeader)

}
//get donation history
export const getDonationHistoryAPI=async(reqHeader)=>{
    return await commonsAPI("GET",`${serverURL}/admin/donations/history`,{},reqHeader)

}

//get all withdrwal request
export const getallWithdrawalAPI=async(reqHeader)=>{
    return await commonsAPI("GET",`${serverURL}/admin/withdrawal/all`,{},reqHeader)

}
//approve withdrawal
export const approveWithdrwalAPI=async(id,reqBody,reqHeader)=>{
    return await commonsAPI("PUT",`${serverURL}/admin/withdrawal/${id}/approve`,reqBody,reqHeader)

}
