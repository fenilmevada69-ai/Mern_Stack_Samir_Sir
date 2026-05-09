import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

export function FormDemo2() {
    const {register, handleSubmit} = useForm();
    const [userDate, setUserData] = useState({});
    const [isClicked, setIsClicked] = useState(false);

    const submitHandler = (data) => {
        console.log("data..", data)
        setUserData(data);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Form Demo 2</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" {...register("name")}/>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="number" id="age" {...register("age")}/>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    Male: {" "}
                    <input type="radio" id="gender" value="male" {...register("gender")}/>
                    Female: {" "}
                    <input type="radio" id="gender" value="female" {...register("gender")}/>
                </div>
                <div>
                    {/* give lable sellect country in dropdown and it should be disabled */}
                    {/* checkbox implmentation  output map*/}
                    {/* create 1 more form of this kind having 10 fileds min */}
                    <label>SELECT COUNTRY: {" "}</label>
                    <select {...register("country")}>
                        <option value="#" disabled selected>Select Country</option>
                        <option value="india">INDIA</option>
                        <option value="china">CHINA</option>
                        <option value="russia">RUS</option>
                    </select>
                </div>
                <div>
                    <input type="submit" onClick={() => {setIsClicked(true)}}/>
                </div>
            </form>
        </div>
    )
}