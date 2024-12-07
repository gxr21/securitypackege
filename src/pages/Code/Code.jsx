import React from 'react'
import "./Code.css";
import Card from '../../components/Card/Card';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import Title from '../../components/Title/Title';
import { useState } from 'react';
import { postData } from '../../../serverAPI/serverAPI';

const Code = () => {
  const [inputs, setInputs] = useState(['', '', '', '']); // Array to store individual input values

  const handleChange = (index, value) => {
      // Update the specific input's value
      const newInputs = [...inputs];
      newInputs[index] = value.slice(0, 1); // Ensure only one character
      setInputs(newInputs);
  };
  const code = inputs.join(''); 
  const email = "watchfor44@gmail.com"
  const handleCod = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user')); // Retrieve the user object
        const jwt = user?.token;
        const data2 = {jwt,code} ;
        await postData('/api/authentication/conformEmail', data2); 
        console.log('Response:', response);     // Log the server response
    } catch (err) {
        console.error('Login Error:', err); // Log errors
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
      <div className="col px-5 pt-5 noLeft " >
        <div style={{ width: "90%" }}>
          <Title
            text="Verify your acount"
            desc="help us to make our website more secure"
          />
          <p className="tc">Please enter the code you reseved from Email</p>
          <div className="bcode">
          <div>
            {inputs.map((input, index) => (
                <input
                    key={index}
                    type="text"
                    className="code-input"
                    maxLength="1"
                    style={{marginLeft:"10px"}}
                    value={input}
                    onChange={(e) => handleChange(index, e.target.value)}
                />
            ))}
        </div>
          </div>
          <ButtonAuth
            text="Continue"
            className="mt-5"
            onClick={handleCod}
          />
        </div>
      </div>
    </Card>
  )
}

export default Code