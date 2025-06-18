import { Navigate } from 'react-router-dom';


const ProtectRoute = ({children}) => {
    const protect = JSON.parse(localStorage.getItem('login'));
    if(!protect){
    return <Navigate to="/Form" />;
    }else{
      return  children
    }

}

export default ProtectRoute
