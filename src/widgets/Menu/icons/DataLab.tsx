import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25.52 36.38" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.5px"
            d="M30.21,29.57,23.27,17.09l.05-5.75h.95a1,1,0,0,0,0-2h-12a1,1,0,0,0,0,2h1l0,5.75L6.33,29.57a4.57,4.57,0,0,0,4,6.77h15.9a4.56,4.56,0,0,0,4.56-4.56A4.49,4.49,0,0,0,30.21,29.57ZM15.14,17.83a1,1,0,0,0,.13-.5l0-6h6.1l-.05,6a1.06,1.06,0,0,0,.13.5L25,24.26a22.6,22.6,0,0,1-5.94-1,25.89,25.89,0,0,0-6.37-1Z"
            transform="translate(-5.51 -0.22)" />
      <circle fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.25px" cx="9.76" cy="4.13" r="2" />
      <circle fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.25px" cx="16.26" cy="5.63" r="1.5" />
      <circle fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.25px" cx="14.76" cy="1.13" r="1" />
    </Svg>
  );
};

export default Icon;
