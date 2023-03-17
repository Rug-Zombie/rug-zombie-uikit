import React, { PropsWithChildren } from "react";
import { scales, TagProps } from "./types";
import { StyledTag } from "./StyledTag";
const Tag: React.FC<PropsWithChildren<TagProps>> = ({ startIcon, endIcon, children, ...props }) => (
  <StyledTag {...props}>
    {/* @ts-ignore */}
    {React.isValidElement(startIcon) && React.cloneElement(startIcon, { mr: "0.5em", })}
    {children}
    {/* @ts-ignore */}
    {React.isValidElement(endIcon) && React.cloneElement(endIcon, { ml: "0.5em", })}
  </StyledTag>
);

Tag.defaultProps = {
  variant: "primary",
  scale: scales.MD,
  outline: false,
};

export default Tag;
