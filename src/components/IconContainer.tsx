import { ReactNode } from "react";
import { Paper, styled } from "@mui/material";

interface IconContainerProps {
  color: { [key: string]: string };
  children: ReactNode;
}

const Root = styled(Paper)({
  "&:hover": {
    cursor: "pointer",
  },
});

export default function IconContainer({ color, children }: IconContainerProps) {
  return (
    <Root elevation={1} sx={{ backgroundColor: color[500], p: 0.5 }}>
      {children}
    </Root>
  );
}
