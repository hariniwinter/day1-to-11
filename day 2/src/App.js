import './App.css';
import { BrowserRouter ,Routes, Route, Form  } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
 import Home from './Components/Home';
 import  RegisterForm from './Components/RegisterForm';

function App() {
return (
<div className="App">
    <BrowserRouter> 
    <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/login' element ={<LoginPage/>}></Route>
        <Route path='/signup' element ={<RegisterForm/>}></Route>
    </Routes>
    </BrowserRouter>
   
    


</div>
);
}
export default App