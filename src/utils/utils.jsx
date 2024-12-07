import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const user = JSON.parse(localStorage.getItem('user')); // Parse the stored user object
    return user && user.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
