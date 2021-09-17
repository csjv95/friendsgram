import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/FadeLoader";

const LoadingSpinner = ({ loading, color }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader
        color={color}
        loading={loading}
        css={override}
        height={15}
        width={5}
        radius={2}
        margin={2}
      />
    </section>
  );
};

export default LoadingSpinner;
