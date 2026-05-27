import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const TaskDemo = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const submitHandler = (data) => {
        console.log(data);
    }

    const validateSchema = {
        nameValidator : {
            required : {
                value: true,
                message: "pls fill text..."
            },
            minLength:{
                value:3,
                message:"min len 3"
            },
            maxLength:{
                value:10,
                message:"max len 10"
            }
        }
    }
    return (    
        <div style={{textAlign: "center"}}>
            <br/>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("name", validateSchema.nameValidator)}/><br/><br/>
                {errors.name?.message && <p>{errors.name.message}</p>}
                <input type="submit"/>
            </form>
        </div>        
    )
}