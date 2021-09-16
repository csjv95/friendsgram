import React from "react";
import { StInstagram } from "../StIcon/StIcon";

const LoadingPage = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <StInstagram width={5} height={5} color={"grey"} />
    </section>
  );
};

export default LoadingPage;
