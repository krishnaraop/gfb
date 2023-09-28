import {Navigate,useRoutes} from 'react-router-dom'
import HomePage from './components/HomePage';
import SignIn from './components/signin';
import PaymentForm from './components/PaymentForm';

const allRoutes = () => {
 const token = localStorage.getItem("isAuth") || false;
 console.log(localStorage.getItem("isAuth"),"8")
 const publicRoutes = [
    {
        path:"/",
        exact:true,
        element : <HomePage />
    }
 ];
 const privateRoutes = [
    {
        path:"/dashboard",
        exact:true,
        element : token ? <PaymentForm /> : <Navigate to={'/'} />
    }
 ];
 return [...publicRoutes, ...privateRoutes]
}

export default function Routes(){
    const appRoutes = allRoutes()
    return useRoutes(appRoutes)
}