import React, { useEffect, useState } from "react";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import homeData from "../../service/routeData/homeData";

const Home = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    homeData(setUserData);
  }, []);
  
  return (
    <StMainRouterSection>
      <h1>Home</h1>
      {userData.nicname}
    </StMainRouterSection>
  );
};

export default Home;
