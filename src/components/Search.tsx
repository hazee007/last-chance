import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

// Top 5 Nigerian songs on Apple Music
const top5Songs = [
  { title: "Organize" },
  { title: "Joha" },
  { title: "Terminator" },
  { title: "Dull" },
  { title: "Nzaza" },
];

export default function Search() {
  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        // calling the freeSolo prop inside the Autocomplete component
        freeSolo
        options={top5Songs.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} size="small" label="SEARCH" />
        )}
      />
    </Stack>
  );
}
