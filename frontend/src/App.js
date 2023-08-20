import './App.css';
// import Login from './components/Login';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Myaccount from './components/Myaccount';
import { UsernameProvider } from '../src/components/UsernameContext';

function App() {
  return (
    <UsernameProvider>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Registration/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/myaccount/:id' element={<Myaccount/>}></Route>
</Routes>
</BrowserRouter>
</UsernameProvider>
  );
}

export default App;
