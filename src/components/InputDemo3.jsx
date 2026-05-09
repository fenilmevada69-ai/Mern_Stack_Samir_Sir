// import React, { useState } from "react";

// export function InputDemo3() {


//     const countryData = [
//         ["India", ["Gujarat", "Rajasthan", "Maharashtra"]],
//         ["Russia", ["Moscow", "Saint Petersburg"]],
//         ["China", ["Beijing", "Shanghai"]]
//     ];

//     const [selectedCountry, setSelectedCountry] = useState(0);

//     return (
//         <div style={{ textAlign: "center" }}>
//             <h1>Country & State Dropdown</h1>
//             <div>
//                 <label>Country: </label>
//                 {/* Country Dropdown */}
//                 <select value={countryData[selectedCountry][0]} name="country" id="country" onChange={(e) => {setSelectedCountry(e.target.value)}}>
//                     {
//                         countryData.map((arr,index) => {
//                             return <option key={index} value={index}>{arr[0]}</option>
//                         })
//                     }
//                 </select>
//             </div>
//             {/* State DropDown */}
//             <div>
//                 <label>State: </label>
//                 <select name="state" id="state">
//                     {
//                         countryData[selectedCountry][1].map((val) => {
//                             return <option value={val}>{val}</option>
//                         })
//                     }
//                 </select>
//             </div>
//         </div>
//     );
// }



import {useState} from "react";
export function InputDemo3() {

    // let name = "Shivam";
    // function changeName() {
    //     console.log(name)
    //     name = "Fenil";
    //     console.log(name)
    // }

    const [nam,setName] = useState("Shivam");
    console.log(nam);

    return (
        <div style={{textAlign:"center"}}>
            <h1>{nam}</h1>
            <button onClick={() => {setName("Fenil")}}>Click</button>
        </div>
    )
}