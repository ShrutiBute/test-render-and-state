import React from "react";
import './header.css';
import { Link } from "react-router-dom"
import { useState } from 'react';

  function Header() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
   setEmail(e.target.value);
    console.log("email==",e.target.value);
  };

  return (
  <>
    <div className="header">
      <div className="container">
        <div>
          <Link to="/Product"><button className="render">data rendering</button></Link>
        </div>
        <div className="text1">{email}</div>
      </div>
     
    </div>
    <div className="box">
      <div className="box2">
       
        <div> <input type="email" placeholder="email id" value={email} onChange={handleChange} maxLength={20} /></div><br />
        <div><input type="password" placeholder="password" /></div><br />

        <button className="login-button" type="submit" onClick={email} >login</button>
      </div>
    </div>
  </>
  );
}

export default Header;