import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import macbook from "../assets/images/macbook.jpg";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, lime } from "@mui/material/colors";
import IconContainer from "./IconContainer";

interface ItemProps {
  show: boolean;
}

export default function Item({ show }: ItemProps) {
  return (
    <Card elevation={3} sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="200" image={macbook} alt="Chevrolet" />
      <CardContent>
        <Typography variant="body1">MacBook</Typography>
        <Typography variant="h6" color="primary">
          ${22}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        {show ? (
          <Stack direction={"row"} alignItems={"center"}>
            <IconContainer color={lime}>
              <RemoveIcon />
            </IconContainer>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ pl: 2, pr: 2 }}
            >
              2
            </Typography>

            <IconContainer color={green}>
              <AddIcon />
            </IconContainer>
          </Stack>
        ) : (
          <Button variant="contained" size="medium">
            Add to cart
          </Button>
        )}

        <FavoriteBorderIcon />
      </CardActions>
    </Card>
  );
}
