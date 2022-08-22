import React, { useState } from "react";

import { TextField, Paper, Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";

import baseApi from "../../config";
// import Swal from "sweetalert2";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
// import { DropzoneDialog } from "material-ui-dropzone";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const FormContainer = styled.form`
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  margin-top: 4rem;
`;

const FirstContainer = styled(Paper)`
  width: 34rem;
  /* height: 38rem; */
  border-radius: 19px;
  //form {
  display: flex;
  flex-direction: column;
  align-items: center;
  // }

  h1 {
    font-weight: bold;
    margin-top: 62px;
    margin-bottom: 32px;
  }
`;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const StyleName = {
  height: "42px",
  borderRadius: "5px",
  width: "22.6rem",
  paddingLeft: "15px",
  paddingTop: "8px",

  boxShadow: "0.5px 2px 9px #524f504d",

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "800",
  },
};

const BoxStyle = styled(Box)`
  display: flex;
`;

// Styling With Classes
const AutoStyle = {
  "& .MuiAutocomplete-inputRoot": {
    width: "24rem",
    height: "52px",
    borderRadius: "6px",
    paddingLeft: "15px",
    marginTop: "24px",
    marginBottom: "12px",

    boxShadow: "0.5px 2px 9px #524f504d",
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

const AutoFirstText = {
  "& .MuiAutocomplete-inputRoot": {
    width: "11.7rem",
    height: "52px",
    borderRadius: "5px",
    paddingLeft: "15px",

    boxShadow: "0.5px 2px 9px #524f504d",
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

const AutoSecondText = {
  "& .MuiAutocomplete-inputRoot": {
    width: "11.5rem",
    height: "52px",
    borderRadius: "5px",
    paddingLeft: "15px",
    marginLeft: "10px",

    boxShadow: "0.5px 2px 9px #524f504d",
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

const Buttoncss = {
  marginTop: "3rem",
  marginLeft: "19rem",
  minWidth: "86px",
  borderRadius: "12px",
  textTransform: "none",
  fontSize: "17px",
  lineHeight: "1.5",
  backgroundColor: "#2b92f8",
  marginBottom:"2rem",

  "& 	.MuiButton-text": {
    backgroundColor: "black",
    border: "2px solid red",
  },
};

//Upload File Styles ##### starts

const SecondContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* height: 38rem; */
  width: 34rem;
  border-radius: 19px;
`;
const DropzoneUpdated = styled(Dropzone)`
  height: 100vh !important;
`;
const UploadLabelComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;
const UploadIcon = styled.img`
  width: 40%;
`;
const SelectButton = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  background: #1fa3fb;
  border-radius: 13px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  margin: 1rem 0;
  padding: 0.7rem 2rem;
`;
const UploadSpan = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: #000000;
  text-align: center;
`;

// const Papercss = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexDirection: "column",
//   // marginTop: "70px",
//   height: "38rem",
//   width: "34rem",
//   borderRadius: "19px",
// };

const IconStyle = {
  fontSize: "123px",
  cursor: "pointer",
};

const ButtonStyle = {
  minWidth: "86px",
  borderRadius: "12px",
  textTransform: "none",
  fontSize: "17px",
  lineHeight: "1.5",
  backgroundColor: "#2b92f8",
  display: "flex",
  justifyContent: "center",
};

// #### ends here...

const Branch = [
  {
    key: "cse",
    label: "Department of Computer Science And Engneering",
  },
  {
    key: "age",
    label: "Department of Agricultural Engineering",
  },
  {
    key: "ece",
    label: "Department of Electronics and Communication Engineering",
  },
  {
    key: "ee",
    label: "Department of Electrical Engineering",
  },
  {
    key: "forest",
    label: "Department of Forestry",
  },
  {
    key: "civil",
    label: "Department of Civil Engineering",
  },
  {
    key: "mecs",
    label: "Department of Mechanical Engineering",
  },
];

const subjectCode = [
  {
    key: "1",
    label: "CS22101",
  },
  {
    key: "2",
    label: "ME22101",
  },
  {
    key: "3",
    label: "RE22101",
  },
  {
    key: "4",
    label: "EE22101",
  },
  {
    key: "5",
    label: "DF273401",
  },
  {
    key: "6",
    label: "HR22101",
  },
];
const semester = [
  {
    key: "s1",
    label: "First",
  },
  {
    key: "s2",
    label: "Second",
  },
];
const year = [
  {
    key: "11",
    label: "First",
  },
  {
    key: "12",
    label: "Second",
  },
  {
    key: "13",
    label: "Third",
  },
  {
    key: "14",
    label: "Fourth",
  },
  {
    key: "15",
    label: "Fifth",
  },
  {
    key: "16",
    label: "Sixth",
  },
];

function UploadPage() {
  // const getUploadParams = ({ meta }) => {
  //   return { url: "https://httpbin.org/post" };
  // };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleNewSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };
  // const initialState = {
  //   open: false,
  //   files: [],
  // };

  // const [state, setState] = useState(initialState);

  // const handleOpen = () => {
  //   setState({
  //     ...state,
  //     open: true,
  //   });
  // };

  // const handleClose = () => {
  //   setState({
  //     ...state,
  //     open: false,
  //   });
  // };

  // const handleSave = (files) => {
  //   setState({
  //     ...state,
  //     files: files,
  //     open: false,
  //   });
  // };

  // console.log(state.files);

  const DEFAULT_VALUES = {
    name: "",
    subCode: "",
    semester: "",
    year: "",
    branch: "",
    files: {
      open: false,
      file: [],
    },
  };

  const [uploadData, setuploadData] = useState(DEFAULT_VALUES);

  const handleOpen = () => {
    setuploadData({
      ...uploadData,
      open: true,
    });
  };

  const handleClose = () => {
    setuploadData({
      ...uploadData,
      open: false,
    });
  };

  const handleSave = (files) => {
    setuploadData({
      ...uploadData,
      files: files,
      open: false,
    });
  };

  const handleInputChange = (e) => {
    setuploadData({
      ...uploadData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSliderChange = (name) => (e, value) => {
    setuploadData({
      ...uploadData,
      [name]: value.label,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const res = await baseApi.post("/upload", { ...uploadData });
    console.log(uploadData);
  };
  const UploadLabel = (
    <UploadLabelComponent>
      <UploadIcon src="/images/upload-cloud.svg" />
      <SelectButton type="button">Select Document</SelectButton>
      <UploadSpan>Or drag and drop your file here.</UploadSpan>
    </UploadLabelComponent>
  );
  const InputComponnent = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const text = files.length > 0 ? 'Add more files' : 'Choose files'

    return (
      <label style={{ backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', padding: 15, borderRadius: 3 }}>
        {text}
        <input
          style={{ display: 'none' }}
          type="file"
          accept={accept}
          multiple
          onChange={e => {
            getFilesFromEvent(e).then(chosenFiles => {
              onFiles(chosenFiles)
            })
          }}
        />
      </label>
    )
  }
  return (
    // <Style>
    <FormContainer onSubmit={handleSubmit}>
      <SecondContainer elevation={10}>
        {/* <CloudUploadOutlinedIcon sx={IconStyle} /> */}
        <DropzoneUpdated
          
          inputContent={UploadLabel}
          accept="image/*,audio/*,video/*"
        />
        {/* <Button variant="contained" sx={ButtonStyle} onClick={handleOpen}>
          Select Document
        </Button> */}
      </SecondContainer>
      <FirstContainer elevation={10}>
        <h1>The Art of Sharing</h1>

        <TextField
          type="text"
          name="name"
          value={uploadData.name}
          onChange={handleInputChange}
          id="standard-basic"
          variant="standard"
          sx={StyleName}
          placeholder="Name"
          InputProps={{ disableUnderline: true }}
          elevation={5}
          required
        />

        <Box>
          <Autocomplete
            name="subCode"
            options={subjectCode}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            value={uploadData.subCode}
            onChange={handleSliderChange("subCode")}
            sx={AutoStyle}
            renderInput={(params) => (
              <TextField
                placeholder="Subject Code"
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                required
              />
            )}
          />
        </Box>

        <BoxStyle>
          <Autocomplete
            name="semester"
            value={uploadData.semester}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={handleSliderChange("semester")}
            options={semester}
            sx={AutoFirstText}
            renderInput={(params) => (
              <TextField
                // type="number"
                placeholder="Semester"
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                required
              />
            )}
          />

          <Autocomplete
            name="year"
            value={uploadData.year}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={handleSliderChange("year")}
            options={year}
            sx={AutoSecondText}
            renderInput={(params) => (
              <TextField
                // type="number"
                placeholder="Year"
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
                required
              />
            )}
          />
        </BoxStyle>

        <Autocomplete
          name="branch"
          value={uploadData.branch}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={handleSliderChange("branch")}
          disablePortal
          options={Branch}
          sx={AutoStyle}
          renderInput={(params) => (
            <TextField
              type="text"
              placeholder="Branch"
              variant="standard"
              {...params}
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />
          )}
        />

        <Button variant="contained" sx={Buttoncss} type="submit" value="Submit">
          Done
        </Button>
      </FirstContainer>
    </FormContainer>
  );
}

export default UploadPage;
