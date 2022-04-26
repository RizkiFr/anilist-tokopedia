/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

type Props = {
  pagination?: Array<number | string>;
  currentPage: number
  onClick: (page: number) => void;
};

const Pagination = ({ pagination,currentPage, onClick }: Props) => {
  return (
    <div css={{ display: "flex", justifyContent: "space-around", margin: 16 }}>
      {pagination?.map((v: string | number, i: number) => {
      const isActive = currentPage === v
        return (
          <div
            key={i.toString()}
            css={{
              padding: '8px 12px',
              borderRadius: 12,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              ...isActive && {
                backgroundColor: AppColors.pink,
              }
            }}
            onClick={() => {
              if (v !== "...") onClick(v as number);
            }}
          >
            <span css={{color: isActive? 'white' : AppColors.pink, fontWeight: 'bold'}}>{v}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
