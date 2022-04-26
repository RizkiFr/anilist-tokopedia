/** @jsxImportSource @emotion/react */

import React from "react";
import AppColors from "../styles/AppColors";

type Props = {
  label?: string;
  value?: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  errorText?: string
  style?: any
};

const AppInput = ({ label, value, placeholder, onChangeText, errorText, style }: Props) => {
  return (
    <div css={{margin: '0px 8px', ...style}}>
      <span
        css={{
          display: "block",
          fontSize: 14,
          marginBottom: 4,
          fontWeight: "bold",
        }}
      >
        {label}
      </span>
      <div css={{ display: "flex" }}>
        <input
          value={value}
          onChange={(v) => onChangeText(v.target.value)}
          placeholder={placeholder}
          css={{
            borderRadius: 8,
            padding: 8,
            backgroundColor: AppColors.lightgrey,
            width: "100%",
            borderWidth: 0,
          }}
        />
      </div>
        <span css={{color: AppColors.pink, fontSize: 12}}>{errorText}</span>
    </div>
  );
};

export default AppInput;
