import { useContext, useState } from "react";
import { authContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import login from "../Service/api/Auth";

const Login = () => {
  const { setAuth, auth } = useContext(authContext);
  const navigate=useNavigate()
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const signIn = () => {
    let res = login(user.userName, user.password);
    if (res.isFinish === true) { 
      setAuth({...auth,user:{...user,"role":"ADMIN"}})
      navigate("/admin/students")
    } else {
      alert(res.message);
    }
  };

  return (
    <>
      <div class="flex min-h-full flex-col  justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full  sm:max-w-sm"> 
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight  ">
            ĐĂNG NHẬP
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-md p-2">
          <div  class="space-y-6">
            <div >
              <label
                for="email"
                class="block text-sm/6 font-medium  "
              >
                Tên đăng nhập
              </label>
              <div class="mt-2">
                <input
                    onChange={(e)=>setUser({...user,userName:e.target.value})}
                   value={user.userName}
                  class="block w-full border rounded-md bg-white/5 px-3 py-1.5 text-base   outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium "
                >
                  Mật khẩu
                </label> 
              </div>
              <div class="mt-2">
                <input
                  onChange={(e)=>setUser({...user,password:e.target.value})}
                  value={user.password}
                  type="password" 
                  class="block w-full border rounded-md bg-white/5 px-3 py-1.5 text-base   outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={signIn}
                type="button"
                class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Đăng nhập
              </button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Login;
