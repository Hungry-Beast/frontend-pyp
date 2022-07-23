import React, { useState } from "react";

import { Paper, Button } from "@mui/material";
import styled from "styled-components";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { DropzoneDialog } from "material-ui-dropzone";

// import useFileUpload from "react-use-file-upload";
// import FileUpload from "react-mui-fileuploader";
// import Files from "react-files";

// import axios from "axios";

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

const initialState = {
  open: false,
  files: [],
};

const UploadFile = () => {
  const [state, setState] = useState(initialState);

  const handleOpen = () => {
    setState({
      ...state,
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const handleSave = (files) => {
    setState({
      ...state,
      files: files,
      open: false,
    });
  };

  console.log(state.files);

  return (
    <Box>
      <Paper elevation={5} sx={PaperStyle}>
        <CloudUploadOutlinedIcon sx={IconStyle} />
        <div>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add PDF
          </Button>

          <DropzoneDialog
            open={state.open}
            onSave={handleSave}
            acceptedFiles={[]}
            showPreviews={true}
            maxFileSize={500000000}
            onClose={handleClose}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            showFileNamesInPreview={true}
            dialogTitle={"Upload File"}
            dropzoneText={"Drag and drop here"}
          />
        </div>
      </Paper>
    </Box>
  );
};

export default UploadFile;
