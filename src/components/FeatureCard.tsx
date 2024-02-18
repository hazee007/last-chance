import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface FeatureCardProps {
  name: string;
  description: string;
  image: string;
}

export default function FeatureCard({
  name,
  description,
  image,
}: FeatureCardProps) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={`${name} image`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" color="primary" variant="contained">
          {name}
        </Button>
      </CardActions>
    </Card>
  );
}
