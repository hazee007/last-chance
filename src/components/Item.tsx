import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import macbook from "../assets/images/macbook.jpg";

import CartActionButtons from "./CartActionButtons";

interface ItemProps {
  show: boolean;
}

export default function Item({ show }: ItemProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop/arabic/1");
  };

  return (
    <Card elevation={3} sx={{ maxWidth: 270 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="200"
          image={macbook}
          alt="Chevrolet"
        />
        <CardContent>
          <Typography variant="body1">MacBook</Typography>
          <Typography variant="h6" color="primary">
            ${22}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        {show ? (
          <CartActionButtons />
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
