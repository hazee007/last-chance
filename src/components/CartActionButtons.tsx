import { Stack, Typography } from "@mui/material";
import IconContainer from "./IconContainer";
import { green, lime } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartActionButtons() {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <IconContainer color={lime}>
        <RemoveIcon fontSize="small" />
      </IconContainer>
      <Typography variant="h5" color="text.secondary" sx={{ pl: 2, pr: 2 }}>
        2
      </Typography>

      <IconContainer color={green}>
        <AddIcon fontSize="small" />
      </IconContainer>
    </Stack>
  );
}
