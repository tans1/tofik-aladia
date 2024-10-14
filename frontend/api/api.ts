export const submitEmail = async (
  email: string
): Promise<{ status: number; success: boolean; message: string }> => {
  const prevEmail = localStorage.getItem("email");

  if (prevEmail == email) {
    return {
      status: 200,
      success: true,
      message: "Email already exist!"
    };
  } else {
    return {
      status: 404,
      success: false,
      message: "Email doesn't exist!"
    };
  }
};

export const login = async (
  email: string,
  password: string
): Promise<{ status: number; success: boolean; message: string }> => {
  return {
    status: 200,
    success: true,
    message: "Login successful!"
  };
};

interface SignUpData {
  email: string;
  firstName: string;
  surName: string;
  password: string;
  confirmPassword: string;
}

export const register = async (
  data: SignUpData
): Promise<{ status: number; success: boolean; message: string }> => {
  return {
    status: 200,
    success: true,
    message: "Email submitted successfully!"
  };
};
