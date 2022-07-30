import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import styled from "@emotion/styled";

const StyleDiv = styled.div`
      display: flex; 
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      padding: 1em 0.5em;
      margin: auto;
    h1{
      font-size: 25px;
      margin: 6px;
    }
`;

const AutoStyle = {
  "& .MuiAutocomplete-inputRoot": {
    backgroundColor:"white",
    width: "14rem",
    height: '46px',
    borderRadius: "40px",
    padding: "0 15px",
    margin: "6px",
    boxShadow: '0.5px 2px 9px #524f504d',
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: 'semibold',
  },

};

const AutoFirstText = {
  "& .MuiAutocomplete-inputRoot": {
    backgroundColor:"white",
    width: "14rem",
    height: '46px',
    borderRadius: "40px",
    padding: "0 15px 0 15px",
    margin: "6px",
    boxShadow: '0.5px 2px 9px #524f504d',
  },

  "& input::placeholder": {
    fontSize: "20px",
    fontWeight: 'semibold',
  },

};

const Branch = [
  {
    label: 'Computer Science and Engineering',
  },
  {
    label: 'Agriculture Engineering',
  },
  {
    label: 'Civil Engineering',
  },
  {
    label: 'Electrical Engineering',
  },
  {

    label: 'Electronicds and Communication Engineering',
  },
  {
    label: 'Forestry',
  },
];

const year = [{label: 'Btech 1st'},{label: 'Btech 2nd'},{label: 'Btech 3rd'},{label: 'Btech 4th'}];
const sem = [{label: '1st Sem'},{label: '2nd Sem'},{label: '3rd Sem'},{label: '4th Sem'},{label: '5th Sem'}];
const sub = [{label: 'Chemistry'},{label: 'Math'},{label: 'Programming in java'},{label: 'Basic C++'}];

export default function SelectTextFields() {

  return (
    <StyleDiv>
    <h1>Sort BY:</h1>
    <Autocomplete
      disablePortal
      options={Branch}
      sx={AutoStyle}
      renderInput={(params) => (
        <TextField
          placeholder="Branch"
          variant="standard"
          {...params}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
    <Autocomplete
      disablePortal
      options={year}
      sx={AutoFirstText}
      renderInput={(params) => (
        <TextField
          placeholder="Year"
          variant="standard"
          {...params}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
    <Autocomplete
      disablePortal
      options={sem}
      sx={AutoStyle}
      renderInput={(params) => (
        <TextField
          placeholder="semester"
          variant="standard"
          {...params}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
    <Autocomplete
      disablePortal
      options={sub}
      sx={AutoStyle}
      renderInput={(params) => (
        <TextField
          placeholder="subject"
          variant="standard"
          {...params}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
        />
      )}
    />
    </StyleDiv>
  );
}
