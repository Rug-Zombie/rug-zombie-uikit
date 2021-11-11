import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 355 307" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="10px" d="M364.75,177.57h0L203.36,36.74h0a16,16,0,0,0-22.72,0h0L19.25,177.57h0A8,8,0,0,0,24,192H64V320a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V224h64v96a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V192h40a8,8,0,0,0,4.75-14.43Z" transform="translate(-14.5 -30.5)"/>
    </Svg>
  );
};

export default Icon;
