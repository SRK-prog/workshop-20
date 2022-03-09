import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UserImg from "../../images/person-2.jpg";

const CardContainer = styled.div`
  background: #f7f7f7;
  padding: 5px 40px 60px 40px;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: 800px;
`;

const Time = styled.div`
  gap: 5px;
  align-items: center;
  display: flex;
`;

const PatientDetailsCard = styled.div`
  display: flex;
  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }
`;

const PatientProfile = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 15px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 20px;
  margin-left: 35px;
  margin-top: 15px;
  font-weight: bold;
`;

const GridContainer = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(4, auto);
  margin-left: 35px;
  gap: 30px;
  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 1300px) {
    grid-template-columns: auto;
  }
`;

const GridItems = styled.div`
  line-height: 25px;
`;

const GridItem = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

const KeyItem = styled.div`
  font-weight: 500;
  color: #545454;
`;
const ValueItem = styled.div`
  font-weight: 600;
  color: #121212;
`;

const GridItemLast = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Clearance = styled.div`
  color: #545454;
  font-weight: 500;
`;

const IsClearance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background-color: rgb(78, 199, 74);
  border-radius: 50%;
  margin-top: 20px;
  font-weight: 500;
  color: white;
  font-size: 20px;
`;

const Card = () => {
  return (
    <CardContainer>
      <TitleBar>
        <Title>Patient Information</Title>
        <Time>
          <p style={{ color: "#626363", fontSize: "14px" }}>Last seen:</p>
          10:25 AM, today
          <MoreHorizIcon />
        </Time>
      </TitleBar>
      <PatientDetailsCard>
        <PatientProfile src={UserImg} alt="user" />
        <div>
          <Name>Sara Smith</Name>
          <GridContainer>
            <GridItems>
              <GridItem>
                <KeyItem>Phone: </KeyItem>
                <ValueItem>753-163-789</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Email: </KeyItem>
                <ValueItem>sarasmith@gmail.com</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Gender: </KeyItem>
                <ValueItem>Female</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Age: </KeyItem> <ValueItem>45</ValueItem>
              </GridItem>
            </GridItems>
            <GridItems>
              <GridItem>
                <KeyItem>Surgery Type: </KeyItem>
                <ValueItem>Rotator Cuff Repair</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Surgery Date: </KeyItem>
                <ValueItem>15 Aug 2020</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Height(cm): </KeyItem>
                <ValueItem>163</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Weight(Ib): </KeyItem>
                <ValueItem>110</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>BMI: </KeyItem>
                <ValueItem>19</ValueItem>
              </GridItem>
            </GridItems>
            <GridItems>
              <GridItem>
                <KeyItem>Anestesiologist: </KeyItem>
                <ValueItem>Dr.Christina Hardaway</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Anestesiologist Phone: </KeyItem>
                <ValueItem>301-456-789</ValueItem>
              </GridItem>
              <GridItem>
                <KeyItem>Anestesiologist Email: </KeyItem>
                <ValueItem>christinahardaway@gmail.com</ValueItem>
              </GridItem>
            </GridItems>
            <GridItemLast>
              <Clearance>Surgeray Clearance</Clearance>
              <IsClearance>Yes</IsClearance>
            </GridItemLast>
          </GridContainer>
        </div>
      </PatientDetailsCard>
    </CardContainer>
  );
};

export default Card;
