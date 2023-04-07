import { supabase } from "../../api/config";
import useForm from "../../hooks/useForm";
import { signUpWithEmail, updateProfile } from "../../services/auth";

const initialState = {
  fullName: "",
  emailr: "",
  passwordr: "",
};

const Register = () => {
  const { formValues, handleInputChange, reset } = useForm(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { emailr, passwordr, fullName } = formValues;
    const data = {
      email: emailr,
      password: passwordr,
    };
    // Add user in users table
    const result = await signUpWithEmail(data);
    if (result) {
      const user = result.user.id;

      const data = {
        id: user,
        full_name: fullName,
      };
      // Add user's profile in profiles table
      await updateProfile(data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="fullName"
          value={formValues.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="email"
          name="emailr"
          value={formValues.emailr}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="passwordr"
          value={formValues.passwordr}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit"> Register</button>
    </form>
  );
};

export default Register;
