import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import FundraiserSidebar from "../components/FundriserSidebar";
import FundriserHeader from "../components/FundriserHeader";
import { MyDonationsAPI } from '../../services/allAPI';




function MyDonations() {

  const [myDonations, setMyDonations] = useState([])
  console.log(myDonations)



  


  const getMydonationHistory = async () => {
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      'Authorization': `Bearer ${token}`

    }
    try {
      const result = await MyDonationsAPI(reqHeader)
      if (result.status == 200) {
        console.log(result.data)
        setMyDonations(result.data)
      }
      else {
        toast.warning("something went wrong")
        console.log(result)

      }
    }
    catch (err) {
      console.log(err)
      toast.warning("failed")
    }


  }
useEffect(() => {
  setTimeout(()=>{
 getMydonationHistory()
  })

   
  }, [])



  return (
    <>
      <FundriserHeader />

      <div className="min-h-screen grid grid-cols-4 ">

        {/* SIDEBAR */}
        <div className="col-span-1  bg-white">
          <FundraiserSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="bg-white shadow-md rounded-lg col-span-3 my-5" style={{marginRight:"2rem"}}>
          <table className="w-full text-sm text-gray-700">
  <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
    <tr>
      <th className="px-6 py-4 text-left">Campaign</th>
      <th className="px-6 py-4 text-left">Category</th>
      <th className="px-6 py-4 text-left">Fundraiser Mail</th>
      <th className="px-6 py-4 text-left">Donated On</th>
      <th className="px-6 py-4 text-right">Amount</th>
    </tr>
  </thead>

  <tbody className="divide-y divide-gray-200">
    {myDonations.length > 0 ? (
      myDonations.map(item => (
        <tr
          key={item?._id}
          className="hover:bg-gray-50 transition"
        >
          <td className="px-6 py-4 font-medium text-gray-900">
            {item?.campaignId?.title}
          </td>

          <td className="px-6 py-4">
            {item?.campaignId?.category}
          </td>
          <td className="px-6 py-4">
            {item?.campaignId?.fundraiserMail}
          </td>

          <td className="px-6 py-4">
            {new Date(item.updatedAt).toLocaleDateString()}
          </td>

          <td className="px-6 py-4 text-right font-semibold">
            ₹{item?.amount}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td
          colSpan="4"
          className="px-6 py-10 text-center text-gray-500"
        >
          No donations found
        </td>
      </tr>
    )}
  </tbody>
</table>

        </div>



        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </div>
    </>
  )
}

export default MyDonations