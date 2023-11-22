import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
        if (account == null) {
            navigate(`/Kanbas/Signin`)
        }
    };

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/signin");
    };


    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);


    return (
        <div className="w-50">
            <div class="wd-dashboard-header d-none d-sm-block">
                <h3>Account</h3>
                <hr />
            </div>
            {account && (
                <div>
                    <h4>Username: {account.username}</h4>
                    <label for="password">Password: </label>
                    <input value={account.password}
                        id="password"
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <br />

                    <label for="firstName">firstName: </label>
                    <input value={account.firstName}
                        id="firstName"
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />

                    <label for="lastName">lastName: </label>
                    <input value={account.lastName}
                        id="lastName"
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <br />

                    <label for="dob">dob: </label>
                    <input value={account.dob}
                        id="dob"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <br />

                    <label for="email">email: </label>
                    <input value={account.email}
                        id="email"
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <br />

                    Role:
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <br/>
                    <button onClick={save} className="btn btn-primary">
                        Save
                    </button>
                    <br/>
                    <button onClick={signout} className="btn btn-danger">
                        Signout
                    </button>
                    <br />
                    <Link to="/Kanbas/admin/users" className="btn btn-warning">
                        Users
                    </Link>
                </div>
            )}
        </div>
    );
}
export default Account;