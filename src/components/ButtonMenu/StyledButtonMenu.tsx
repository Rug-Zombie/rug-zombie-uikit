import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { variants } from "../Button/types";

interface StyledButtonMenuProps extends ButtonMenuProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const getBorderColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "inputSecondary" : "disabled"];
};

const StyledButtonMenu = styled.div<StyledButtonMenuProps>`
  background-color: ${getBackgroundColor};
  border-radius: 16px;
  display: inline-flex;
  border: 1px solid ${getBorderColor};
  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
  ${space}
`;

export default StyledButtonMenu;
