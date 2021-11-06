import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 72.75 18.75" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.75px" cx="9.38" cy="9.38" r="9" />
      <circle fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.75px" className="cls-1" cx="36.38" cy="9.38" r="9" />
      <circle fill="#101820" stroke="#b5bd00" strokeMiterlimit="10" strokeWidth="0.75px" className="cls-1" cx="63.38" cy="9.38" r="9" />
    </Svg>
  );
};

export default Icon;
