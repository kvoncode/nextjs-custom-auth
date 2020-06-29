import { useFormik } from "formik";
import {
  StyledInfoError,
  StyledInfo,
  StyledInput,
  StyledLabel,
  StyledSubmit,
  StyledForm,
  StyledHeader,
  StyledFormOutermost,
  StyledFormContainer,
} from "../components/StyledForm";

import Spinner from "../components/SpinnerSubmit";
import { useState } from "react";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [infotext, setInfotext] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);

      const url = "/api/register";
      const init = {
        method: "POST",
        body: JSON.stringify(values),
      };

      const res = await fetch(url, init);
      // console.log(res);

      const data = await res.json();
      // console.log("Login -> data", data);

      data.error
        ? setInfotext(<StyledInfoError>{data.response}</StyledInfoError>)
        : setInfotext(<StyledInfo>{data.response}</StyledInfo>);

      setLoading(false);
      // console.log(values);
    },
  });
  return (
    <StyledFormOutermost>
      <StyledFormContainer>
        <StyledHeader>Create new Account</StyledHeader>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledLabel>
            Name
            <StyledInput
              required
              type="text"
              name="name"
              autoComplete="username"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </StyledLabel>
          <StyledLabel>
            Email
            <StyledInput
              required
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="email"
            />
          </StyledLabel>
          <StyledLabel>
            Password
            <StyledInput
              required
              type="password"
              name="password"
              autoComplete="new-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </StyledLabel>

          <StyledSubmit type="submit">
            {loading ? <Spinner></Spinner> : "Sing up"}
          </StyledSubmit>

          {infotext}
        </StyledForm>
      </StyledFormContainer>
    </StyledFormOutermost>
  );
};

export default Registration;
