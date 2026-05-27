import {useForm} from 'react-hook-form';
import React from 'react';

export const FormDemo4 = () => {
    const rfcodelist = ["insta", "facebook", "justdial", "new paper"];
    const {register, handleSubmit, formState: {errors}} = useForm();
    const submitHandler = () => {
        console.log("data Submited");
    }
    console.log("errros:",error);
    const VaidationSchema = {
        nameValidator : { 
            required : {
                value : true,
                message: "Name is Required*"
            }
        },
        refCodeValidator : {
            required : {
                value : true,
                message: "ref code is required*"
            }, 
            validate : (params) => {
                //console.log("params",params)
                //return params=="facebook" || "not valid ref code"
                return rfcodeList.includes(params) || "not valid ref code"
            }
        },
        hobbiesValidator : {
            required : {
                value : true, 
                message : "hobbt is required*"
            },
            validate : (params) => {
                //checkbox -->array -->len
                //console.log("params for hobbies",params)
                return params.length >= 2 || "min 2 hobbies are required*"
            }
        }
    }
    // return ( 
    // )
};