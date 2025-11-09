import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute";
import Login from "../Pages/Login";
import { useContext } from "react";
import { authContext } from "./AuthContext";
import StudentList from "../Pages/Admin/StudentList";

const AppContent = () => {
  const { setAuth, auth } = useContext(authContext);

  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("auth");
          setAuth({ ...auth, user: null });
        }} className="text-yellow-500   bg-red-500"
      >
        Logout
      </button>
      <BrowserRouter>
        <Routes>
          {/* Route công khai */}
          <Route path="/login" element={<Login />} />

          {/* Route riêng cho admin */}
          <Route path="/admin" element={<PrivateRoute role={"ADMIN"} />}>
            <Route path="students" element={<StudentList/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppContent;
