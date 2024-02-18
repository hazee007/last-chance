import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import XIcon from "@mui/icons-material/X";
import { Box, Button,Divider, Stack, styled, Typography } from "@mui/material";

const Root = styled("footer")(({ theme }) => ({
  marginTop: theme.spacing(10),
  backgroundColor: "#44a12a",
  padding: theme.spacing(3),
}));

const Container = styled("div")({
  height: 250,
  width: 800,
  borderTop: "1px solid black",
});

const LinkContainer = styled("div")({
  width: 800,
});

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <Root>
      <div>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Container>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ height: "100%" }}
            >
              <h1>Last Chance Logo</h1>

              <Box>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  spacing={2}
                  sx={{ mt: 1 }}
                >
                  <PlaceIcon />
                  <Typography variant="body2">1234 Last Chance Lane</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  spacing={2}
                  sx={{ mt: 1 }}
                >
                  <PhoneIcon />
                  <Typography variant="body2">+358 1234 1234</Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  spacing={2}
                  sx={{ mt: 1 }}
                >
                  <Typography variant="body2">Social media</Typography>
                  <Stack direction="row" alignItems={"center"} spacing={2}>
                    <FacebookIcon />
                    <InstagramIcon />
                    <XIcon />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            <Divider />
          </Container>
          <LinkContainer>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction="row">
                <Button href="/home" variant="text" color="inherit">
                  Home
                </Button>

                <Button href="/shop" variant="text" color="inherit">
                  Shop
                </Button>
              </Stack>
              <Typography variant="body2">{`© ${date} Last Chance`}</Typography>
            </Stack>
          </LinkContainer>
        </Stack>
      </div>
    </Root>
  );
}
