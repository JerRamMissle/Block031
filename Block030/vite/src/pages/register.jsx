import { useState } from "react"
import AuthForm from "../Components/AuthForm"

export default function Register({ setToken }) {

    return (
        < div >
            <h1>Register</h1>
            <AuthForm buttonText={"Register"} />
        </div >
    )
}