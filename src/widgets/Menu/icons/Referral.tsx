import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 57.27 100.53" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#101820" stroke="#b5bd00" strokeMiterlimit="10"
            d="M76.87,13.51c-2-2-8.82.05-6.67,5,1.85,4.28-1.09,5.33-1.91,5.53.15-1.69.19-2.7.19-2.7s-14.69-.91-18.38-.81c-3.7-.1-18.39.81-18.39.81s0,1.07.21,2.85c0,0-4.27-.64-2.12-5.57s-4.7-7-6.67-5-1.46,10.19.31,15.78c4.42,12,7.56,13.06,9.49,12.66a6.67,6.67,0,0,0,2.24-.78c2.18,7.06,5.71,14.08,11.39,17.4l-1.43,2s-.46.73.73,1c0,0-1.47,1.09,0,1.8,0,0,1.35.79,1.47,4.89,0,0,.78,3-4.6,7.58,0,0-5.1,5.34-2.28,7.19,0,0,.73,1.24-.74,1.32H38.28a1.47,1.47,0,0,0-.65,1.16l-.31,2.78-1.08,12.76h-.39s.35,2.55-1.86,2.55l-.65,4.64v2.25l6.2,1.58H60.65l6.21-1.58v-2.25l-.66-4.64c-2.2,0-1.85-2.55-1.85-2.55H64L62.88,88.48l-.31-2.78a1.46,1.46,0,0,0-.66-1.16H60.48c-1.47-.08-.74-1.32-.74-1.32C62.57,81.37,57.46,76,57.46,76c-5.37-4.6-4.6-7.58-4.6-7.58.12-4.1,1.47-4.89,1.47-4.89,1.47-.71,0-1.8,0-1.8,1.2-.3.74-1,.74-1l-1.44-2C59.32,55.35,62.84,48.34,65,41.28a7.82,7.82,0,0,0,2,.67c1.93.4,5.08-.69,9.5-12.67C78.33,23.7,78.84,15.54,76.87,13.51ZM32.28,39.61c-2-.77-8.84-8.89-7.88-21.88,0,0-.25-1.43,1.54-1.44.47,0,2.17.34,1.6,1.44,0,0-2.07,7.68,4.62,8.76a89,89,0,0,0,2.37,12.57A2.16,2.16,0,0,1,32.28,39.61Zm35.43-.1a2.08,2.08,0,0,1-2.07-.39,88,88,0,0,0,2.41-12.77c6.43-1.21,4.41-8.73,4.41-8.73-.57-1.09,1.12-1.44,1.6-1.44,1.79,0,1.53,1.44,1.53,1.44C76.56,30.61,69.68,38.73,67.71,39.51Z"
            transform="translate(-21.36 -12.24)" />
    </Svg>
  );
};

export default Icon;
