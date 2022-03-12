import styled from "styled-components";

const DataPatientCon = styled.div`
  position: relative;
  margin-top: 30px;
`;

const PatKey = styled.span`
  line-height: 25px;
  font-size: 15px;
  font-weight: bold;
`;

const PatValue = styled.span`
  line-height: 25px;
  font-size: 15px;
  font-weight: bold;
`;

const Name = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  top: -30px;
`;

const PatKeyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.Infowid};
  font-size: 15px;
  color: darkslategrey;
  line-height: 25px;
  font-weight: bolder;
`;

const Patinfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 30px;
`;

const ClearWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Clear = styled.div`
  color: darkslategrey;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 14px;
`;
const Isclear = styled.div`
  height: 85px;
  width: 85px;
  border-radius: 50%;
  background-color: #3fc930;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, auto);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (max-width: 1550px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, auto);
  }
`;
const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: right;
  @media (max-width: 1550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const GridItemw = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = () => {
  return (
    <DataPatientCon>
      <Name>Sara Smith</Name>
      <GridContainer>
        <GridItem>
          <PatKeyInfo Infowid="80px">
            <PatKey>Phone:</PatKey>
            <PatKey>Email:</PatKey>
            <PatKey>Gender:</PatKey>
            <PatKey>Age:</PatKey>
          </PatKeyInfo>
          <Patinfo>
            <PatValue>456-159-789</PatValue>
            <PatValue>sara@mail.com</PatValue>
            <PatValue>Female</PatValue>
            <PatValue>45</PatValue>
          </Patinfo>
        </GridItem>
        <GridItem>
          <PatKeyInfo Infowid="150px">
            <PatKey>Surgery Type:</PatKey>
            <PatKey>Surgery Date:</PatKey>
            <PatKey>Height(cm):</PatKey>
            <PatKey>Weight(Ib):</PatKey>
            <PatKey>BMI:</PatKey>
          </PatKeyInfo>
          <Patinfo>
            <PatValue>Rotator Cuff Repair</PatValue>
            <PatValue>15 Aug 2020</PatValue>
            <PatValue>163</PatValue>
            <PatValue>120</PatValue>
            <PatValue>19</PatValue>
          </Patinfo>
        </GridItem>
        <GridItem>
          <PatKeyInfo Infowid="200px">
            <PatKey>Anesthesiologist:</PatKey>
            <PatKey>Anesthesiologist Email:</PatKey>
            <PatKey>Anesthesiologist Phone:</PatKey>
          </PatKeyInfo>
          <Patinfo>
            <PatValue>Dr.Christina Hardaway</PatValue>
            <PatValue>Christina@mail.com</PatValue>
            <PatValue>456-184-1549</PatValue>
          </Patinfo>
        </GridItem>
        <GridItemw>
          <ClearWraper>
            <Clear>Surgery Clearance</Clear>
            <Isclear>Yes</Isclear>
          </ClearWraper>
        </GridItemw>
      </GridContainer>
    </DataPatientCon>
  );
};

export default Cards;