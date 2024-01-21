import { Typography, styled } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Container = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: blue[200],
  borderStyle: "dashed",
  backgroundColor: theme.palette.background.paper,
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
}));

const Thumb = styled("div")(({ theme }) => ({
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
}));

const ThumbInner = styled("div")({
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
});

const Image = styled("img")({
  display: "block",
  width: "auto",
  height: "100%",
});

interface FileWithPreview extends File {
  preview: string;
}

export default function Dropzone() {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const thumbs = files.map((file) => (
    <Thumb key={file.name}>
      <ThumbInner>
        <Image
          src={file.preview}
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </ThumbInner>
    </Thumb>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <Container {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Typography variant="button">
          Drag 'n' drop product images here, or click to select files
        </Typography>
      </Container>
      <aside>{thumbs}</aside>
    </section>
  );
}
