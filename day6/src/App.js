import { BrowserRouter ,Routes, Route, Form  } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
 import Home from './Components/Home';
 import  RegisterForm from './Components/RegisterForm';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import ServicePage from './Components/ServicePage';
import Profile from './Components/profile1';
import Pricing from './Components/Pricing';
import Signuser from './Components/Signuser';

function App() {
return (
<div className="App">
     <BrowserRouter> 
    <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/login' element ={<LoginPage/>}></Route>
        <Route path='/signup' element ={<RegisterForm/>}></Route>
        <Route path='/hom' element ={<HomePage/>}></Route>
        <Route path='/con' element ={<Contact/>}></Route>
        <Route path='/out' element ={<Home/>}></Route>
        <Route path='/ser' element ={<ServicePage/>}></Route>
        <Route path='/register' element ={<RegisterForm/>}></Route>
        <Route path='/home' element ={<HomePage/>}></Route>
        <Route path='/profile1' element ={<Profile/>}></Route>
        <Route path='/p' element ={<Pricing/>}></Route>
        <Route path='/signuser' element ={<Signuser/>}></Route>
    </Routes>
    </BrowserRouter> 
   
    {/* <HomePage/> */}
</div>
);
}
export default App