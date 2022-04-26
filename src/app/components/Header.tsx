/** @jsxImportSource @emotion/react */

import React from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newLocation: any = { ...location };

  const showBackIcon = location.pathname !== "/";
  return (
    <div css={{ position: "sticky", top: 0 }}>
      <div
        css={{
          height: "5vh",
          padding: 16,
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        {showBackIcon && (
          <FontAwesomeIcon
            icon={solid("arrow-left")}
            css={{ marginRight: 12 }}
            onClick={() => navigate(-1)}
          />
        )}
        <p
          css={{
            fontSize: 18,
            fontWeight: "bolder",
            flex: 1,
          }}
        >
          {newLocation.state?.title ?? "AnimeList"}
        </p>
        {!showBackIcon && (
          <FontAwesomeIcon
            icon={solid("heart")}
            css={{ marginLeft: 12 }}
            size="2x"
            color="lightgrey"
            onClick={() =>
              navigate("/collections", { state: { title: "Collection List" } })
            }
          />
        )}
      </div>
    </div>
  );
};

export default Header;
