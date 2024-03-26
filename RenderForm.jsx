import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
function RenderForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const client = new CognitoIdentityProviderClient({
        region: "ap-south-1",
      });
      const command = new SignUpCommand({
        ClientId: `1ous8gk8fuflkgrntm500jkkl5`,
        Username: userEmail,
        Password: userPassword,
        UserAttributes: [{ Name: "email", Value: userEmail }],
      });
      const data = await client.send(command);
      console.log(data);
      localStorage.setItem("email", userEmail);
      navigate("validate");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input
            type="email"
            name="email"
            required
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            value={userPassword}
            required
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default RenderForm;
