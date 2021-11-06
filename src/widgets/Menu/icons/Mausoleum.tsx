import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect fill="none" width="100" height="100" />
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.75px"
            d="M34.17,39.26a2.57,2.57,0,0,0,0-5.13H24.08a2.57,2.57,0,0,0,0,5.13,2.47,2.47,0,0,0,.86-.15L22,76H36.28l-3-36.84A2.47,2.47,0,0,0,34.17,39.26Z" />
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.75px"
            d="M75.92,39.26a2.57,2.57,0,0,0,0-5.13H65.83a2.57,2.57,0,0,0,0,5.13,2.47,2.47,0,0,0,.86-.15L63.72,76H78l-3-36.84A2.47,2.47,0,0,0,75.92,39.26Z" />
      <polygon fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.75px"
               points="77.27 24.92 50 14.9 22.73 24.92 18.89 24.92 18.89 32.98 81.11 32.98 81.11 24.92 77.27 24.92" />
      <polygon fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.75px"
               points="86.73 81.07 86.73 77.04 13.27 77.04 13.27 81.07 11.04 81.07 11.04 85.1 88.96 85.1 88.96 81.07 86.73 81.07" />
    </Svg>
  );
};

export default Icon;
