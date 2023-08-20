import React, { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UsernameContext from '../components/UsernameContext';

const Registration = () => {

  const navigation =useNavigate();
  const { username, setUsername } = useContext(UsernameContext);

      const [name,setName]=useState();
      const [email,setEmail]=useState();
      const [password,setPassword]=useState();

      const handleSubmit=(e)=>{
        console.log("name",name);
        console.log("email",email);
        console.log("password",password);
          e.preventDefault();
          
          axios.post('http://localhost:3000/register',{name,email,password})
          .then(result => {console.log(result)
            navigation('/login')

          })
          .catch(err => console.log(err))
      }
  
  return (
   <>
   
   <div className="grid align__item">

<div className="register">

  <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom:"1rem"}} className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="blue"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>

  <h2>Sign Up</h2>

  <form onSubmit={handleSubmit} className="form">

    <div className="form__field">
      <input type="text"
       placeholder="         Enter Name"
       onChange={(e)=>setName(e.target.value)}
       
       />
    </div>
    <div className="form__field">
      <input type="email"
       placeholder="         Enter Email"
       onChange={(e)=>setEmail(e.target.value)}
       />
    </div>

    <div className="form__field">
      <input type="password" 
      placeholder="        Enter password" 
      onChange={(e)=>setPassword(e.target.value)} 
      />
    </div>

    <div className="form__field">
      <input style={{cursor:"pointer"}} type="submit" value="Sign Up" />
    </div>

  </form>

 <p>Already have an accout?  <Link to={"/login"}> <a href="#">Log in</a></Link></p>

</div>

</div>
   </>
  )
}

export default Registration