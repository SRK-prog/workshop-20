import React from "react";
import styled from "styled-components";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Person1 from "../../images/person-1.jpg";
import Person2 from "../../images/person-2.jpg";
import Person3 from "../../images/person-4.jpg";
import Person4 from "../../images/person.jpg";

const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;

const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const SearchBar = styled.input`
  border: none;
  width: 93%;
  padding: 10px;
  margin: 15px 0;
  border-radius: 5px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Dot = styled.span`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  margin-right: 15px;
`;

const TitleWrapper = styled.div`
  position: relative;
`;

const SearchWrap = styled.div`
  position: relative;
`;

const Sidebar = ({ handleTogggle, click }) => {
  const PatientsData = [
    {
      Name: "Sara Smith",
      date: "Jan 9, 2020",
      Photo: Person2,
      cleared: "#3acf61",
    },
    {
      Name: "James Johnson",
      date: "No Clearance",
      Photo: Person1,
      cleared: "red",
    },
    {
      Name: "Patrice Page",
      date: "Aug 10, 2019",
      Photo: Person3,
      cleared: "#3acf61",
    },
    {
      Name: "Derek Diamon",
      date: "Nov 18, 2020",
      Photo: Person4,
      cleared: "#3acf61",
    },
  ];

  const arrowStyle = {
    position: "absolute",
    top: "0",
    color: "rgb(0, 160, 240)",
    background: "white",
    height: "20px",
    padding: "5px",
    width: "20px",
    right: "-15px",
    borderRadius: "50%",
    zIndex: "9999",
  };

  const m10 = {
    marginBottom: "15px",
  };

  return (
    <>
      <TitleWrapper>
        {click && <Title>Patients</Title>}
        <ArrowBackIosNewIcon
          onClick={() => handleTogggle()}
          style={arrowStyle}
        />
      </TitleWrapper>
      {click && (
        <SearchWrap>
          <SearchBar placeholder="Search patients" />
          <SearchIcon
            style={{
              position: "absolute",
              zIndex: "99",
              top: "20px",
              right: "7px",
              color: "#777877",
            }}
          />
        </SearchWrap>
      )}
      <List
        style={{ background: "rgb(232, 245, 254)" }}
        sx={{ width: "100%", maxWidth: 360, bgcolor: "white" }}
      >
        {PatientsData.map((item, i) => (
          <span key={i}>
            {click ? (
              <ListItem
                style={{
                  background: "white",
                  marginBottom: "15px",
                  borderRadius: "5px",
                }}
              >
                <ListItemAvatar>
                  <Avatar src={item.Photo} alt="person" />
                </ListItemAvatar>
                <ListItemText primary={item.Name} secondary={item.date} />
                <Dot style={{ background: `${item.cleared}` }}></Dot>
              </ListItem>
            ) : (
              <Avatar style={!click ? m10 : {}} src={item.Photo} alt="person" />
            )}
          </span>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
