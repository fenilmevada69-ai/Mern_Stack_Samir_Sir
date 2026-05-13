import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const TaskDemo = () => {
    const { register, handleSubmit } = useForm();
    const [userData, setUserData] = useState({});
    const [isCliked, setIsClciked] = useState(false);
    const [gender, setGender] = useState("");

    const submitHandler = (data) => {
        console.log("date..",data)
        setUserData(data);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    {/*1*/}
                    <label htmlFor="name">Name: </label>
                    <input placeholder='enter your name' type="text" id="name" {...register} />
                </div>
                <div>
                    {/*2*/}
                    <label htmlFor="email">Email: </label>
                    <input placeholder='enter your email' type="text" id="email" {...register} />
                </div>
                <div>
                    {/*3*/}
                    <label htmlFor="password">Password: </label>
                    <input placeholder='enter your password' type="password" id="password" {...register} />
                </div>
                <div>
                    {/*4*/}
                    <label htmlFor="number">Number: </label>
                    <input placeholder='enter your mobile' type="text" id="number" {...register} />
                </div>
                <div>
                    {/*5*/}
                    <label htmlFor="message">Message: </label>
                    <textarea placeholder='enter your message' id="message" {...register} />
                </div>
                <div>
                    {/*6*/}
                    <label htmlFor="gender">Gender: </label>
                    Male: {" "}
                    <input type="radio" value="male" {...register("gender")} />
                    Female: {" "}
                    <input type="radio" value="female" {...register("gender")} />
                </div>
                <div>
                    {/*7*/}
                    <label htmlFor="hobbies">Choice: </label>
                    Cricket: {" "}
                    <input type="checkbox" value="cricket" {...register("hobbies")} />
                    Football: {" "}
                    <input type="checkbox" value="football" {...register("hobbies")} />
                    Music: {" "}
                    <input type="checkbox" value="music" {...register("hobbies")} />
                    Dance: {" "}
                    <input type="checkbox" value="dance" {...register("hobbies")} />
                </div>
            
                <div>
                    {/*8*/}
                    <label htmlFor="country">SELECT COUNTRY: {" "}</label>
                    <select {...register("country")} value={gender} onChange={(e) => {setGender(e.target.value)}}>
                        <option value="" disabled>
                            Select Country
                        </option>
                        <option value="india">India</option>
                        <option value="china">China</option>
                        <option value="rus">Russia</option>
                    </select>
                </div>
                <div>
                    {/*9*/}
                    <label htmlFor="file">Upload File: </label>
                    <input type="file" id="file" {...register("file")} />
                </div>
                <div>
                    {/*10*/}
                    <input type="submit" onClick={() => { setIsClciked(true) }} />
                </div>
            </form>
        </div>
    );
}