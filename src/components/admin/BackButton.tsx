import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Stack } from "@mui/material";

export default function BackButton() {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 3 }}
    >
      <Button
        startIcon={<ArrowBackIcon />}
        variant="outlined"
        color="primary"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      {params.uid === "new" ? (
        <Button variant="contained" color="primary">
          Save
        </Button>
      ) : (
        <Button variant="contained" color="primary">
          Update
        </Button>
      )}
    </Stack>
  );
}
