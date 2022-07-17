import React, { useRef, useState } from "react";

import { Paper, Button, Link } from "@mui/material";
import styled from "styled-components";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import useFileUpload  from "react-use-file-upload";
import axios from "axios";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "70px",
  height: "40vw",
  width: "80vh",
  borderRadius: "30px",
};

const IconStyle = {
  fontSize: "123px",
  cursor: "pointer",
};

const ButtonStyle = {
  borderRadius: "12px",
  textTransform: "none",
  backgroundColor: "#2b92f8",

  "& 	.MuiButton-text": {
    backgroundColor: "black",
    border: "2px solid red",
  },
};

const Footer = {
  color: "#000000",
  marginTop: "10px",
  textDecoration: "none",
};

const UploadFile = () => {
  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  }

  return (
    <Box>
      <Paper elevation={5} sx={PaperStyle}>
        <CloudUploadOutlinedIcon sx={IconStyle} />
        <Button
          onClick={() => console.log("error")}
          variant="contained"
          sx={ButtonStyle}
        >
          Select Document
        </Button>

        <Link sx={Footer} href="https://google.com" target="_blank">
          Or drag and drop your file here.
        </Link>
      </Paper>
    </Box>
  );
};

export default UploadFile;
