import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/localhost:3000", { email, password })
            .then(res => res.data === true && setPassword("signed in"))
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>SignIn</h2>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    placeholder="Enter an Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required={true}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    placeholder="Enter a password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required={true}
                />
            </label>
            <button type="submit">SignIn</button>
            {/* <button onClick={handleClick}>Testing</button> */}
        </form>
    )
}

export default SignInForm