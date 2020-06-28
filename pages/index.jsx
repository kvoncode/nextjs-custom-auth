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

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledFormOutermost>
      <StyledFormContainer>
        <StyledHeader>Log in</StyledHeader>
        <StyledForm onSubmit={formik.handleSubmit}>
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
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </StyledLabel>
          <StyledSubmit type="submit">Log in</StyledSubmit>
        </StyledForm>
      </StyledFormContainer>
    </StyledFormOutermost>
  );
};

export default Login;
