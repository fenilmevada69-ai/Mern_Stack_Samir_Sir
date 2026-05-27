import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const TaskDemo = () => {
    const {register,
        handleSubmit,
    } = useForm();

    const submitHandler = (data) => {
        console.log("data..",data)
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
                        <select name="country" id="country">
                            <option disabled value="">Selected</option>
                            <option value="india">India</option>
                            <option value="china">China</option>
                            <option value="russia">Russia</option>
                        </select>
                    </div>
                    <input type="submit" value="Submit Me"/>
                </form>
            </div>
    )
}