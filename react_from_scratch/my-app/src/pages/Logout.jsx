import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import {useEffect} from "react";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out, setting token to ()");
    setToken();
    navigate("/", { replace: true });
  };

  // setTimeout(() => {
  //   handleLogout();
  // }, 3 * 1000);
  useEffect(() => {
    console.log("useEffect logout");
    handleLogout();
  }, []);
  return <>Logout Page</>;
};

export default Logout;
