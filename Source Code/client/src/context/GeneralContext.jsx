import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GeneralContext = createContext();

const GeneralContextProvider = ({children}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('');

  const [ticketBookingDate, setTicketBookingDate] = useState();

  const inputs = {username, email, usertype, password};


  const navigate = useNavigate();

  const login = async () => {
  try {
    const loginInputs = { email, password };
    const res = await axios.post('http://localhost:6001/login', loginInputs);

    localStorage.setItem('userId', res.data._id);
    localStorage.setItem('userType', res.data.usertype);
    localStorage.setItem('username', res.data.username);
    localStorage.setItem('email', res.data.email);

    if (res.data.usertype === 'customer') {
      navigate('/');
    } else if (res.data.usertype === 'admin') {
      navigate('/admin');
    } else if (res.data.usertype === 'flight-operator') {
      navigate('/flight-admin');
    }

  } catch (err) {
    console.error("❌ Login failed:", err?.response?.data || err.message);
    alert("Login failed: " + (err?.response?.data?.message || "Invalid email or password"));
  }
};

  
  const register = async () =>{
    try{
        await axios.post('http://localhost:6001/register', inputs)
        .then( async (res)=>{
            localStorage.setItem('userId', res.data._id);
            localStorage.setItem('userType', res.data.usertype);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('email', res.data.email);

            if(res.data.usertype === 'customer'){
                navigate('/');
            } else if(res.data.usertype === 'admin'){
                navigate('/admin');
            } else if(res.data.usertype === 'flight-operator'){
              navigate('/flight-admin');
            }

        }).catch((err) =>{
            alert("registration failed!!");
            console.log(err);
        });
    }catch(err){
        console.log(err);
    }
  }



  const logout = async () =>{
    
    localStorage.clear();
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localStorage.removeItem(key);
      }
    }
    
    navigate('/');
  }



  return (
    <GeneralContext.Provider value={{login, register, logout, username, setUsername, email, setEmail, password, setPassword, usertype, setUsertype, ticketBookingDate, setTicketBookingDate}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider
