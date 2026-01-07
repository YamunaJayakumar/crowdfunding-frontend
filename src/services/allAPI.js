import commonsAPI from "./commonsAPI.js";
import serverURL from './serverURL.js'

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
    return await commonsAPI("POST",`${serverURL}/fundriser/campaign/create`,reqBody,reqHeader)

}