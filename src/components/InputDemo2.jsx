import React, { useState } from "react";

export const InputDemo2 = () => {
  const [country, setcountry] = useState("");
  const [gender, setgender] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <h1>INPUT DEMO 2</h1>
      <div>
        <select
          onChange={(e) => {
            setcountry(e.target.value);
          }}
        >
          <option value="india">INDIA</option>
          <option value="russia">Russia</option>
          <option value="china">China</option>
        </select>
        {country}
      </div>
      <div>
        <label>Gender</label>
        <br></br>
        MALE :
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        ></input>
        FEMALE :
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={(e) => {
            setgender(e.target.value);
          }}
        ></input>
        {gender}
      </div>
    </div>
  );
};
