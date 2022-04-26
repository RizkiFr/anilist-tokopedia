/** @jsxImportSource @emotion/react */

import React from "react";

type Props = {
  collectionOf: Array<string>;
};

const CollectionOf = ({ collectionOf }: Props) => {
  return (
    <div css={{ display: "inline-flex", flexWrap: "wrap", marginTop: 16 }}>
      <span css={{fontWeight: 'bold', color: 'gray', marginRight: 4}}>Collection of:</span>
      {collectionOf.map((v: string, i: number, arr: Array<string>) => {
          const isLast = i === arr.length - 1
          return(
            <span key={i.toString()} css={{color: 'gray'}}>{v}{!isLast&&`,`}&nbsp;</span>
          )
      })}
    </div>
  );
};

export default CollectionOf;
