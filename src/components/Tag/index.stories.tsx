import React from "react";
import _ from "lodash";
import Box from "../Box/Box";
import Flex from "../Box/Flex";
import { CommunityIcon, RemoveIcon } from "../Svg";
import Tag from "./Tag";
import { scales, variants } from "./types";

export default {
  title: "Components/Tag",
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <Box>
      {Object.values(variants).map((variant) => {
        return (
          <Box key={variant} mb="32px ">
            <Flex alignItems="center">
              {Object.values(scales).map((scale) => {
                return (
                  <Tag scale={scale} variant={variant} mr="8px">
                    {`${_.capitalize(variant)}: ${scale.toUpperCase()}`}
                  </Tag>
                );
              })}
              <Tag variant={variant} outline mr="8px">
                {`${_.capitalize(variant)} Outline`}
              </Tag>
              <Tag variant={variant} outline startIcon={<CommunityIcon />} mr="8px">
                {`${_.capitalize(variant)} Icon Left`}
              </Tag>
              <Tag variant={variant} outline endIcon={<RemoveIcon />} mr="8px">
                {`${_.capitalize(variant)} Icon Right`}
              </Tag>
              <Tag variant={variant} outline startIcon={<CommunityIcon />} endIcon={<RemoveIcon />}>
                {`${_.capitalize(variant)} Both`}
              </Tag>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};
