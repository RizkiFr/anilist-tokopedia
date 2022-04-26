/** @jsxImportSource @emotion/react */

import React from "react";
import { AnimeDetail } from "../models/anime";

type Props = {
  data: AnimeDetail;
};

const Info = ({ title, value }: any) => (
  <div
    css={{
      flex: 1,
      border: "1px solid lightgray",
      borderRadius: 16,
      margin: "0px 8px",
      textAlign: "center",
      padding: 12,
    }}
  >
    <span css={{ fontWeight: "bolder", display: "block" }}>{title}</span>
    <span css={{ color: "grey", fontSize: 14 }}>{value}</span>
  </div>
);

const AnimeInfo = ({ data }: Props) => {
  const { seasonYear, averageScore, duration } = data;
  return (
    <div css={{ display: "flex", margin: "16px 0px" }}>
      <Info title="Score" value={`${averageScore}/100`} />
      <Info title="Year" value={seasonYear} />
      <Info title="Duration" value={`${duration} minutes`} />
    </div>
  );
};

export default AnimeInfo;
