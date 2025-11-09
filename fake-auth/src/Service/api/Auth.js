import ADMIND from "../../Config/Account"
import generateResult from "../GenerateResult"

const KEY="auth"

const login=(userName,password)=>{ 
    if(ADMIND.userName===userName&&ADMIND.password===password){
        localStorage.setItem(KEY,JSON.stringify({userName:userName,password:password,role:"ADMIN"}))
        return generateResult(true,"Đăng nhập thành công")
    }else{
        return generateResult(false,"Thông tin đăng nhập không chính xác")
    }
}




export default login