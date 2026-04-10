import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetail = () => {
  var teamList = [
    {
      id: 101,
      name: "CSK",
      fullName: "Chennai Super Kings",
      captain: "Ruturaj Gaikwad",
      coach: "Stephen Fleming",
      homeGround: "M. A. Chidambaram Stadium (Chepauk)",
      city: "Chennai",
      trophies: 5,
      owner: "India Cements",
      debut: 2008,
      color: "Yellow",
    },
    {
      id: 201,
      name: "RCB",
      fullName: "Royal Challengers Bangalore",
      captain: "Faf du Plessis",
      coach: "Andy Flower",
      homeGround: "M. Chinnaswamy Stadium",
      city: "Bangalore",
      trophies: 0,
      owner: "United Spirits",
      debut: 2008,
      color: "Red & Black",
    },
    {
      id: 301,
      name: "MI",
      fullName: "Mumbai Indians",
      captain: "Hardik Pandya",
      coach: "Mark Boucher",
      homeGround: "Wankhede Stadium",
      city: "Mumbai",
      trophies: 5,
      owner: "Reliance Industries",
      debut: 2008,
      color: "Blue",
    },
    {
      id: 401,
      name: "RR",
      fullName: "Rajasthan Royals",
      captain: "Sanju Samson",
      coach: "Kumar Sangakkara",
      homeGround: "Sawai Mansingh Stadium",
      city: "Jaipur",
      trophies: 1,
      owner: "Manoj Badale",
      debut: 2008,
      color: "Pink & Blue",
    },
    {
      id: 501,
      name: "DC",
      fullName: "Delhi Capitals",
      captain: "Rishabh Pant",
      coach: "Ricky Ponting",
      homeGround: "Arun Jaitley Stadium",
      city: "Delhi",
      trophies: 0,
      owner: "JSW & GMR Group",
      debut: 2008,
      color: "Blue & Red",
    },
    {
      id: 601,
      name: "KKR",
      fullName: "Kolkata Knight Riders",
      captain: "Shreyas Iyer",
      coach: "Chandrakant Pandit",
      homeGround: "Eden Gardens",
      city: "Kolkata",
      trophies: 2,
      owner: "Shah Rukh Khan (Red Chillies)",
      debut: 2008,
      color: "Purple & Gold",
    },
    {
      id: 701,
      name: "LSG",
      fullName: "Lucknow Super Giants",
      captain: "KL Rahul",
      coach: "Justin Langer",
      homeGround: "Ekana Cricket Stadium",
      city: "Lucknow",
      trophies: 0,
      owner: "RPSG Group",
      debut: 2022,
      color: "Light Blue",
    },
    {
      id: 801,
      name: "GT",
      fullName: "Gujarat Titans",
      captain: "Shubman Gill",
      coach: "Ashish Nehra",
      homeGround: "Narendra Modi Stadium",
      city: "Ahmedabad",
      trophies: 1,
      owner: "CVC Capital Partners",
      debut: 2022,
      color: "Dark Blue",
    },
    {
      id: 901,
      name: "SRH",
      fullName: "Sunrisers Hyderabad",
      captain: "Pat Cummins",
      coach: "Daniel Vettori",
      homeGround: "Rajiv Gandhi International Stadium",
      city: "Hyderabad",
      trophies: 1,
      owner: "Sun TV Network",
      debut: 2013,
      color: "Orange",
    },
    {
      id: 1001,
      name: "PBKS",
      fullName: "Punjab Kings",
      captain: "Shikhar Dhawan",
      coach: "Trevor Bayliss",
      homeGround: "IS Bindra Stadium",
      city: "Mohali",
      trophies: 0,
      owner: "Preity Zinta & Co.",
      debut: 2008,
      color: "Red",
    },
  ];
  //fetch id from url
  const id = useParams().id;
  console.log("id..", id);

  const foundTeam = teamList.find((team)=>team.id == id)
  console.log("foundTeam",foundTeam)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>TEAM DETAIL</h1>
      <h1>TEAM NAME = {foundTeam.name}</h1>
      <h2>Full Name = {foundTeam.fullName}</h2>
      <h3>Captain = {foundTeam.captain}</h3>
      <h4>Owners = {foundTeam.owner}</h4>
      <h4>Coach = {foundTeam.coach}</h4>
      <h4>HomeGround  ={foundTeam.homeGround}</h4>
    </div>
  );
};
