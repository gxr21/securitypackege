import React, { useState } from 'react';
import "./Newpassword.css";
import Card from '../../components/Card/Card';
import InputAuth from '../../components/InputAuth/InputAuth';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import Title from '../../components/Title/Title';
import { postData } from '../../../serverAPI/serverAPI';
import { useParams } from "react-router-dom";
const Newpassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useParams();
  const handlePasswordChange = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    
    try {
      const data = { token , password };
      const response = await postData('/api/authentication/setPassword', data); // Replace with your endpoint
      
    } catch (error) {
      console.error('Error changing password:', error);
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
            desc="Enter a new password"
          />
          <div className="d-flex flex-column py-2">
            <InputAuth
              label="Enter new password"
              type="password"
              id="password"
              className="mb-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <InputAuth
              label="Confirm new password"
              type="password"
              id="password-2"
              className="mb-5"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
            />
            <ButtonAuth
              text="Continue"
              className="mt-5"
              onClick={handlePasswordChange} // Trigger password validation and posting
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Newpassword;
