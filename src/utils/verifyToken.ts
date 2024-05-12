import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  // if token found verify it
  if (token) {
    return jwtDecode(token);
  }

  console.log("Token not found");

  return null;
};
