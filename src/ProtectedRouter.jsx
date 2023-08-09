import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRouter = () => {
    const token = localStorage.getItem("Token");
    const auth ={"token":false};

    if(token !== undefined && token != null){
        auth.token=true;
    }
    else{
        auth.token=false;
    }

  return (
    auth.token ? <Outlet/> : <Navigate to ="/"/>    
  )
}

export default ProtectedRouter

