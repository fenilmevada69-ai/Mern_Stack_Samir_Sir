import {useState} from "react";
export const InputDemo1 = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const nameHandler = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const emailHandler = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const clearDetails = () => {
        setName("");
        setEmail("");
        setAddress("");
        setIsClicked(false);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>INPUT DEMO 1</h1>
            <div>
                <label htmlFor="name">Name: </label>
                <input value={name} type="text" id="name" onChange={(e) => {nameHandler(e)}}/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" onChange={(e) => {emailHandler(e)}} id="email"/>
            </div>
            <div>
                <label htmlFor="address">Address: </label>
                <input type="text" onChange={(e) => {setAddress(e.target.value)}} id="address"/>
            </div>
            <button onClick={() => {setIsClicked(true)}}>Click Me</button>
            <button onClick={clearDetails}>Unclick</button>
            {
                isClicked == true &&
                <div>   
                    <h1>Name: {name}</h1>
                    <h1>Email: {email}</h1>
                    <h1>Address: {address}</h1>
                </div>
            }
        </div>
    )
}