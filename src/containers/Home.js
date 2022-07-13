import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div style={{ margin: "10px" }}>
      Welocome to Mood Meter! <br />
      Current User :{user.email}
    </div>
  );
};

export default Home;
