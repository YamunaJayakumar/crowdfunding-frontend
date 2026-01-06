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