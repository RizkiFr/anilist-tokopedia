/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

type Props = {
  title: string;
  onClick: () => void;
  style?: any
};

const AppButton = ({ title, onClick, style }: Props) => {
  return (
      <button
        onClick={onClick}
        css={{
          padding: 8,
          borderRadius: 8,
          backgroundColor: AppColors.pink,
          borderWidth: 0,
          alignItems: 'center',
          margin: '8px 0px',
          ...style
        }}
      >
        <span css={{color: 'white', fontWeight: 'bold'}}>{title}</span>
      </button>
  );
};

export default AppButton;
