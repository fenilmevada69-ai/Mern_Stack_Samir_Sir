// import React, { useState } from "react";
// export const InputDemo2 = () => {
//   const [country, setcountry] = useState("");
//   const [gender, setgender] = useState("");
//   const [selectedDate, setselectedDate] = useState("")
//   const [result, setresult] = useState("")
//   const dateHandler = (e)=>{
//     console.log(e.target.value)
//     const value = e.target.value
//     setselectedDate(value)

//     const inputDate = new Date(value) //date object
//     const today = new Date() //today

//     //remove time
//     inputDate.setHours(0,0,0,0)
//     today.setHours(0,0,0,0)

//     const difftime = inputDate-today; //mills
//     console.log(difftime)
//     const diffDays = difftime/ (1000*60*60*24)
//     console.log(diffDays)

//     if(diffDays==0){
//       setresult("today")
//     }
//     else if(diffDays== -1){
//       setresult("yesterday")
//     }
//     else if(diffDays== 1){
//       setresult("tomorrow")
//     }
//     else if(diffDays<0){
//       setresult(`${Math.abs(diffDays)} days ago`)
//     }
//     else{
//       setresult(`${Math.abs(diffDays)} days later`)
//     }
//   }
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>INPUT DEMO 2</h1>
//       <div>
//         <select
//           onChange={(e) => {
//             setcountry(e.target.value);
//           }}
//         >
//           <option value="india">INDIA</option>
//           <option value="russia">Russia</option>
//           <option value="china">China</option>
//         </select>
//         {country}
//       </div>
//       <div>
//         <label>Gender</label>
//         <br></br>
//         MALE :
//         <input
//           type="radio"
//           value="male"
//           name="gender"
//           onChange={(e) => {
//             setgender(e.target.value);
//           }}
//         ></input>
//         FEMALE :
//         <input
//           type="radio"
//           value="female"
//           name="gender"
//           onChange={(e) => {
//             setgender(e.target.value);
//           }}
//         ></input>
//         {gender}
//       </div>
//       <div>
//         <label>SELECT DATE</label>
//         <input type="date" onChange={(e)=>{dateHandler(e)}}></input>
//         <h1>{result}</h1>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";

export const InputDemo2 = () => {
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const DateHandler = (value) =>  {
      const inputDate = new Date(value);
      const today = new Date();
      setSelectedDate(value);
      inputDate.setHours(0,0,0,0);
      today.setHours(0,0,0,0);
      const diffTime = inputDate - today;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      if(diffDays == 0) {
          setSelectedDate("Today");
      } else if(diffDays == -1) {
          setSelectedDate("Yesterday");
      } else if(diffDays == 1) {
          setSelectedDate("Tomorrow");
      } else if(diffDays < 0) {
          setSelectedDate(`${Math.abs(diffDays)} days ago`);
      } else {
          setSelectedDate(`${Math.abs(diffDays)} days later`);
      }
  }

  const CountryHandler = (e) => {
      setCountry(e.target.value);
      console.log(e.target.value);
  }
  return (
      <div style={{textAlign: "center"}}>
          <h1>INPUT DEMO 2</h1>
          <div>
              <select name="country" id="country" onChange={(e) => {CountryHandler(e)}}>
                  <option value="#" disabled selected>
                      Select Country
                  </option>
                  <option value="india">INDIA</option>
                  <option value="russia">Russia</option>
                  <option value="china">China</option>
              </select>
          </div>
          <div>
              Gender:
              <label htmlFor="male">Male</label>
              <input onChange={(e) => {setGender(e.target.value)}} value="male" type="radio" id="male" name="gender"/>
              <label htmlFor="female">Female</label>
              <input onChange={(e) => {setGender(e.target.value)}} value="female" type="radio" id="female" name="gender"/>
          </div>
          <div>
              Date:
              <input type="date" onChange={(e) => {DateHandler(e.target.value)}}/>
          </div>
          <div>
              <h1>Country: {country}</h1>
              <h1>Gender: {gender}</h1>
              <h1>SelectedDate: {selectedDate}</h1>
          </div>
      </div>
  );
};