import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

export const TaskDemo = () => {
    const [userData, setuserData] = useState({})
    const [isClicked, setisClicked] = useState(false)

    const {register,
        handleSubmit,
    } = useForm();

    const submitHandler = (data) => {
        console.log("data..",data)
        setuserData(data)
    }
    return (
        <div style={{textAlign:"center"}}>
            <div>FormDemo1</div>
            <form onSubmit={handleSubmit(submitHandler)}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" {...register("name")}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" {...register("age")}/>
                    </div>
                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" value='male' {...register("gender")}/>
                        <label htmlFor="female">FeMale</label>
                        <input type="radio" id="female" value='female' {...register("gender")}/>
                    </div>
                    <div>
                        <select name="country" id="country" {...register("country")}>
                            <option disabled value="">Selected</option>
                            <option value="india">India</option>
                            <option value="china">China</option>
                            <option value="russia">Russia</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit Me" onClick={() => setisClicked(true)}/>
                </form>
                {
                    isClicked && <div className="props">
                        <h1>Output</h1>
                        <h1>Name = {userData.name}</h1>
                        <h1>Age = {userData.age}</h1>
                        <h1>Gender = {userData.gender}</h1>
                        <h1>Country = {userData.country}</h1>
                    </div>
                }
            </div>
    )
}