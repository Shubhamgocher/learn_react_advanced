import React from "react";
import { useDispatch } from "react-redux";
import { logout as userLogout } from "../../store/authSlice";
import authService from "../../appwrite/authService";

function LogoutBtn() {
  const dispatch=useDispatch();
  async function handleClick() {
    try {
         const res=await authService.logout();
         if(res){
          dispatch(userLogout());
         }
         
    } catch (error) {
      console.log("Error",error);
    }
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-green-400 text-black p-1 font-semibold text-2xl  rounded-xl hover:bg-green-300 focus:border border-black/40 "
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
