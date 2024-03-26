import React, { useState } from "react";
import {
  ConfirmSignUpCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
function ValidateUser() {
  const [validationCode, setValidationCode] = useState("");
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const userEmail = localStorage.getItem("email");
      const client = new CognitoIdentityProviderClient({
        region: "ap-south-1",
      });
      const command = new ConfirmSignUpCommand({
        ClientId: `1ous8gk8fuflkgrntm500jkkl5`,
        Username: userEmail,
        ConfirmationCode: validationCode,
      });
      const data = await client.send(command);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Verification Code </label>
      <input
        type="number"
        name="verificationCode"
        required
        value={validationCode}
        onChange={(e) => {
          console.log(e.target.value);
          setValidationCode(e.target.value);
        }}
      />
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  );
}

export default ValidateUser;
