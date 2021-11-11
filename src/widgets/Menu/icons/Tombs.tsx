import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26.25 28.25" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.6px"
            d="M28,28H26V17.4a2,2,0,0,0-2-2h-.77A7.31,7.31,0,0,0,17,9.18V6h1a1,1,0,0,0,0-2H17V3a1,1,0,0,0-2,0V4H14a1,1,0,0,0,0,2h1V9.18A7.31,7.31,0,0,0,8.77,15.4H8a2,2,0,0,0-2,2V28H4a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"
            transform="translate(-2.88 -1.88)" />
    </Svg>
  );
};

export default Icon;
