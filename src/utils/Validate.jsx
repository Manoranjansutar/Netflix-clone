export const checkValidation = (email,password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    if(!isEmailValid)  return "Please Enter Valid Email Address";
    if(!isPasswordValid)  return "Please Enter Valid Password";
    return null;
} 