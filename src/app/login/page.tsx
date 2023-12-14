"use client";

import { TLogin } from "@/utils/types/types";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login, getStatus } = useAuth();
  const router = useRouter();
  const handleSubmit = (values: TLogin) => {
    console.log(values, "vetal160199@gmail.com");

    login(values)
      .then((data) => {
        console.log("data", data);

        if (data === "OK") {
          // add your code for post successful login here
          getStatus();
          setTimeout(() => {
            router.push("/");
          }, 1000);
        } else console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[100vw] p-5">
      <h3 className="mb-5 text-4xl font-medium">Login</h3>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(
          values: TLogin,
          { setSubmitting }: FormikHelpers<TLogin>
        ) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="grid w-96 grid-cols-2 gap-3">
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="Enter email"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="w-fit border border-black/75 px-4 py-1"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
