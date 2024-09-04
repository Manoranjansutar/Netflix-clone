import React, { useRef, useState } from "react";
import Header from "./Header";
import banner from "./../assets/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg";
import { checkValidation } from "../utils/Validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (!message) return;
    // sign in or sign up

    if (!isSignInForm) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value, photoURL: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?t=st=1725285185~exp=1725288785~hmac=b6b303ee88f55855570b6d17ef68cf202172524badb7536c8a7477bb2f159acb&w=1060"
          }).then(() => {
            const { uid , email , displayName , photoURL} = auth.currentUser;
            dispatch(addUser({uid : user.uid , email : user.email , displayName : user.displayName , photoURL : user.photoURL}))
            //  navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("login successfully");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  
  return (
    <div>
      <div className="relative">
        <div className="absolute z-50 w-full">
          <Header page={"login"} />
        </div>
        <div className="absolute top-0 z-10 hidden image-container md:block">
          <img src={banner} alt="" className=" w-lvw h-lvh" />
          <div className="image-overlay"></div>
        </div>
        <div className="absolute z-20  text-white bg-black top-32 left-1/2 transform -translate-x-1/2 w-[450px] p-14 bg-opacity-60">
          <form
            className="flex flex-col justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-3xl font-bold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={fullName}
                type="text"
                className="mt-5 bg-transparent px-4 py-[16px] border border-gray-500"
                placeholder="Full Name"
              />
            )}
            <input
              type="text"
              ref={email}
              className="mt-5 bg-transparent px-4 py-[16px] border border-gray-500"
              placeholder="Email"
            />
            <input
              type="password"
              ref={password}
              className="mt-5 bg-transparent px-4 py-[16px] border border-gray-500"
              placeholder="Password"
            />

            <p className="mt-5 text-red-500">{errorMessage}</p>

            <button
              className="mt-5 bg-[--primary-color] text-white rounded-md px-4 py-[12px]"
              type="submit"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {isSignInForm ? (
              <p className="mt-5 text-gray-500">
                New to Netflix?{" "}
                <span
                  className="font-bold text-white hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign up now.
                </span>
              </p>
            ) : (
              <p className="mt-5 text-gray-500">
                Already have an account?{" "}
                <span
                  className="font-bold text-white hover:underline"
                  onClick={toggleSignInForm}
                >
                  Sign in now.
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
