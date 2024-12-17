import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ component: Component }) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    if (!username || !password) {
      alert("User is not authenticated. Login first!");
      navigate("/");
    } else {
      setAuthenticated(true);
    }
  }, [navigate]);


  if (authenticated) {
    return <Component />;
  }

  return null;
}

export default Protected;
