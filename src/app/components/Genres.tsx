/** @jsxImportSource @emotion/react */

import React from "react";

type Props = {
  genres: Array<string>;
};

const Genres = ({ genres }: Props) => {
  return (
    <div css={{ display: "inline-flex", flexWrap: "wrap" }}>
      {genres.map((v: string, i: number, arr: Array<string>) => {
        const isLast = i === arr.length - 1;
        return (
          <span key={i.toString()} css={{ fontSize: 14, color: "gray" }}>
            {v}
            {!isLast && `,`}&nbsp;
          </span>
        );
      })}
    </div>
  );
};

export default Genres;
