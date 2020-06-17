import { useFormik } from "formik";
import {
  StyledInput,
  StyledLabel,
  StyledSubmit,
  StyledForm,
  StyledHeader,
  StyledFormOutermost,
  StyledFormContainer,
} from "../components/StyledForm";


const Registration = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const url = "/api/register";
      const init = {
        method: "POST",
        body: JSON.stringify(values),
      };

      const res = await fetch(url, init);

      const data = await res.json();

      console.log("Login -> data", data);

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
            />
          </StyledLabel>
          <StyledLabel>
            Password
            <StyledInput
              required
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </StyledLabel>

          <StyledSubmit type="submit">Sign up</StyledSubmit>
        </StyledForm>
      </StyledFormContainer>
    </StyledFormOutermost>
  );
};

export default Registration;
