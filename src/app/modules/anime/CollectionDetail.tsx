/** @jsxImportSource @emotion/react */

import React, { useContext } from "react";
import { Anime } from "../../models/anime";
import Context from "../../state/Context";
import AnimeCard from "../../components/AnimeCard";
import { useParams } from "react-router-dom";

type Props = {};

const CollectionDetail = (props: Props) => {
  const [state] = useContext(Context.AppContext);
  const params = useParams();
  return (
    <div>
      {state?.collections
        .filter((val: Anime) =>
          val.collectionOf?.includes(params?.name as string)
        )
        ?.map((v: Anime, i: number) => {
          return <AnimeCard key={i} data={v} showDeleteButton />;
        })}
    </div>
  );
};

export default CollectionDetail;
