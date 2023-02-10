import { Button, TextField } from "@mui/material";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

const SignIn: NextPage = () => {
  const [userInformation, setUserInformation] = useState({ username: "", password: "" });
  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ({ target }) => {
    setUserInformation({ 
      ...userInformation, 
      [target.name]: target.value 
    })
  }
  const handleSubmit: FormEventHandler<HTMLFormElement>= (event) => {
    event.preventDefault();
    signIn("credentials", userInformation)
  }
  
  return (
    <div className="h-full w-full flex flex-col items-center p-16">
      {JSON.stringify(userInformation)}
      <form className="w-[500px] flex flex-col items-start" onSubmit={handleSubmit}>
        <p className="self-start">Sign In</p>
        <TextField
          type="text"
          name="username"
          placeholder="Username"
          className="w-full m-2"
          onChange={onChange}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          className="w-full m-2"
          onChange={onChange}
        />
        <Button type="submit" variant="contained" className="w-[200px] m-2">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
