import React from 'react';
import {useForm} from 'react-hook-form';

export const TaskDemo = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const submitHandler = (data) => {
        console.log(data);
    }
    const validations = {
        nameValidator : {
            required : {
                value : true,
                message : "pls fill this input..."
            },
            minLength : {
                value : 3,
                message : "min lenght is 3"
            },
            maxLength : {
                value : 10,
                message : "max lenght is 10"
            }
        }
    }
    return (
        <div style={{textAlign: "center"}}>
            <br />
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' {...register("name", validations.nameValidator)}/>
                    {errors.name?.message && <p style={{color:"red"}}>{errors.name.message}*</p>}
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}