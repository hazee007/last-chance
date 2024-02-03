import {
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import BackButton from "../../components/admin/BackButton";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selector";

const Root = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export default function UserDetails() {
  const { uid = "" } = useParams();
  const user = useSelector(selectUser(uid));

  return (
    <>
      <BackButton />
      <Root>
        <Typography variant="h4" component="h1">
          User Details
        </Typography>
        <Stack
          width={"40%"}
          spacing={2}
          justifyContent={"start"}
          sx={{ mb: 3, mt: 2 }}
        >
          <TextField
            label="First Name"
            id="filled-hidden-label-normal"
            defaultValue={user?.firstName ?? user?.displayName}
            variant="filled"
            disabled
          />
          <TextField
            label="Last Name"
            id="filled-hidden-label-normal"
            defaultValue={user?.lastName ?? ""}
            variant="filled"
            disabled
          />

          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Status"
            labelPlacement="start"
            sx={{ width: "15%" }}
          />
        </Stack>
        <Stack width={"70%"} spacing={2}>
          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Purchases</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A table consisting of all the purchases made by the user will be
                displayed here.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={2}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Items in Cart</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A table consisting of all the items in the user's cart will be
                displayed here.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Root>
    </>
  );
}
