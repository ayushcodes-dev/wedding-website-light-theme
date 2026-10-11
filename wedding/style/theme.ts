import colors from "./colors";
import animations from "./animations";
import typography from "./typography";

export const theme = {
  colors,
  animations,
  typography,
} as const;

export { colors, animations, typography };
export default theme;
