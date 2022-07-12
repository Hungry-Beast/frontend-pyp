import React, {useState} from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

import { RWebShare } from "react-web-share";


const DownloadBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: #F6F5F5;
  border: 1px solid #E1E1E1;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.37);
  border-radius: 1rem;
  height: 100%;
  padding: 0.5em;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  box-sizing: border-box;
  width: 91%;
  margin: 1em 1.5em ;
`;

const Tittle = styled.div`
    font-size: 75%;
`;

const Leg = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;
const PdfView = styled.img`
  display: block;
  /* vertical-align: middle; */
  height: 182px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 31px;
  margin: 2em 0 2em 0;
  cursor:pointer;
`;
const Foot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 100%; */
  align-items: center;
  /* flex-shrink: 0; */
  margin-left:1.5em ;
  margin-right:1.5em ;
`;
const DownloadIcon = styled.div`
  font-weight: 100;
  width: 30px;
  /* cursor: pointer; */
`;
const DDeleteIcon = styled.div`
  width: 78px;
`;
const Download = ({ data }) => {
  // console.log(data);
// const Tittle = styled.div`
//     font-size: 75%;
// `;

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

  return (
    <DownloadBox>
      <Head>
        <Tittle>
          <h2>SUBJECT CS22210</h2>
          <h3>Uploaded by</h3>
        </Tittle>
        <div>
          <IconButton onClick={handleClick}>
            <MoreVertIcon/>
          </IconButton>  
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem sx={{width:'6em'}}>
            report 
            {<ReportOutlinedIcon sx={{margin:'0 5px',color:'red'}}/>}
            </MenuItem>
          </Menu>
        </div>
      </Head>
      <Leg>
        <PdfView src="/images/pdf.png" alt="img"></PdfView>
        <Foot>
          <DownloadIcon>
            <a href={data.file} target="_blank">
            <DownloadForOfflineOutlinedIcon />
            </a>
          </DownloadIcon>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
          <div>
            <RWebShare
              data={{
                text: "Share via",
                url: "https://web.whatsapp.com/",
                title: "via",
              }}
              onClick={() => console.log("shared successfully!")}
            >
            <IconButton >
              <ShareIcon/>
            </IconButton>
            </RWebShare>
            </div>
        </Foot>
      </Leg>
    </DownloadBox>
  );
};

export default Download;
