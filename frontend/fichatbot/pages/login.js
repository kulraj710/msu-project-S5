import React from "react";
import LoginSection from "../components/Login/LoginSection";

const Login = () => {

  const [user, setUser] = React.useState(null)

  return (
    <div>
      <LoginSection user={user} setUser={setUser}/>
    </div>
  );
};

export default Login;
