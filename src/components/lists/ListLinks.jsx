import * as React from "react";
import styled from "styled-components";
import ListCards from "./ListCards";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ListContainer = styled.div`
  background: #f7f7f7;
  width: 100%;
  border-bottom: 1px solid #c2c2c2;
`;

const Links = styled.div`
  color: black;
  background: white;
  border: 1px solid #f7f7f7;
  padding: 10px 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 500;
  &:hover {
    border-left: 1px solid#c2c2c2;
    border-right: 1px solid #c2c2c2;
    border-top: 1px solid #c2c2c2;
    border-bottom: 1px solid white !important;
    color: rgb(0, 160, 240);
    background: white;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  width: 56%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Card = styled.div`
  margin: 45px;
  @media (max-width: 800px) {
    margin: 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(5, auto);
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

const GridItems = styled.div``;

const KeyItem = styled.div`
  background: rgb(232, 245, 254);
  font-weight: 600;
  padding: 15px;
`;
const ValueItem = styled.div`
  background: rgb(247, 247, 247);
  padding: 15px;
`;

const Value = styled.div`
  background: rgb(247, 247, 247);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListLinks = () => {
  const links = [
    "List of prior Surgeries",
    "List of medical Diagnosis",
    "List of Mediatons",
    "Airway Evaluation",
    "Anesthesia Clearance and Recommendations",
  ];

  const cardLists = [
    { title: "First Surgery", desc: "Yes" },
    { title: "Family History of surgecal complications", desc: "Yes" },
    {
      title: "If Yes, Please provide more details",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facilis eius repellat, ex dignissimos pariatur, necessitatibus suscipit, distinctio facere tempora cumque voluptatibus! Sint aperiam, doloremque accusamus repellat pariatur excepturi consequatur?",
    },
  ];

  return (
    <>
      <ListContainer>
        <LinkWrapper>
          {links.map((list, id) => (
            <Links key={id}>{list}</Links>
          ))}
        </LinkWrapper>
      </ListContainer>
      <Card>
        {cardLists.map((l, id) => (
          <ListCards key={id} item={l} />
        ))}
        <div style={{ marginTop: "30px", color: "#5e5e5e" }}>
          Previous Surgeries
        </div>
        <GridContainer>
          <GridItems>
            <KeyItem>Surgery Type </KeyItem>{" "}
            <ValueItem>Shoulder recontruction</ValueItem>
          </GridItems>
          <GridItems>
            <KeyItem>Date </KeyItem>
            <ValueItem>january 2008</ValueItem>
          </GridItems>
          <GridItems>
            <KeyItem>Anesthesia Type</KeyItem>
            <ValueItem>General "breathing tube"</ValueItem>
          </GridItems>
          <GridItems>
            <KeyItem>Surgical Complications</KeyItem>
            <ValueItem>No</ValueItem>
          </GridItems>
          <GridItems>
            <KeyItem>
              Anesthesia Complications(nausea, vomiting, difficult intubation)
            </KeyItem>
            <Value>
              <div>No</div>
              <div>
                <DeleteIcon />
                <CreateIcon />
              </div>
            </Value>
          </GridItems>
        </GridContainer>
        <div>
          <Button
            style={{ marginBlock: "20px" }}
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add Surgery
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ListLinks;
