import { CircularProgress , TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Download from "./Download_box";
import styled from "styled-components";
import Navbar from "../Navbar";
import SelectTextFields from "./Filter";

const OuterBox = styled.main`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 0%;
  max-width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  @media (min-width: 1020px) {
    padding-left: 60px;
    padding-right: 60px;
  }

`;

const InnerBox = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin: 0 auto 0 auto;
  position: relative;
  `;

const Dbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;
  
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 100%;
  }
  
  @media(min-width: 1080px) {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
  }
  
  @media(min-width: 1429px) {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
    max-width: 100%;
  }
  


`;


const Download_Page = () => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    axios.get("https://pypbackendserver.herokuapp.com/upload/file").then((response) => {
        // console.log(response);
        return response.data;
      }).then((res) => {
        // console.log(res);
        setCardData(res);
      });
  }, []);
  // console.log(cardData);
  return (
    <>
      <Navbar/>
      <OuterBox>
        <InnerBox>
          <SelectTextFields/>
          <Dbox>
          {cardData ? (
            cardData.map((data) => <Download data={data} />)
          ) : (
            <CircularProgress />
          )}
          </Dbox>
        </InnerBox>
      </OuterBox>
    </>
  );
};

export default Download_Page;
