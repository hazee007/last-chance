import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Stack } from "@mui/material";
import { CategoryData, ItemWithFiles } from "../../types";
import { handleAddClick, handleUpdateClick } from "./util";

type ActionButtonsProps = {
  path?: string;
  data?: CategoryData | ItemWithFiles;
  id?: string;
};

export default function ActionButtons({ path, data, id }: ActionButtonsProps) {
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddClick({ path, data, navigate })}
        >
          Save
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleUpdateClick({ path, data, navigate, id })}
        >
          Update
        </Button>
      )}
    </Stack>
  );
}
