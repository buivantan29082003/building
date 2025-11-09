// import { useContext } from "react"
// import { authContext } from "../Context/AuthContext"
// import { Navigate, Outlet } from "react-router-dom"

import { useContext } from "react"
import { authContext } from "../Context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

// const PrivateRoute=({role})=>{
//     const {auth}=useContext(authContext)
//     if(auth.status==="handling"){
//         return <p> Đang xác thực, vui lòng đợi</p>
//     }else if(auth.user!=null&& auth.role===role){
//         return <Outlet/>
//     }else{
//         return <Navigate to={"/login"}/>
//     }
// }

// export default PrivateRoute

const PrivateRoute=({role})=>{
    const {auth,setAuth}=useContext(authContext)
    if(auth.status==="handling"){
        return <p>Đang loading</p>
    }else if(auth.user!=null&&auth.user.role===role){
        return <Outlet/>
    }else{
        return <Navigate to={"/login"}/>
    }

}
export default PrivateRoute