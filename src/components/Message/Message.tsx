import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { variant as systemVariant, space } from "styled-system";
import { WarningIcon, ErrorIcon } from "../Svg";
import { MessageProps, variants } from "./types";

const Icons = {
  warning: WarningIcon,
  danger: ErrorIcon,
};

interface ThemedMessageLabel {
  variant: MessageProps["variant"];
  theme: DefaultTheme;
}

const getThemeColor = ({ theme, variant }: ThemedMessageLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure;
    case variants.WARNING:
      return theme.colors.warning;
    default:
      return theme.colors.secondary;
  }
};

const MessageContainer = styled.div<MessageProps>`
  display: flex;
  background-color: gray;
  padding: 16px;
  border-radius: 16px;
  border: solid 1px;
  svg {
    align-self: flex-start;
  }
  ${space}
  ${systemVariant({
    variants,
  })}
`;

const Message: React.FC<MessageProps> = ({ children, variant, ...props }) => {
  const Icon = Icons[variant];
  return (
    <MessageContainer variant={variant} {...props}>
      <Icon color={getThemeColor(variant)} width="24px" mr="12px" />
      {children}
    </MessageContainer>
  );
};

export default Message;