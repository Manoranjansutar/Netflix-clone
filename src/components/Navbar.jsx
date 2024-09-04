import React, { useEffect } from "react";
import avatar from "./../assets/avatar1.png";
import logo from "./../assets/netflix-logo.png";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout successfully");
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute z-10 flex items-center justify-between w-full px-16 py-3">
      <img src={logo} alt="" className="w-32" />
      <img src={user.photoURL} alt="" className="w-8" onClick={handleSignout} />
    </div>
  );
};

export default Navbar;
