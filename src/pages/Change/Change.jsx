import React, { useState } from 'react';
import "./Change.css";
import Card from '../../components/Card/Card';
import InputAuth from '../../components/InputAuth/InputAuth';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import Title from '../../components/Title/Title';
import { postData } from '../../../serverAPI/serverAPI';
import { useNavigate } from 'react-router-dom';

const Change = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleChange = async () => {
    try {
      const data = { email };
      await postData('/api/authentication/resetPassword', data);
      alert("please check your email")
      // const user = JSON.parse(localStorage.getItem('user'))
      //   await postData('/api/authentication/conformEmail', user); 
      navigate('/login');
    } catch (err) {
      console.error('Error:', err); // Log errors
    }
  };

  return (
    <Card>
      {/* Left Column */}
      <div className="col blue-placement-3">
        <div className="img-cont-3">
          <img src="/imgs/pc.png" className="image-3" alt="PC Image" />
          <img src="/imgs/lock.png" className="image-3" alt="Lock Image" />
          <img src="/imgs/pass.png" className="image-3" alt="Password Image" />
          <img src="/imgs/key.png" className="image-3" alt="Key Image" />
          <img src="/imgs/true.png" className="image-3" alt="Checkmark Image" />
        </div>
      </div>
      {/* Right Column */}
      <div className="col px-5 pt-5 noLeft">
        <div style={{ width: "90%" }}>
          <Title
            text="CHANGE PASSWORD"
            desc="Change your password by code"
          />
          <div className="d-flex flex-column py-2">
            <label htmlFor="email" className="input-title-3 pb-0 pt-5">Enter your email</label>
            <InputAuth
              type="email"
              id="email"
              className="mb-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonAuth
              text="Continue"
              className="mt-5"
              onClick={handleChange} // Correct function reference
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Change;
