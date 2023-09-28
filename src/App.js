
import Routes from './Routes';
import PaymentForm from './components/PaymentForm';
import SignIn from './components/signin';
import  { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-slate-200">
   <Routes />
   <Toaster 
   position="top-center"
   reverseOrder={false}
   />
    </div>
  );
}

export default App;
