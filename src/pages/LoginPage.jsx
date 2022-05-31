import React from "react";
import {useNavigate}from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import{authActions} from "../store/auth.js"

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.username.value);
        console.log(e.target.elements.password.value);
        dispatch(authActions.login());
        navigate("/gallery");
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;