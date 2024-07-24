import { useSelector } from "react-redux";

const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.role);

  return { isAuthenticated, userRole };
};

export default useAuth;
