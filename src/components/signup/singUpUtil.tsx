import axios from "axios";
import { endPoints } from "../../constants/endPoints";

export const signUp = async (
  email: string,
  password: string,
  username: string
) => {
  const payload = {
    email: email,
    password: password,
    username: username,
  };

  try {
    const { data } = await axios.post(endPoints.signUpURL, payload);
    const isAuthenticated = data.authenticated;
    return { isAuthenticated };
  } catch (axiosError: any) {
    console.log(axiosError);
    const errors = axiosError.response.data.data.errors;

    return { errors };
  }
};
