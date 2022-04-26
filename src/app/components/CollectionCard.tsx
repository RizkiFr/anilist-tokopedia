/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Context from "../state/Context";
import { Anime } from "../models/anime";
import AppColors from "../styles/AppColors";

type Props = {
  name: string;
  confirmDelete: () => void;
};

const CollectionCard = ({ name, confirmDelete }: Props) => {
  const navigate = useNavigate();
  const [state] = useContext(Context.AppContext);

  const getCoverImage = () => {
    const collectionOf = state.collections.filter((v: Anime) =>
      v.collectionOf?.includes(name)
    );
    if (collectionOf?.length > 0) {
      return (
        <img
          alt={collectionOf[0].title.native}
          src={collectionOf[0].coverImage?.large}
          css={{
            width: "20vw",
            height: "20vw",
            borderRadius: 16,
            objectFit: "cover",
            marginRight: 16,
          }}
        />
      );
    } else {
      return (
        <div
          css={{
            width: "20vw",
            height: "20vw",
            borderRadius: 16,
            marginRight: 16,
            backgroundColor: AppColors.lightgrey,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <FontAwesomeIcon icon={solid("image")} color="grey" size="2x" />
        </div>
      );
    }
  };

  getCoverImage();

  return (
    <div
      css={{
        padding: 12,
        border: "1px solid",
        borderColor: "lightgrey",
        borderRadius: 8,
        margin: "8px 0px",
        display: "flex",
      }}
      onClick={() =>
        navigate(`/collections/${name}`, { state: { title: name } })
      }
    >
      {getCoverImage()}
      <span
        css={{
          display: "block",
          flex: 1,
          fontWeight: "bold",
        }}
      >
        {name}
      </span>
      <FontAwesomeIcon
        icon={solid("trash")}
        color="grey"
        size='1x'
        onClick={(e) => {
          e.stopPropagation();
          confirmDelete();
        }}
      />
    </div>
  );
};

export default CollectionCard;
