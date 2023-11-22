import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/Kanbas/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <div class="wd-dashboard-header d-none d-sm-block">
                <h3>Sign up</h3>
                <hr />
            </div>
            {error && <div>{error}</div>}
            <input
                value={credentials.username}
                onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                })} />
            <input
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                })} />
            <button onClick={signup}>
                Signup
            </button>
        </div>
    );
}

export default Signup;