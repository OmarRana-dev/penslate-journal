import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication !== authStatus) {
      console.log(authentication);
      console.log(authStatus);
      console.log("authentication is failed");
      navigate(authentication ? "/login" : "/");
    } else {
      setLoader(false);
    }
  }, [authentication, authStatus, navigate]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
