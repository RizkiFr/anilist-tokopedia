/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anime } from "../models/anime";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate, useParams } from "react-router-dom";
import { removeFromCollection, updateToCollection } from "../state/actions";
import Context from "../state/Context";

const WIDTH = window.innerWidth < 480?window.innerWidth : 480;

type Props = {
  data: Anime;
  showDeleteButton?: boolean;
};

const AnimeCard = ({ data, showDeleteButton }: Props) => {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(Context.AppContext);
  const params = useParams();

  const onDelete=()=>{
    if(window.confirm(`Are you sure want to delete ${data.title.english??data.title.english}?`)){
      if(data.collectionOf?.length===1){
        dispatch(removeFromCollection(data.id))
      }else{
        const updatetedData = state.collections.map((v: Anime) => {
          if (v.id === data.id) {
            const collectionOf = data?.collectionOf?.filter((v: string)=> v!==params.name)
            return { ...data, collectionOf };
          } else {
            return v;
          }
        });
        dispatch(updateToCollection(updatetedData));
      }
    }
  }

  return (
    <div
      css={{
        margin: 16,
      }}
      onClick={() => navigate(`/anime/${data.id}`, {state: {title: 'Detail Anime'}})}
    >
      <div>
        <img
          alt={data.title.native}
          src={data.coverImage?.large}
          css={{
            width: "100%",
            height: WIDTH / 2,
            borderRadius: 16,
            objectFit: "cover",
          }}
        />
        <span></span>
      </div>
      <div
        css={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
          marginBottom: 24,
        }}
      >
        <div>
          <span css={{ display: "block", fontWeight: "bold" }}>
            {data.title.english ?? data.title.native}
          </span>
          <span css={{ fontSize: 12, color: "gray" }}>
            {data.duration} minutes
          </span>
        </div>
        {showDeleteButton && (
          <FontAwesomeIcon
            icon={solid('trash')}
            color={"lightgray"}
            size="2x"
            onClick={(e) => {
              e.stopPropagation();
              onDelete()
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AnimeCard;
