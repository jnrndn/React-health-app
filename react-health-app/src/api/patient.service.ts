import Axios, { AxiosResponse, AxiosError } from "axios";
import { IRegisterUser } from "../components/register/register";

export const registerUser = (userToRegister: IRegisterUser) => {
  const registerEndpoint = "/patient";
  const url = `${process.env.REACT_APP_BASE_API_URL}${registerEndpoint}`;
  Axios.post(url, userToRegister)
    .then((response: AxiosResponse) => response.data)
    .catch((error: AxiosError) => alert(error.message));
};
