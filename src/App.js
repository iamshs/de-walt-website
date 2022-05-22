import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Deliver from './Pages/Home/Deliver';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <div>
      <Navbar />
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/login' element={<Login />}></Route>
       <Route path='/signup' element={<SignUp />}></Route>
       <Route path='deliver/:_id' element={<RequireAuth>
           <Deliver />
       </RequireAuth>}>
       </Route>
       <Route></Route>
     </Routes>
     <ToastContainer />
     <Footer />
     
    </div>
  );
}

export default App;
