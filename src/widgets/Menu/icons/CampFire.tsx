import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 193.68 300.13" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="4px"
            d="M244.51,276.94l-28.29-8.78,28.13-8.73a16.5,16.5,0,0,0-10.22-31.38l-73.56,22.84L87,228.05a16.5,16.5,0,0,0-10.22,31.38l28.13,8.73-28.3,8.78a16.5,16.5,0,0,0,10.22,31.38l73.73-22.89,73.72,22.89a16.5,16.5,0,0,0,10.23-31.38Z"
            transform="translate(-63.73 -10.5)" />
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="4px"
            d="M133.65,221.24c0-40.52,27-79.78,27-79.78s27,39.26,27,79.78c79.6,0,75.39-79.65,56.21-120.31a13,13,0,0,0-21.66-2.81,141.17,141.17,0,0,1-34,29.06s14.59-42.87-14.38-86.78c-8.44-12.79-21.28-21.45-32.28-27a13,13,0,0,0-18.82,11.75c.76,41.52-29.28,66.19-43.83,88-27,40.52-13.51,108.06,54.73,108.06Z"
            transform="translate(-63.73 -10.5)" />
    </Svg>
  );
};

export default Icon;
