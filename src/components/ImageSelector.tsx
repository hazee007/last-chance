import { useState } from "react";
import { Box, Stack, styled } from "@mui/material";

const ImageContainer = styled("div")({
  width: "100%",
  height: "100%",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 5,
});

const PreviewContainer = styled("div")({
  width: "15%",
  height: "15%",
  "&:hover": {
    cursor: "pointer",
  },
});

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
];

export default function ImageSelector() {
  const [image, setImage] = useState(images[0]);

  return (
    <Box>
      <ImageContainer>
        <StyledImage src={image} alt={"macbook"} />
      </ImageContainer>
      <Stack direction="row" spacing={1}>
        {images.map((image, index) => (
          <PreviewContainer key={index} onClick={() => setImage(image)}>
            <StyledImage src={image} alt={`preview ${index}`} />
          </PreviewContainer>
        ))}
      </Stack>
    </Box>
  );
}
