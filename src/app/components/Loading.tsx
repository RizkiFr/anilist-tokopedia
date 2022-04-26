/** @jsxImportSource @emotion/react */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { css, keyframes } from "@emotion/react";

type Props = {};

const Loading = (props: Props) => {
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

  return (
    <div
      css={{
        flex: 1,
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div css={{ textAlign: "center" }}>
        <FontAwesomeIcon
          icon={solid("spinner")}
          size="2x"
          css={css`
            animation: ${rotate} 1s ease infinite;
          `}
          color='gray'
        />
        <p css={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
