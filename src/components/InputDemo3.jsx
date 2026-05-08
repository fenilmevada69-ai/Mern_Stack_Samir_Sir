import React, { useState } from "react";

function InputDemo3() {

  // Nested Array
    const countryData = [
        ["India", ["Gujarat", "Rajasthan", "Maharashtra"]],
        ["Russia", ["Moscow", "Saint Petersburg"]],
        ["China", ["Beijing", "Shanghai"]]
    ];

    const [selectedCountry, setSelectedCountry] = useState(0);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Country & State Dropdown</h1>
            <div>
                <label>Country: </label>
                {/* Country Dropdown */}
                <select value={selectedCountry} name="country" id="country" onChange={(e) => {setSelectedCountry(e.target.value)}}>
                    {
                        countryData.map((arr,index) => {
                            return <option key={index} value={index}>{arr[0]}</option>
                        })
                    }
                </select>
            </div>
            {/* State DropDown */}
            <div>
                <label>State: </label>
                <select name="state" id="state">
                    {
                        countryData[selectedCountry][1].map((val) => {
                            return <option value={val}>{val}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
}   

export default InputDemo3;