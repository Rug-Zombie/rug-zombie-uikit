import { DefaultTheme } from "styled-components";
import { ButtonMenuProps } from "./types";
interface StyledButtonMenuProps extends ButtonMenuProps {
    theme: DefaultTheme;
}
declare const StyledButtonMenu: import("styled-components").StyledComponent<"div", DefaultTheme, StyledButtonMenuProps, never>;
export default StyledButtonMenu;
