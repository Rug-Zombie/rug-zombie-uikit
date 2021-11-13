import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 400.72 360.5" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit={10} strokeWidth="10px"
            d="M316.47,141.52A317.81,317.81,0,0,0,208.89,61.7C166.06,42.3,119.07,32.47,69.21,32.47c-6.8,0-13.68.19-20.45.55L13.44,35,39.38,59C90.25,106.16,99.2,163.8,99.2,267.47c0,42.27-18.74,108.5-44,114.66a67.35,67.35,0,0,0,84-17.3,67.39,67.39,0,0,0,105,0,67.39,67.39,0,0,0,105,0A67.33,67.33,0,0,0,409,389.57C406.3,294,373.7,206.31,316.47,141.52Z"
            transform="translate(-9.82 -30.97)" />
    </Svg>
  );
}

export default Icon;
