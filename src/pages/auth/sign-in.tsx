import { Button, TextField } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";

const SignIn: NextPage = () => {
  const [userInformation, setUserInformation] = useState({
    username: "",
    password: "",
  });
  const onChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = ({ target }) => {
    setUserInformation({
      ...userInformation,
      [target.name]: target.value,
    });
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    void signIn("credentials", { ...userInformation, callbackUrl: "/" });
  };

  return (
    <div className="flex h-full w-full flex-col items-center p-16">
      {JSON.stringify(userInformation)}
      <form
        className="flex w-[500px] flex-col items-start"
        onSubmit={handleSubmit}
      >
        <p className="self-start">Sign In</p>
        <TextField
          type="text"
          name="username"
          placeholder="Username"
          className="m-2 w-full"
          onChange={onChange}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          className="m-2 w-full"
          onChange={onChange}
        />
        <Button type="submit" variant="contained" className="m-2 w-[200px]">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async ({
  req,
  res,
}) => {
  const session = await getServerSession(req, res, {});

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default SignIn;
