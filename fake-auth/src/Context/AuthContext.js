const { createContext, useState, useEffect } = require("react");
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    status: "handling",
    user: null,
  });

  useEffect(() => {
    let data = localStorage.getItem("auth");
    setTimeout(() => {
      setAuth({
        status: "handled",
        user: JSON.parse(data),
      });
    }, 500);
  }, []);

  return (
    <>
      <authContext.Provider value={{ setAuth, auth }}>
        {children}
      </authContext.Provider>
    </>
  );
};
export default AuthProvider;
