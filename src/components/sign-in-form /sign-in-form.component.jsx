import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import {useDispatch} from "react-redux";
import {googleSignInStart,emailSignInStart} from '../../store/user/user.action'

import {SignInContainer} from "./sign-in-form.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email,password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Email and password do not match");
          break;
        case "auth/user-not-found":
          alert("There is no user with that email");
          break;
        default:
          console.log(error);
      }

      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };
  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
         <div>Test: username: mike@gmail.com | pw: 123456</div>
        <br/>
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
