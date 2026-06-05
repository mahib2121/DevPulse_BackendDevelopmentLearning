export const validateSignup = (data: any) => {
  const { name, email, password, role } = data;

  if (!name || !email || !password) {
    return "Name, email and password are required";
  }

  if (role && role !== "contributor" && role !== "maintainer") {
    return "Invalid role";
  }

  return null;
};

export const validateLogin = (data: any) => {
  const { email, password } = data;

  if (!email || !password) {
    return "Email and password are required";
  }

  return null;
};
