import React, { useState } from "react";

import { Paper, Button,} from "@mui/material";
// import { Paper } from "@mui/material";
import styled from "styled-components";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { DropzoneDialog } from "material-ui-dropzone";

// import useFileUpload from "react-use-file-upload";



// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";

// import axios from "axios";

// import FileUpload from "react-mui-fileuploader";
// import Files from "react-files";

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

// const ButtonStyle = {
//   borderRadius: "12px",
//   textTransform: "none",
//   backgroundColor: "#2b92f8",
//   color: "white",

//   "& 	.MuiButton-text": {
//     backgroundColor: "black",
//     border: "2px solid red",
//   },
// };

// const DropBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* color: white; */
//   /* background-color: black; */
//   border-radius: 10px;
// `;

// const Footer = {
//   color: "#000000",
//   marginTop: "10px",
//   textDecoration: "none",
//   cursor: "pointer",
// };

const initialState = {
  open: false,
  files: []
}

const UploadFile = () => {

  const [state, setState] = useState(initialState);

  const handleOpen = () => {
    setState({
      ...state,
      open:true
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false
    });
  }

  const handleSave = (files) => {
    setState({
      ...state,
      files: files,
      open: false
    });
  };

  console.log(state.files);

  return (
    <Box>
      <Paper elevation={5} sx={PaperStyle}>
        <CloudUploadOutlinedIcon sx={IconStyle} />
      <div>
        
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            >Add PDF</Button>

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
